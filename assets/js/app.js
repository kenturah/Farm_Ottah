// ============================================================
// CONFIG
// ============================================================
const WHATSAPP_NUMBER = "2348121156043"; // your WA number, no +
const PAYSTACK_PUBLIC_KEY = "pk_live_XXXXXXXXXXXXXXXXXXXXXXXX"; // ← paste your real key
const CART_STORAGE_KEY = "farmottah_cart";

// Handpicked one-per-category items for the landing page slider.
// Just swap any ID here to change what's featured — must match an id in product.js
const featuredProductIds = [
  "vegetables-001", // Fresh Tomatoes
  "grains-001",     // Premium Local Rice
  "fruits-002",     // Watermelon
  "livestock-001",  // Live Local Goat
  "eggs-001",       // Farm Fresh Eggs
  "frozen-001",     // Frozen Chicken (Lap)
  "tubers-001",     // Large Yam
  "spices-006",     // Fresh Ginger
  "pantry-001",     // Red Palm Oil
  "nuts-005",       // Cashew Nuts
  "festive-001",    // Eid / Christmas Goat Package
];

const FEATURED_AUTOSLIDE_MS = 2000; // 2 seconds
let featuredAutoSlideTimer = null;

// ============================================================
// CART STATE
// ============================================================
let cartItems = [];
loadCartFromStorage();

// ============================================================
// PRODUCTS — RENDER & FILTER
// ============================================================

// Shared markup for a single product card — used by both the full
// shop grid (renderProducts) and the landing page slider (renderFeatured)
function productCardHTML(item) {
  return `
      <div class="product" data-category="${item.category}">
        <img src="${item.image}" alt="${item.name}" />
        <div class="product-body">
          <h3>${item.name}</h3>
          <p class="price" id="price-${item.id}">
            ₦${item.variants[0].price.toLocaleString()}
          </p>
          <select id="select-${item.id}" onchange="updatePrice('${item.id}')">
            ${item.variants
              .map((v) => `<option value="${v.price}">${v.size}</option>`)
              .join("")}
          </select>
          <button class="add-btn" onclick="addToCart('${item.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    `;
}

// Renders the full shop grid — pass a category name or "all"
// Only runs on pages that have a #productGrid (shop.html)
function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const noResults = document.getElementById("noResults");
  const activeFilter = document.getElementById("activeFilter");

  let items = [];

  if (filter === "all") {
    // Flatten all items from every category into one array
    products.forEach((cat) => {
      cat.items.forEach((item) => {
        items.push({ ...item, category: cat.category });
      });
    });
  } else {
    // Find the matching category and grab its items
    const category = products.find(
      (cat) => cat.category.toLowerCase() === filter.toLowerCase(),
    );
    if (category) {
      items = category.items.map((item) => ({
        ...item,
        category: category.category,
      }));
    }
  }

  // Show "no results" if empty
  if (items.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    activeFilter.textContent = filter !== "all" ? `Showing: ${filter}` : "";
    return;
  }

  noResults.style.display = "none";
  activeFilter.textContent = filter !== "all" ? `Showing: ${filter}` : "";

  grid.innerHTML = items.map(productCardHTML).join("");
}

// ============================================================
// FEATURED SLIDER (landing page)
// ============================================================

// Renders the curated featured products into the sliding track.
// Only runs on pages that have a #featuredTrack (index.html)
function renderFeatured() {
  const track = document.getElementById("featuredTrack");
  if (!track) return;

  const items = featuredProductIds.map(findItem).filter(Boolean);
  track.innerHTML = items.map(productCardHTML).join("");
}

// Moves the slider by one card. direction: 1 = next, -1 = previous
function slideFeatured(direction) {
  const track = document.getElementById("featuredTrack");
  if (!track) return;

  const card = track.querySelector(".product");
  const gap = 20;
  const step = card ? card.offsetWidth + gap : 280;

  const maxScroll = track.scrollWidth - track.clientWidth;

  // If we're at (or near) the end and going forward, loop back to start
  if (direction > 0 && track.scrollLeft >= maxScroll - 5) {
    track.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }
  // If we're at the start and going backward, loop to the end
  if (direction < 0 && track.scrollLeft <= 5) {
    track.scrollTo({ left: maxScroll, behavior: "smooth" });
    return;
  }

  track.scrollBy({ left: direction * step, behavior: "smooth" });
}

// Manual arrow click — slides immediately and resets the auto-slide timer
function manualSlide(direction) {
  slideFeatured(direction);
  restartFeaturedAutoSlide();
}

function startFeaturedAutoSlide() {
  stopFeaturedAutoSlide();
  featuredAutoSlideTimer = setInterval(() => slideFeatured(1), FEATURED_AUTOSLIDE_MS);
}

function stopFeaturedAutoSlide() {
  if (featuredAutoSlideTimer) clearInterval(featuredAutoSlideTimer);
}

function restartFeaturedAutoSlide() {
  startFeaturedAutoSlide();
}

// ============================================================
// CATEGORY NAVIGATION (shared between landing page & shop page)
// ============================================================

// On shop.html: filters in place. On any other page: navigates to shop.html
function goToShop(filter) {
  const onShopPage = document.getElementById("productGrid") !== null;

  if (onShopPage) {
    renderProducts(filter);
    const url = new URL(window.location.href);
    if (filter === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", filter);
    }
    window.history.replaceState({}, "", url);
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href =
      filter === "all" ? "shop.html" : `shop.html?category=${encodeURIComponent(filter)}`;
  }
}

// Updates displayed price when dropdown changes
function updatePrice(itemId) {
  const selectEl = document.getElementById(`select-${itemId}`);
  const newPrice = Number(selectEl.value);
  document.getElementById(`price-${itemId}`).textContent =
    `₦${newPrice.toLocaleString()}`;
}

// Finds an item by id across all categories
function findItem(itemId) {
  for (const cat of products) {
    const found = cat.items.find((item) => item.id === itemId);
    if (found) return { ...found, category: cat.category };
  }
  return null;
}

// ============================================================
// PAGE INIT — runs whichever pieces exist on the current page
// ============================================================

// Reflect whatever was saved in the cart (from a previous page) right away
updateCartUI();

// Shop page: read ?category= from the URL and render that filter
if (document.getElementById("productGrid")) {
  const params = new URLSearchParams(window.location.search);
  renderProducts(params.get("category") || "all");
}

// Landing page: render the curated slider and start auto-sliding
const featuredTrackEl = document.getElementById("featuredTrack");
if (featuredTrackEl) {
  renderFeatured();
  startFeaturedAutoSlide();

  // Pause while the user is interacting, resume after
  featuredTrackEl.addEventListener("mouseenter", stopFeaturedAutoSlide);
  featuredTrackEl.addEventListener("mouseleave", startFeaturedAutoSlide);
  featuredTrackEl.addEventListener("touchstart", stopFeaturedAutoSlide, { passive: true });
  featuredTrackEl.addEventListener("touchend", startFeaturedAutoSlide);
}

// ============================================================
// CART — ADD / REMOVE / CLEAR / TOTAL
// ============================================================

function addToCart(itemId) {
  const item = findItem(itemId);
  const selectEl = document.getElementById(`select-${itemId}`);
  const selectedPrice = Number(selectEl.value);
  const selectedSize = selectEl.options[selectEl.selectedIndex].text;

  // If same product + same size already in cart, increase count
  const existing = cartItems.find(
    (i) => i.id === itemId && i.qty === selectedSize,
  );

  if (existing) {
    existing.count += 1;
  } else {
    cartItems.push({
      id: item.id,
      name: item.name,
      category: item.category,
      qty: selectedSize,
      price: selectedPrice,
      count: 1,
    });
  }

  updateCartUI();
  showToast(`${item.name} added to cart!`);
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCartUI();
}

function clearCart() {
  cartItems = [];
  updateCartUI();
}

function getTotal() {
  return cartItems.reduce((sum, i) => sum + i.price * i.count, 0);
}

// ============================================================
// CART — PERSISTENCE (so cart survives navigating between pages)
// ============================================================

function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (e) {
    // storage unavailable (private browsing etc.) — fail silently
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    cartItems = saved ? JSON.parse(saved) : [];
  } catch (e) {
    cartItems = [];
  }
}

// ============================================================
// CART — UI UPDATE
// ============================================================

function updateCartUI() {
  saveCartToStorage();

  const total = getTotal();
  const count = cartItems.reduce((sum, i) => sum + i.count, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("paystackTotal").textContent = total.toLocaleString();

  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");

  if (cartItems.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footerEl.style.display = "none";
    return;
  }

  itemsEl.innerHTML = cartItems
    .map(
      (item, i) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span class="cart-item-qty">${item.qty} × ${item.count}</span>
        </div>
        <div class="cart-item-right">
          <span>₦${(item.price * item.count).toLocaleString()}</span>
          <button class="remove-btn" onclick="removeItem(${i})" aria-label="Remove ${item.name}">✕</button>
        </div>
      </div>
    `,
    )
    .join("");

  document.getElementById("cartTotal").textContent =
    "₦" + total.toLocaleString();
  footerEl.style.display = "block";
}

// ============================================================
// CART DRAWER — OPEN / CLOSE
// ============================================================

function toggleCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const isOpen = drawer.classList.toggle("open");
  overlay.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// ============================================================
// CHECKOUT — WHATSAPP
// ============================================================

function orderViaWhatsapp() {
  if (cartItems.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const total = getTotal();
  const date = new Date().toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let msg = `🌿 *NEW ORDER — FARM-OTTAH*\n`;
  msg += `📅 ${date}\n\n`;
  msg += `🛒 *ORDER DETAILS:*\n`;
  msg += `─────────────────\n`;
  cartItems.forEach((item) => {
    msg += `• *${item.name}* (${item.qty})\n`;
    msg += `  Qty: ${item.count}  →  ₦${(item.price * item.count).toLocaleString()}\n`;
  });
  msg += `─────────────────\n`;
  msg += `💰 *TOTAL: ₦${total.toLocaleString()}*\n\n`;
  msg += `📦 Please confirm availability and provide delivery details.\n`;
  msg += `Thank you! 🙏`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

// ============================================================
// CHECKOUT — PAYSTACK
// ============================================================

function initiatePaystack() {
  if (cartItems.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const total = getTotal();
  const name = document.getElementById("custName").value.trim();
  const email = document.getElementById("custEmail").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const formEl = document.getElementById("customerForm");

  // Show the form if not visible yet
  if (!formEl.classList.contains("visible")) {
    formEl.classList.add("visible");
    showToast("Please fill in your details, then click Pay again.");
    return;
  }

  // Validate fields
  if (!name || !email || !phone || !address) {
    showToast("Please fill in all your details above.");
    document.getElementById("custName").focus();
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("Please enter a valid email address.");
    return;
  }

  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: total * 100, // kobo
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name,
        },
        { display_name: "Phone",   variable_name: "phone", value: phone },
        {
          display_name: "Delivery Address",
          variable_name: "delivery_address",
          value: address,
        },
        {
          display_name: "Order Summary",
          variable_name: "order_summary",
          value: cartItems
            .map((i) => `${i.name} (${i.qty}) x${i.count}`)
            .join(", "),
        },
      ],
    },
    callback: function (response) {
      showToast("✅ Payment successful! Ref: " + response.reference);
      sendPaymentConfirmationWA(
        response.reference,
        name,
        phone,
        address,
        total,
      );
      clearCart();
      toggleCart();
    },
    onClose: function () {
      showToast("Payment window closed.");
    },
  });

  handler.openIframe();
}

// Send WhatsApp confirmation after successful Paystack payment
function sendPaymentConfirmationWA(ref, name, phone, address, total) {
  const date = new Date().toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let msg = `✅ *PAYMENT CONFIRMED — FARM-OTTAH*\n`;
  msg += `📅 ${date}\n\n`;
  msg += `👤 *${name}*\n`;
  msg += `📞 ${phone}\n`;
  msg += `📍 ${address}\n\n`;
  msg += `🛒 *ITEMS:*\n`;
  cartItems.forEach((item) => {
    msg += `• ${item.name} (${item.qty}) ×${item.count} — ₦${(item.price * item.count).toLocaleString()}\n`;
  });
  msg += `\n💰 *TOTAL PAID: ₦${total.toLocaleString()}*\n`;
  msg += `🔖 *Paystack Ref:* ${ref}\n\n`;
  msg += `Please process this order for delivery. Thank you! 🙏`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

// ============================================================
// MOBILE NAV
// ============================================================

function toggleNav() {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("hamburger");
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen);
  btn.classList.toggle("active", isOpen);
}

// Close nav when a link is clicked
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("hamburger").classList.remove("active");
  });
});

// ============================================================
// SCROLL — SCROLL TO TOP BUTTON
// ============================================================

window.addEventListener("scroll", () => {
  document.getElementById("scrollTop").style.display =
    window.scrollY > 400 ? "flex" : "none";
});

// ============================================================
// SCROLL — ACTIVE NAV LINK ON SCROLL
// ============================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// ============================================================
// TOAST NOTIFICATION
// ============================================================

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}
