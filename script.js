/* Core Logic for Luxe Sofa Portal */

// =====================================
// 1. Product Data
//    - The product catalog used across shop, product, cart, and checkout pages.
//    - Each item includes metadata for rendering, filtering, and purchase actions.
// =====================================
const products = [
    // L-Shaped Sofas
    {
        id: 1,
        name: "Evergreen Velvet L-Shape",
        category: "L-Shaped Sofas",
        price: 1299,
        oldPrice: 1599,
        rating: 4.8,
        image: "Evergreen Velvet L-Shape.jpg",
        material: "Premium Velvet",
        colors: ["Charcoal", "Emerald", "Navy" ,"white"],
        size: "280cm x 180cm",
        description: "The Evergreen L-Shape is designed for those who value both style and relaxation. Its deep cushions and soft velvet finish make it the centerpiece of any modern living room."
    },
    {
        id: 2,
        name: "Hygge Corner Sofa",
        category: "L-Shaped Sofas",
        price: 899,
        oldPrice: 1100,
        rating: 4.5,
        image: "Hygge Corner Sofa.jpg",
        material: "Organic Linen",
        colors: ["Sand Beige", "Soft Grey","Dark Purple"],
        size: "240cm x 160cm",
        description: "Inspired by Danish comfort, the Hygge Corner sofa brings a warm, minimalist aesthetic to your home. It features a sturdy birch frame and linen-blend upholstery."
    },
    {
        id: 3,
        name: "Majestic Sectional L",
        category: "L-Shaped Sofas",
        price: 2100,
        oldPrice: 2500,
        rating: 4.9,
        image: "Majestic Sectional L.jpg",
        material: "Full Grain Leather",
        colors: ["Cognac", "Deep Black"],
        size: "300cm x 200cm",
        description: "Crafted from hand-selected Italian leather, the Majestic L-Shape ages beautifully over time. It offers firm support and a sophisticated look for executive homes."
    },
    {
        id: 14,
        name: "Siena L-Shaped Fabric",
        category: "L-Shaped Sofas",
        price: 1450,
        oldPrice: 1700,
        rating: 4.7,
        image: "Siena L-Shaped Fabric.jpg",
        material: "Polyester Weave",
        colors: ["Slate", "Camel"],
        size: "270cm x 170cm",
        description: "The Siena offers a spacious seating area with a contemporary low-profile design. Ideal for media rooms and family gatherings."
    },

    // Sectional Sofas
    {
        id: 4,
        name: "Modular Infinity Sectional",
        category: "Sectional Sofas",
        price: 3200,
        oldPrice: 3800,
        rating: 4.7,
        image: "Modular Infinity.jpg",
        material: "Stain-Resistant Fabric",
        colors: ["Cloud White", "Urban Slate"],
        size: "Configurable",
        description: "The Infinity Sectional adapts to your life. Its modular blocks can be rearranged to fit any room layout, providing endless possibilities for comfort."
    },
    {
        id: 15,
        name: "Skyline Modular Set",
        category: "Sectional Sofas",
        price: 2800,
        oldPrice: 3300,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
        material: "Performance Velvet",
        colors: ["Teal", "Charcoal"],
        size: "320cm x 320cm",
        description: "A luxury sectional that combines plush comfort with geometric precision. Features extra-wide armrests and deep-seated cushions."
    },

    // Recliner Sofas
    {
        id: 6,
        name: "Zenith Power Recliner",
        category: "Recliner Sofas",
        price: 1100,
        oldPrice: 1400,
        rating: 4.8,
        image: "Zenith Power Recliner.jpg",
        material: "Leatherette",
        colors: ["Java Brown", "Onyx"],
        size: "210cm x 95cm",
        description: "The Zenith brings the cinema experience home. With motorized reclining, adjustable headrests, and integrated USB ports, it's the peak of leisure technology."
    },
    {
        id: 16,
        name: "Relax Pro Triple Recliner",
        category: "Recliner Sofas",
        price: 1850,
        oldPrice: 2200,
        rating: 4.9,
        image: "Relax Pro Triple Recliner.jpg",
        material: "Suede-Touch Microfiber",
        colors: ["Espresso", "Grey"],
        size: "230cm x 100cm",
        description: "Ultimate relaxation for the whole family. Three individual reclining sections with ergonomic lumbar support."
    },

    // Wooden Sofas
    {
        id: 8,
        name: "Solid Oak Heritage",
        category: "Wooden Sofas",
        price: 750,
        oldPrice: 900,
        rating: 4.5,
        image: "Oak heritage.jpg",
        colors: ["Honey Oak", "Dark Walnut"],
        size: "180cm x 80cm",
        description: "Celebrate natural beauty with our Heritage collection. Each frame is carved from solid oak and paired with high-density cotton cushions."
    },
    {
        id: 17,
        name: "Teak Traditional ",
        category: "Wooden Sofas",
        price: 980,
        oldPrice: 1150,
        rating: 4.4,
        image: "Teak Traditional.jpg",
        material: "Solid Teak",
        colors: ["Natural Gloss", "Matte Walnut"],
        size: "195cm x 85cm",
        description: "Hand-finished teak wood with intricate carvings. Includes premium weather-resistant outdoor-friendly fabric cushions."
    },

    // Fabric Sofas
    {
        id: 9,
        name: "Velvet Serenity Settee",
        category: "Fabric Sofas",
        price: 600,
        oldPrice: 800,
        rating: 4.9,
        image: "Velvet Serenity Settee.jpg",
        material: "Matte Velvet",
        colors: ["Blush Pink", "Turquoise", "Ochre"],
        size: "160cm x 85cm",
        description: "Compact yet bold, the Serenity Settee fits beautifully in entryways or small apartments."
    },
    {
        id: 18,
        name: "Cotton Cloud 3-Seater",
        category: "Fabric Sofas",
        price: 720,
        oldPrice: 850,
        rating: 4.6,
        image: "Cotton Cloud.jpg",
        material: "Pima Cotton",
        colors: ["Off-White", "Sage Green"],
        size: "210cm x 90cm",
        description: "Experience the softness of cloud-like comfort. The Cotton Cloud is breathable, easy to clean, and perfect for warm climates."
    },

    // Leather Sofas
    {
        id: 10,
        name: "Classic Oxford Chesterfield",
        category: "Leather Sofas",
        price: 2500,
        oldPrice: 3000,
        rating: 5.0,
        image: "Classic Oxford Chesterfield.jpg",
        material: "Distressed Leather",
        colors: ["Oxblood Red", "Vintage Brown"],
        size: "220cm x 90cm",
        description: "The Oxford is the definitive Chesterfield. Featuring deep button tufting and nailhead trim."
    },
    {
        id: 19,
        name: "Modern Noir Leather",
        category: "Leather Sofas",
        price: 3100,
        oldPrice: 3500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800",
        material: "Nappa Leather",
        colors: ["Jet Black", "Steel Grey"],
        size: "225cm x 95cm",
        description: "Sleek, sharp, and sophisticated. The Modern Noir uses ultra-fine Nappa leather for a buttery smooth sitting experience."
    },

    {
        id: 21,
        name: "Lisbon Tufted Leather Sofa",
        category: "Leather Sofas",
        price: 3200,
        oldPrice: 3500,
        rating: 4.8,
        image: "Lisbon Tufted Leather Sofa.jpg",
        material: "Nappa Leather",
        colors: ["Jet Black", "Steel Grey"],
        size: "225cm x 95cm",
        description: "Premium Nappa leather sofa with a sleek design and ultra-smooth comfort"
    // Sofa Cum Beds
    },

    {
        id: 11,
        name: "Duo-Function Sleeper",
        category: "Sofa Cum Beds",
        price: 550,
        oldPrice: 750,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=800",
        material: "Polyester Drill",
        colors: ["Ash Grey", "Midnight Blue"],
        size: "190cm x 140cm",
        description: "Maximize your square footage with the Duo-Function. It transitions seamlessly into a queen-size guest bed."
    },

    {
        id: 20,
        name: "Studio Luxe Daybed",
        category: "Sofa Cum Beds",
        price: 850,
        oldPrice: 1000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800",
        material: "Chenille Fabric",
        colors: ["Beige", "Lavender"],
        size: "200cm x 150cm",
        description: "A premium daybed that functions as a deep sofa during the day and a luxurious thick-mattress bed at night."
    },

    // Luxury Designer Sofas
    {
        id: 12,
        name: "Lumina Curved Designer",
        category: "Luxury Designer Sofas",
        price: 4500,
        oldPrice: 5500,
        rating: 5.0,
        image: "Lumina Curved Designer.jpg",
        material: "Premium Bouclé",
        colors: ["Ivory", "Soft Sand"],
        size: "250cm x 110cm",
        description: "A sculptural masterpiece, the Lumina features sweeping curves and a tactile bouclé finish."
    },
    {
        id: 13,
        name: "Prestige Wingback Velvet",
        category: "Luxury Designer Sofas",
        price: 3800,
        oldPrice: 4500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80&w=800",
        material: "Royal Velvet",
        colors: ["Emerald", "Bordeaux"],
        size: "220cm x 110cm",
        description: "The Prestige Wingback merges traditional craftsmanship with contemporary flair."
    },
    {
        id: 21,
        name: "Aura Gilded 3-Seater",
        category: "Luxury Designer Sofas",
        price: 5200,
        oldPrice: 6000,
        rating: 5.0,
        image: "Aura Gilded 3-Seater.jpg",
        material: "Silk Velvet & Gold Leaf",
        colors: ["Gold", "Midnight"],
        size: "240cm x 100cm",
        description: "Fit for royalty. The Aura features hand-applied gold leaf on the legs and the finest silk velvet upholstery available."
    },
    {
        id: 22,
        name: "Sienna Luxe Sectional",
        category: "Sectional Sofas",
        price: 2400,
        oldPrice: 2800,
        rating: 4.8,
        image: "Sienna Luxe Sectional.jpg",
        material: "Performance Linen",
        colors: ["Sand", "Stone"],
        size: "300cm x 300cm",
        description: "The Siena Luxe offers a modular experience with high-quality linen that stays cool and comfortable all year round."
    },
    {
        id: 23,
        name: "Porto Modern Settee",
        category: "Fabric Sofas",
        price: 650,
        oldPrice: 800,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800",
        material: "Knitted Fabric",
        colors: ["Forest Green", "Amber"],
        size: "170cm x 85cm",
        description: "Modern Porto settee with unique knitted upholstery. Great for adding a texture pop to your living room."
    },
    {
        id: 24,
        name: "Vantage Power Recliner",
        category: "Recliner Sofas",
        price: 1350,
        oldPrice: 1600,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=800",
        material: "PU Leather",
        colors: ["Burgundy", "Black"],
        size: "215cm x 100cm",
        description: "Smooth glide power reclining with adjustable lumbar support and built-in cup holders for the serious sleeper."
    },
 
    {
    
        id: 24,
        name: "VLuxe Motorised Recliner Sofa.",
        category: "Recliner Sofas",
        price: 2350,
        oldPrice: 1600,
        rating: 4.7,
        image: "Luxe Motorised Recliner Sofa.jpg",
        material: "PU Leather",
        colors: ["Burgundy", "Black"],
        size: "215cm x 100cm",
        description: "Power reclining comfort with lumbar support and built-in cup holders."
    },

    {
        id: 25,
        name: "Nordic Minimalist 2-Seater",
        category: "Fabric Sofas",
        price: 450,
        oldPrice: 550,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800",
        material: "Cotton Blend",
        colors: ["Light Grey", "White"],
        size: "150cm x 80cm",
        description: "Clean lines and simple comfort. The Nordic is perfect for studio apartments and small spaces."
    },
    {
        id: 26,
        name: "Estate Leather Sofa",
        category: "Leather Sofas",
        price: 2900,
        oldPrice: 3400,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
        material: "Top Grain Leather",
        colors: ["Tobacco", "Dark Chocolate"],
        size: "230cm x 95cm",
        description: "The Estate is built to last generations. Premium leather wrapped around a solid mahogany frame."
    },
    {
        id: 27,
        name: "Cosy Sleeper Ottoman",
        category: "Sofa Cum Beds",
        price: 400,
        oldPrice: 500,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
        material: "Faux Suede",
        colors: ["Navy", "Grey"],
        size: "120cm x 190cm (Bed)",
        description: "A compact ottoman that unfolds into a single bed. The perfect emergency guest solution."
    },
    {
        id: 28,
        name: "Tuscan Sun L-Shape",
        category: "L-Shaped Sofas",
        price: 1650,
        oldPrice: 1950,
        rating: 4.6,
        image: "Tuscan Sun L-Shape.jpg",
        material: "Woven Linen",
        colors: ["Terracotta", "Cream"],
        size: "290cm x 185cm",
        description: "Warm tones and soft textures. The Tuscan Sun brings a Mediterranean vibe to your lounge area."
    },
    {
        id: 29,
        name: "Iconic Wingback Chair",
        category: "Luxury Designer Sofas",
        price: 1200,
        oldPrice: 1500,
        rating: 4.8,
        image: "Iconic Wingback Chair.jpg",
        material: "Velvet & Brass",
        colors: ["Deep Green", "Gold"],
        size: "90cm x 110cm",
        description: "A designer accent piece that stands out. High-back support with brass-tipped wooden legs."
    },
    {
        id: 30,
        name: "Grand Horizon Sectional",
        category: "Sectional Sofas",
        price: 4000,
        oldPrice: 4800,
        rating: 5.0,
        image: "Grand Horizon Sectional.jpg",
        material: "Italian Performance Velvet",
        colors: ["Slate Blue", "Silver"],
        size: "350cm x 350cm",
        description: "The ultimate luxury sectional for expansive homes. Unrivaled scale and theater-grade comfort."
    }
];

// =====================================
// 2. Global State
//    - Persistent cart state stored in localStorage
// =====================================
let cart = JSON.parse(localStorage.getItem('luxe_cart')) || [];

// =====================================
// 3. DOM Elements
//    - Cached DOM nodes used by rendering and interactivity logic
// =====================================
// DOM Elements
const navbar = document.getElementById('navbar');
const cartCountElement = document.getElementById('cart-count');
const productGrid = document.getElementById('product-grid');
const productDetailContainer = document.getElementById('product-detail-container');
const relatedGrid = document.getElementById('related-grid');
const cartItemsElement = document.getElementById('cart-items');
const checkoutItemsElement = document.getElementById('checkout-items');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTotalElement = document.getElementById('cart-total');
const checkoutSubtotalElement = document.getElementById('checkout-subtotal');
const checkoutTotalElement = document.getElementById('checkout-total');
const searchInput = document.getElementById('product-search');
const featuredProductsGrid = document.getElementById('featured-products');
const categoryFilters = document.querySelectorAll('.cat-filter');
const priceSort = document.getElementById('price-sort');

// =====================================
// 4. Initialization
//    - Sets up page-specific behavior when DOM is ready.
// =====================================
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initNavbarScroll();
    
    if (productGrid) {
        initShopPage();
    }

    if (productDetailContainer) {
        initProductPage();
    }

    if (cartItemsElement) {
        renderCart();
    }

    if (checkoutItemsElement) {
        renderCheckout();
    }

    if (featuredProductsGrid) {
        renderFeatured();
    }
});

function initShopPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    
    if (catParam) {
        categoryFilters.forEach(btn => {
            if (btn.dataset.category === catParam) {
                categoryFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    }
    
    filterProducts();
    initFilters();
}

// Render Products
function renderProducts(items) {
    if (!productGrid) return;
    
    productGrid.innerHTML = items.map(product => `
        <div class="product-card glass-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <i class="far fa-heart" title="Add to Wishlist"></i>
                    <i class="fas fa-shopping-cart" onclick="addToCart(${product.id})" title="Add to Cart"></i>
                    <a href="product.html?id=${product.id}"><i class="fas fa-eye" title="View Details"></i></a>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="old-price">$${product.oldPrice}</span>
                    <span class="new-price">$${product.price}</span>
                </div>
                <div class="rating" style="color: var(--secondary); margin-top: 5px;">
                    ${getRatingStars(product.rating)}
                </div>
            </div>
        </div>
    `).join('');
}

function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="${i <= Math.floor(rating) ? 'fas' : (i - 0.5 <= rating ? 'fas fa-star-half-alt' : 'far')} fa-star"></i>`;
    }
    return stars;
}

// Filtering Logic
function initFilters() {
    // Search
    searchInput?.addEventListener('input', () => {
        filterProducts();
    });

    // Categories
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            categoryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts();
        });
    });

    // Sort
    priceSort?.addEventListener('change', () => {
        filterProducts();
    });
}

function filterProducts() {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const activeCat = document.querySelector('.cat-filter.active')?.dataset.category || 'all';
    const sortVal = priceSort?.value || 'default';

    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesCat = activeCat === 'all' || p.category === activeCat;
        return matchesSearch && matchesCat;
    });

    // Apply Sorting
    if (sortVal === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'high') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    renderProducts(filtered);
}

// Product Detail Page Logic
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        renderProductDetail(product);
        renderRelatedProducts(product.category, product.id);
    } else {
        productDetailContainer.innerHTML = "<h2>Product Not Found</h2>";
    }
}

function renderProductDetail(p) {
    productDetailContainer.innerHTML = `
        <div class="product-detail-flex" style="display: flex; gap: 50px; flex-wrap: wrap;">
            <div class="detail-img" style="flex: 1; min-width: 300px;">
                <img src="${p.image}" style="width: 100%; border-radius: var(--border-radius); box-shadow: var(--shadow-soft);">
            </div>
            <div class="detail-info" style="flex: 1; min-width: 300px;">
                <p class="product-category" style="color: var(--secondary); letter-spacing: 2px;">${p.category}</p>
                <h1 style="font-size: 42px; margin: 10px 0;">${p.name}</h1>
                <div class="rating" style="margin-bottom: 20px; color: var(--secondary);">
                    ${getRatingStars(p.rating)} (4.8/5)
                </div>
                <div class="price-section" style="margin-bottom: 30px;">
                    <span style="font-size: 32px; font-weight: 700; color: var(--primary);">$${p.price}</span>
                    <span style="text-decoration: line-through; color: #999; margin-left: 15px;">$${p.oldPrice}</span>
                </div>
                <p style="color: var(--text-muted); margin-bottom: 30px;">${p.description}</p>
                
                <div class="specs" style="margin-bottom: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div><strong>Material:</strong><br>${p.material}</div>
                    <div><strong>Dimensions:</strong><br>${p.size}</div>
                    <div><strong>Colors:</strong><br>${p.colors.join(', ')}</div>
                </div>

                <div class="actions" style="display: flex; gap: 20px; align-items: center;">
                    <input type="number" value="1" min="1" style="padding: 12px; width: 60px; border-radius: 5px; border: 1px solid #ddd;">
                    <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
                    <button class="btn btn-outline" onclick="buyNow(${p.id})">Buy It Now</button>
                </div>
            </div>
        </div>
    `;
}

function renderRelatedProducts(category, currentId) {
    if (!relatedGrid) return;
    const related = products.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
    
    relatedGrid.innerHTML = related.map(product => `
        <div class="product-card glass-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <a href="product.html?id=${product.id}"><i class="fas fa-eye"></i></a>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Cart Page Logic
function renderCart() {
    if (cart.length === 0) {
        cartItemsElement.innerHTML = "<h3>Your cart is empty.</h3><a href='shop.html' class='btn btn-outline' style='margin-top: 20px;'>Start Shopping</a>";
        updateCartTotal();
        return;
    }

    cartItemsElement.innerHTML = cart.map(item => `
        <div class="cart-item glass-card" style="display: flex; align-items: center; gap: 20px; padding: 20px; margin-bottom: 20px;">
            <img src="${item.image}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px;">
            <div style="flex: 1;">
                <h4 style="font-family: 'Playfair Display', serif;">${item.name}</h4>
                <p style="color: var(--text-muted); font-size: 14px;">$${item.price}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
            <p style="font-weight: 700; width: 80px; text-align: right;">$${item.price * item.quantity}</p>
            <i class="fas fa-trash" style="color: #ff4444; cursor: pointer; margin-left: 20px;" onclick="removeFromCart(${item.id})"></i>
        </div>
    `).join('');

    updateCartTotal();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            renderCart();
            updateCartCount();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
}

function updateCartTotal() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (cartSubtotalElement) cartSubtotalElement.innerText = `$${subtotal}`;
    if (cartTotalElement) cartTotalElement.innerText = `$${subtotal}`;
}

function checkout() {
    if (cart.length === 0) return alert("Your cart is empty!");
    location.href = "checkout.html";
}

// Checkout Page Logic
function renderCheckout() {
    if (cart.length === 0) {
        location.href = "cart.html";
        return;
    }

    checkoutItemsElement.innerHTML = cart.map(item => `
        <div style="display: flex; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <img src="${item.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;">
            <div style="flex: 1;">
                <p style="font-weight: 600; font-size: 14px; margin: 0;">${item.name}</p>
                <p style="color: #666; font-size: 12px;">Qty: ${item.quantity}</p>
            </div>
            <p style="font-size: 14px; font-weight: 600;">$${item.price * item.quantity}</p>
        </div>
    `).join('');

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (checkoutSubtotalElement) checkoutSubtotalElement.innerText = `$${subtotal}`;
    if (checkoutTotalElement) checkoutTotalElement.innerText = `$${subtotal}`;
}

function processPayment() {
    alert("Payment Successful! Your order has been placed.");
    cart = [];
    saveCart();
    location.href = "index.html";
}

// Buy Now Function
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart = [{ ...product, quantity: 1 }];
        saveCart();
        location.href = "checkout.html";
    }
}

// Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

function saveCart() {
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
}

function updateCartCount() {
    if (cartCountElement) {
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountElement.innerText = count;
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Global Exports
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.processPayment = processPayment;
window.buyNow = buyNow;
window.addToCart = addToCart;
