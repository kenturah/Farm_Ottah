const products = [
  {
    id: 1,
    category: "vegetables",
    icon: "🥬",
    items: [
      {
        id: "vegetables-001",
        name: "Fresh Tomatoes",
        image: "assets/images/Tomato.jpeg",
        variants: [
          { size: "Basket", price: 50000 },
          { size: "Half Basket", price: 25000 },
          { size: "Carton", price: 10000 },
        ],
      },
      {
        id: "vegetables-002",
        name: "Fresh Pepper (Tatashe)",
        image: "assets/images/Tatashe.jpeg",
        variants: [
          { size: "Paint Bucket", price: 8000 },
          { size: "Half Basket", price: 20000 },
        ],
      },
      {
        id: "vegetables-003",
        name: "Scotch Bonnet (Rodo)",
        image: "assets/images/Rodo.jpg",
        variants: [
          { size: "Paint Bucket", price: 6000 },
          { size: "Half Basket", price: 14000 },
        ],
      },
      {
        id: "vegetables-004",
        name: "Fresh Onions",
        image: "assets/images/Onions.jpeg",
        variants: [
          { size: "Paint Bucket", price: 9000 },
          { size: "Big Bag", price: 45000 },
        ],
      },
      {
        id: "vegetables-005",
        name: "Ugu Leaves (Fluted Pumpkin)",
        image: "assets/images/Ugu_Leaves.jpg",
        variants: [
          { size: "Bundle", price: 500 },
          { size: "Crate (24 Bundles)", price: 30000 },
        ],
      },
      {
        id: "vegetables-006",
        name: "Water Leaf",
        image: "assets/images/Water_leaf.jpg",
        variants: [
          { size: "Bundle", price: 1000 },
          { size: "Crate (24 Bundles)", price: 20000 },
        ],
      },
      {
        id: "vegetables-007",
        name: "Bitter Leaf",
        image: "assets/images/Bitter_leaf.jpg",
        variants: [
          { size: "Bundle", price: 1200 },
          { size: "Crate (24 Bundles)", price: 24000 },
        ],
      },
      {
        id: "vegetables-008",
        name: "Fresh Okra",
        image: "assets/images/Okra.jpg",
        variants: [
          { size: "Paint Bucket", price: 5000 },
          { size: "Half Basket", price: 12000 },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "grains",
    icon: "🌾",
    items: [
      {
        id: "grains-001",
        name: "Premium Local Rice",
        image: "assets/images/Local_Rice.jpg",
        variants: [
          { size: "50kg Bag", price: 65000 },
          { size: "25kg Bag", price: 35000 },
          { size: "10kg Bag", price: 15000 },
        ],
      },
      {
        id: "grains-002",
        name: "Ofada Rice (Local)",
        image: "assets/images/Ofada rice.jpg",
        variants: [
          { size: "50kg Bag", price: 65000 },
          { size: "25kg Bag", price: 35000 },
          { size: "10kg Bag", price: 15000 },
        ],
      },
      {
        id: "grains-003",
        name: "Honey Beans (Oloyin)",
        image: "assets/images/Oloyin_Beans.jpg",
        variants: [
          { size: "Paint Bucket", price: 13000 },
          { size: "Small Bag", price: 25000 },
          { size: "Big Bag", price: 48000 },
        ],
      },
      {
        id: "grains-004",
        name: "Brown Beans (Drum Beans)",
        image: "assets/images/genericImg.jpg",
        variants: [
          { size: "Small Bag", price: 18000 },
          { size: "Big Bag", price: 34000 },
        ],
      },
      {
        id: "grains-005",
        name: "Ijebu Garri (white)",
        image: "assets/images/Garri.jpeg",
        variants: [
          { size: "Paint Bucket", price: 8000 },
          { size: "Small Bag (25kg)", price: 55000 },
        ],
      },
      {
        id: "grains-006",
        name: "Yellow Garri",
        image: "assets/images/Yellow Garri.jpg",
        variants: [
          { size: "Paint Bucket", price: 11000 },
          { size: "Small Bag", price: 22000 },
        ],
      },
      {
        id: "grains-007",
        name: "Yellow Corn",
        image: "assets/images/Yellow_corn.jpg",
        variants: [
          { size: "Paint Bucket", price: 5000 },
          { size: "Big Bag", price: 30000 },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "tubers",
    icon: "🍠",
    items: [
      {
        id: "tubers-001",
        name: "Large Yam (3-5 Tubers)",
        image: "assets/images/Yam_Tubers.jpeg",
        variants: [
          { size: "Small Bundle (3 pcs)", price: 12500 },
          { size: "Large Bundle (5 pcs)", price: 18000 },
        ],
      },
      {
        id: "tubers-002",
        name: "Sweet Potatoes",
        image: "assets/images/Sweet-potato.jpg",
        variants: [
          { size: "Paint Bucket", price: 4500 },
          { size: "Small Bag", price: 8500 },
        ],
      },
      {
        id: "tubers-003",
        name: "Irish Potatoes",
        image: "assets/images/Irish_Potato.jpg",
        variants: [
          { size: "Paint Bucket", price: 5000 },
          { size: "Small Bag", price: 9500 },
        ],
      },
      {
        id: "tubers-004",
        name: "Cassava (Raw)",
        image: "assets/images/cassava.jpg",
        variants: [
          { size: "Small Bag", price: 6000 },
          { size: "Big Bag", price: 11000 },
        ],
      },
      {
        id: "tubers-005",
        name: "Cocoyam (Ede)",
        image: "assets/images/Cocoyam.jpg",
        variants: [
          { size: "Paint Bucket", price: 6500 },
          { size: "Small Bag", price: 12000 },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "livestock",
    icon: "🐄",
    items: [
      {
        id: "livestock-001",
        name: "Live Local Goat",
        image: "assets/images/Live_goat.png",
        variants: [
          { size: "Medium Size", price: 85000 },
          { size: "Large Size", price: 120000 },
        ],
      },
      {
        id: "livestock-002",
        name: "Live Cow",
        image: "assets/images/Live_cow.jpg",
        variants: [
          { size: "Small Size", price: 600000 },
          { size: "Large Size", price: 1200000 },
        ],
      },
      {
        id: "livestock-003",
        name: "Live Chicken",
        image: "assets/images/Broiler Chicken .png",
        variants: [
          { size: "Small Size", price: 12000 },
          { size: "Large Size", price: 30000 },
        ],
      },
      {
        id: "livestock-004",
        name: "Fresh Beef (Boneless)",
        image: "assets/images/Fresh_Beef.jpg",
        variants: [
          { size: "1 kg", price: 8500 },
          { size: "5 kg", price: 40000 },
        ],
      },
      {
        id: "livestock-005",
        name: "Live Turkey",
        image: "assets/images/Live_turkey.jpg",
        variants: [
          { size: "Medium Size", price: 45000 },
          { size: "Large Size", price: 70000 },
        ],
      },
      {
        id: "livestock-006",
        name: "Live Ram",
        image: "assets/images/Ram.jpg",
        variants: [
          { size: "Medium Size", price: 150000 },
          { size: "Large Size", price: 250000 },
        ],
      },
      {
        id: "livestock-007",
        name: "Live Duck",
        image: "assets/images/Live_duck.jpg",
        variants: [
          { size: "Medium Size", price: 18000 },
          { size: "Large Size", price: 28000 },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "frozen-foods",
    icon: "🧊",
    items: [
      {
        id: "frozen-001",
        name: "Frozen Chicken (Lap)",
        image: "assets/images/Frozen_chicken.jpg",
        variants: [
          { size: "1 kg", price: 6500 },
          { size: "5 kg", price: 30000 },
        ],
      },
      {
        id: "frozen-002",
        name: "Frozen Turkey",
        image: "assets/images/Frozen-Turkey.jpg",
        variants: [
          { size: "Whole (4–5 kg)", price: 28000 },
          { size: "Whole (6–8 kg)", price: 40000 },
        ],
      },
      {
        id: "frozen-003",
        name: "Frozen Croaker Fish",
        image: "assets/images/Frozen-Croaker.jpeg",
        variants: [
          { size: "1 kg", price: 7000 },
          { size: "5 kg", price: 32000 },
        ],
      },
      {
        id: "frozen-004",
        name: "Frozen Tilapia Fish",
        image: "assets/images/frozen-tilapia.jpg",
        variants: [
          { size: "1 kg", price: 5500 },
          { size: "5 kg", price: 26000 },
        ],
      },
      {
        id: "frozen-005",
        name: "Frozen Shrimp (Deveined)",
        image: "assets/images/shrimp.jpg",
        variants: [
          { size: "500g Pack", price: 8000 },
          { size: "1 kg Pack", price: 15000 },
        ],
      },
      {
        id: "frozen-006",
        name: "Frozen Catfish (Point & Kill)",
        image: "assets/images/Frozzen-catfish.png",
        variants: [
          { size: "1 kg", price: 8500 },
          { size: "5 kg", price: 40000 },
        ],
      },
    ],
  },
  {
    id: 6,
    category: "oil-and-pantry",
    icon: "🫙",
    items: [
      {
        id: "pantry-001",
        name: "Red Palm Oil",
        image: "assets/images/palm-oil.jpg",
        variants: [
          { size: "1 Litre", price: 2500 },
          { size: "4 Litres (Gallon)", price: 9500 },
          { size: "25 Litres (Jerry Can)", price: 55000 },
        ],
      },
      {
        id: "pantry-002",
        name: "Groundnut Oil",
        image: "assets/images/groundnut oil.jpg",
        variants: [
          { size: "1 Litre", price: 3500 },
          { size: "4 Litres (Gallon)", price: 13000 },
        ],
      },
      {
        id: "pantry-003",
        name: "Dried Crayfish",
        image: "assets/images/dried-crayfish.jpg",
        variants: [
          { size: "Paint Bucket", price: 22000 },
          { size: "Small Bag", price: 40000 },
        ],
      },
      {
        id: "pantry-004",
        name: "Dried Pepper (Blended)",
        image: "assets/images/dried-pepper.jpg",
        variants: [
          { size: "500g Pack", price: 3000 },
          { size: "1 kg Pack", price: 5500 },
        ],
      },
      {
        id: "pantry-005",
        name: "Ogiri (Locust Bean Paste)",
        image: "assets/images/Ogiri.jpg",
        variants: [
          { size: "Small Pack", price: 500 },
          { size: "Bulk (20 Wraps)", price: 8000 },
        ],
      },
      {
        id: "pantry-006",
        name: "Iru (Fermented Locust Beans)",
        image: "assets/images/Iru.jpg",
        variants: [
          { size: "Small Pack", price: 800 },
          { size: "Paint Bucket", price: 12000 },
        ],
      },
      {
        id: "pantry-007",
        name: "Stockfish (Okporoko)",
        image: "assets/images/Stockfish.jpg",
        variants: [
          { size: "Small Size", price: 5000 },
          { size: "Large Size", price: 12000 },
        ],
      },
    ],
  },
  {
    id: 7,
    category: "fruits",
    icon: "🍎",
    items: [
      {
        id: "fruits-001",
        name: "Fresh Pineapple",
        image: "assets/images/Pineapple.png",
        variants: [
          { size: "Single (Large)", price: 2000 },
          { size: "Crate (10 pcs)", price: 18000 },
        ],
      },
      {
        id: "fruits-002",
        name: "Watermelon",
        image: "assets/images/Watermelon.png",
        variants: [
          { size: "Small (2–3 kg)", price: 3500 },
          { size: "Large (5–7 kg)", price: 7000 },
        ],
      },
      {
        id: "fruits-003",
        name: "Ripe Plantain",
        image: "assets/images/Plantain.jpg",
        variants: [
          { size: "Hand (6–8 fingers)", price: 2000 },
          { size: "Bunch", price: 10000 },
        ],
      },
      {
        id: "fruits-004",
        name: "Unripe Plantain",
        image: "assets/images/Unripe_plantain.jpg",
        variants: [
          { size: "Hand (6–8 fingers)", price: 1800 },
          { size: "Bunch", price: 9000 },
        ],
      },
      {
        id: "fruits-005",
        name: "Fresh Banana",
        image: "assets/images/Banana.jpg",
        variants: [
          { size: "Hand", price: 1500 },
          { size: "Bunch", price: 6000 },
        ],
      },
      {
        id: "fruits-006",
        name: "Sweet Orange",
        image: "assets/images/Oranges.jpg",
        variants: [
          { size: "6 Pieces", price: 1500 },
          { size: "Bag (30 pcs)", price: 7000 },
        ],
      },
      {
        id: "fruits-007",
        name: "Pawpaw (Papaya)",
        image: "assets/images/Pawpaw.jpg",
        variants: [
          { size: "Small", price: 1500 },
          { size: "Large", price: 3000 },
        ],
      },
      {
        id: "fruits-008",
        name: "Mango (Julie / Igbo)",
        image: "assets/images/Mango.jpg",
        variants: [
          { size: "6 Pieces", price: 2000 },
          { size: "Crate (24 pcs)", price: 7000 },
        ],
      },
      {
        id: "fruits-009",
        name: "Avocado Pear",
        image: "assets/images/avocado-pear.jpg",
        variants: [
          { size: "4 Pieces", price: 2500 },
          { size: "Crate", price: 15000 },
        ],
      },
      {
        id: "fruits-010",
        name: "Coconut",
        image: "assets/images/Coconut.jpg",
        variants: [
          { size: "Single", price: 500 },
          { size: "Bag (10 pcs)", price: 4500 },
        ],
      },
    ],
  },
  {
    id: 8,
    category: "eggs-and-dairy",
    icon: "🥚",
    items: [
      {
        id: "eggs-001",
        name: "Farm Fresh Eggs",
        image: "assets/images/fresh_eggs.jpeg",
        variants: [
          { size: "6 Pieces", price: 2500 },
          { size: "1 Crate (30 pcs)", price: 11500 },
          { size: "3 Crates (90 pcs)", price: 33000 },
        ],
      },
      {
        id: "eggs-002",
        name: "Quail Eggs",
        image: "assets/images/Quail_eggs.jpg",
        variants: [
          { size: "20 Pieces", price: 2000 },
          { size: "50 Pieces", price: 4500 },
        ],
      },
      {
        id: "eggs-003",
        name: "Duck Eggs",
        image: "assets/images/duck eggs.jpg",
        variants: [
          { size: "6 Pieces", price: 3500 },
          { size: "1 Crate (30 pcs)", price: 15000 },
        ],
      },
      {
        id: "eggs-004",
        name: "Fresh Cow Milk",
        image: "assets/images/cow-milk.jpg",
        variants: [
          { size: "500 ml", price: 1500 },
          { size: "1 Litre", price: 2800 },
        ],
      },
      {
        id: "eggs-005",
        name: "Fresh Goat Milk",
        image: "assets/images/goat-milk.jpg",
        variants: [
          { size: "500 ml", price: 2000 },
          { size: "1 Litre", price: 3800 },
        ],
      },
      {
        id: "eggs-006",
        name: "Local Yoghurt (Fura da Nono)",
        image: "assets/images/fura.jpg",
        variants: [
          { size: "Small Cup", price: 500 },
          { size: "Large Cup", price: 1000 },
        ],
      },
      {
        id: "eggs-007",
        name: "Wara (Local Cheese)",
        image: "assets/images/wara.png",
        variants: [
          { size: "Small Pack", price: 1500 },
          { size: "Large Pack", price: 3000 },
        ],
      },
    ],
  },
  {
    id: 9,
    category: "nuts-and-seeds",
    icon: "🥜",
    items: [
      {
        id: "nuts-001",
        name: "Raw Groundnuts (Peanuts)",
        image: "assets/images/raw-groundnut.png",
        variants: [
          { size: "Paint Bucket", price: 8000 },
          { size: "Small Bag", price: 15000 },
        ],
      },
      {
        id: "nuts-002",
        name: "Egusi (Melon Seeds)",
        image: "assets/images/egusi.jpg",
        variants: [
          { size: "Paint Bucket", price: 18000 },
          { size: "Small Bag", price: 32000 },
        ],
      },
      {
        id: "nuts-003",
        name: "Sesame Seeds (Benne)",
        image: "assets/images/Sesame.jpg",
        variants: [
          { size: "500g Pack", price: 4000 },
          { size: "Small Bag", price: 20000 },
        ],
      },
      {
        id: "nuts-004",
        name: "Tiger Nuts (Ofio)",
        image: "assets/images/tiger-nuts.jpg",
        variants: [
          { size: "Paint Bucket", price: 7000 },
          { size: "Small Bag", price: 13000 },
        ],
      },
      {
        id: "nuts-005",
        name: "Cashew Nuts (Raw)",
        image: "assets/images/cashew-nuts.jpg",
        variants: [
          { size: "500g Pack", price: 6500 },
          { size: "1 kg Pack", price: 12000 },
        ],
      },
    ],
  },
  {
    id: 10,
    category: "spices",
    icon: "🌿",
    items: [
      {
        id: "spices-001",
        name: "Uziza Leaves (Dried)",
        image: "assets/images/Uziza(dried).jpg",
        variants: [
          { size: "Small Pack", price: 1000 },
          { size: "Large Pack", price: 2500 },
        ],
      },
      {
        id: "spices-002",
        name: "Ehuru (Calabash Nutmeg)",
        image: "assets/images/ehuru.jpg",
        variants: [
          { size: "Small Pack", price: 1500 },
          { size: "Large Pack", price: 3500 },
        ],
      },
      {
        id: "spices-003",
        name: "Uda (Negro Pepper)",
        image: "assets/images/Uda.jpg",
        variants: [
          { size: "Small Pack", price: 800 },
          { size: "Large Pack", price: 2000 },
        ],
      },
      {
        id: "spices-004",
        name: "Uziza Seeds",
        image: "assets/images/uziza-seeds.jpg",
        variants: [
          { size: "Small Pack", price: 1200 },
          { size: "Large Pack", price: 3000 },
        ],
      },
      {
        id: "spices-005",
        name: "Turmeric (Dried / Ground)",
        image: "assets/images/tumeric.jpg",
        variants: [
          { size: "100g Pack", price: 1500 },
          { size: "500g Pack", price: 6000 },
        ],
      },
      {
        id: "spices-006",
        name: "Ginger (Fresh)",
        image: "assets/images/Ginger.jpg",
        variants: [
          { size: "500g", price: 3000 },
          { size: "1 kg", price: 5500 },
        ],
      },
      {
        id: "spices-007",
        name: "Garlic (Fresh Bulbs)",
        image: "assets/images/garlic.jpg",
        variants: [
          { size: "250g", price: 2500 },
          { size: "1 kg", price: 8500 },
        ],
      },
    ],
  },
  {
    id: 11,
    category: "festive-packages",
    icon: "🎁",
    items: [
      {
        id: "festive-001",
        name: "Eid / Christmas Goat Package",
        image: "assets/images/Christmas-goat.jpg",
        variants: [
          { size: "Medium Goat + Spices", price: 95000 },
          { size: "Large Goat + Spices", price: 135000 },
        ],
      },
      {
        id: "festive-002",
        name: "Celebration Chicken Pack",
        image: "assets/images/Festive-chicken.jpg",
        variants: [
          { size: "3 Live Chickens", price: 38000 },
          { size: "5 Live Chickens", price: 60000 },
        ],
      },
      {
        id: "festive-003",
        name: "New Year Foodstuff Bundle",
        image: "assets/images/Foodstuff-bundle.jpg",
        variants: [
          { size: "Family Pack (Feeds 6–8)", price: 120000 },
          { size: "Extended Pack (Feeds 10–15)", price: 200000 },
        ],
      },
      {
        id: "festive-004",
        name: "Ram (Sallah Special)",
        image: "assets/images/Festive-ram.jpg",
        variants: [
          { size: "Medium Ram", price: 180000 },
          { size: "Large Ram", price: 280000 },
        ],
      },
      {
        id: "festive-005",
        name: "Corporate Gift Hamper",
        image: "assets/images/Hamper-gift.png",
        variants: [
          { size: "Standard Pack", price: 45000 },
          { size: "Premium Pack", price: 85000 },
        ],
      },
    ],
  },
];