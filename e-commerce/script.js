// Mock Product Database
const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 299, category: "Electronics", img: "images/headphones.jpeg" },
    { id: 2, name: "Minimalist Leather Watch", price: 150, category: "Accessories", img: "images/watch1.jpeg" },
    { id: 3, name: "Smart Fitness Tracker", price: 89, category: "Electronics", img: "images/tracker.jpeg" },
    { id: 4, name: "Ergonomic Office Chair", price: 450, category: "Furniture", img: "images/chair.jpeg" },
    { id: 5, name: "Portable Bluetooth Speaker", price: 120, category: "Electronics", img: "images/speaker.jpeg" },
    { id: 6, name: "Organic Cotton Hoodie", price: 75, category: "Fashion", img: "images/hoodie.jpeg" },
    { id: 7, name: "4K Wireless Camera", price: 599, category: "Electronics", img: "images/camera.jpeg" },
    { id: 8, name: "Designer Sunglasses", price: 189, category: "Accessories", img: "images/sunglasses.jpeg" },
    { id: 9, name: "Premium Leather Backpack", price: 250, category: "Fashion", img: "images/backpack.jpeg" },
    { id: 10, name: "Mechanical Gaming Keyboard", price: 169, category: "Electronics", img: "images/keyboard.jpeg" },
    { id: 11, name: "Wireless Mouse Pro", price: 79, category: "Electronics", img: "images/mouse.jpeg" },
    { id: 12, name: "Standing Desk Converter", price: 399, category: "Furniture", img: "images/desktop.jpeg" },
    { id: 13, name: "Modern Desk Lamp", price: 95, category: "Furniture", img: "images/lamp.jpeg" },
    { id: 14, name: "Cozy Knit Sweater", price: 65, category: "Fashion", img: "images/sweater.jpeg" },
    { id: 15, name: "Classic Denim Jeans", price: 89, category: "Fashion", img: "images/jeans.jpeg" },
    { id: 16, name: "Portable Power Bank 20000mAh", price: 45, category: "Electronics", img: "images/powerbank.jpeg" },
    { id: 17, name: "Stainless Steel Water Bottle", price: 35, category: "Accessories", img: "images/bottle.jpeg" },
    { id: 18, name: "Wireless Charging Pad", price: 49, category: "Electronics", img: "images/charger.jpeg" },
    { id: 19, name: "Leather Crossbody Bag", price: 145, category: "Accessories", img: "images/bag.jpeg" },
    { id: 20, name: "Smart Home Hub", price: 199, category: "Electronics", img: "images/smarthome.jpeg" },
    { id: 21, name: "Leather jacket", price: 499, category: "Fashion", img: "images/leather.jpeg" }
];

let cart = [];
let lastScrollTop = 0;

// Initialize Site
window.onload = () => {
    renderView('home');
    initScrollNavBar();
};

// --- SCROLL NAVBAR HIDE/SHOW ---
function initScrollNavBar() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 100) {
            if (currentScroll > lastScrollTop) {
                // Scrolling DOWN - hide navbar
                header.classList.add('hide-nav');
            } else {
                // Scrolling UP - show navbar
                header.classList.remove('hide-nav');
            }
        } else {
            // At top - always show
            header.classList.remove('hide-nav');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
}

// --- VIEW CONTROLLER ---
function renderView(view) {
    const main = document.getElementById('main-content');

    if (view === 'home') {
        main.innerHTML = `
            <section class="container hero">
                <div class="hero-text">
                    <h1>Elevate Your Lifestyle</h1>
                    <p>Discover premium products across tech, fashion, accessories, and furniture.</p>
                    <button class="btn-add" onclick="renderView('shop')" style="width:200px; margin-top:1rem">Shop Now</button>
                </div>
            </section>

            <!-- Categories Section -->
            <section class="container" style="margin:4rem 0">
                <h2 style="margin-bottom:2rem; text-align:center; font-size:2rem">Shop by Category</h2>
                <div class="categories-grid">
                    <div class="category-card" onclick="filterCategory('Electronics')">
                        <div class="category-icon">⚡</div>
                        <h3>Electronics</h3>
                        <p>Headphones, Cameras, Smart Devices</p>
                    </div>
                    <div class="category-card" onclick="filterCategory('Fashion')">
                        <div class="category-icon">👕</div>
                        <h3>Fashion</h3>
                        <p>Hoodies, Jeans, Sneakers</p>
                    </div>
                    <div class="category-card" onclick="filterCategory('Accessories')">
                        <div class="category-icon">👜</div>
                        <h3>Accessories</h3>
                        <p>Watches, Bags, Belts</p>
                    </div>
                    <div class="category-card" onclick="filterCategory('Furniture')">
                        <div class="category-icon">🪑</div>
                        <h3>Furniture</h3>
                        <p>Desks, Chairs, Organizers</p>
                    </div>
                </div>
            </section>

            <!-- Featured Products -->
            <section class="container" style="margin:4rem 0">
                <h2 style="margin-bottom:2rem; font-size:1.8rem">⭐ Featured Products</h2>
                <div class="product-grid" id="featured-grid"></div>
            </section>

            <!-- Best Sellers -->
            <section class="container" style="margin:4rem 0">
                <h2 style="margin-bottom:2rem; font-size:1.8rem">🔥 Best Sellers</h2>
                <div class="product-grid" id="bestseller-grid"></div>
            </section>

            <!-- Benefits Section -->
            <section class="benefits" style="margin:4rem 0; padding:3rem; background:linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); border-radius:16px; color:white">
                <div class="container">
                    <h2 style="text-align:center; margin-bottom:3rem; font-size:2rem">Why Choose Us?</h2>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <div class="benefit-icon">🚚</div>
                            <h3>Fast Shipping</h3>
                            <p>Free shipping on orders over $50. Delivery in 2-3 business days.</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">🔒</div>
                            <h3>Secure Checkout</h3>
                            <p>SSL encrypted payments. Your data is safe and secure.</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">↩️</div>
                            <h3>Easy Returns</h3>
                            <p>30-day money-back guarantee. No questions asked.</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">💬</div>
                            <h3>24/7 Support</h3>
                            <p>Live chat support available round the clock.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter -->
            <section class="newsletter-section">
                <div class="container">
                    <h2 style="margin-bottom:0.8rem; font-size:2rem; font-weight:800">✉️ Get Exclusive Deals</h2>
                    <p style="color:var(--grey); margin-bottom:2.5rem; font-size:1.08rem; max-width:520px; margin-left:auto; margin-right:auto">Subscribe to our newsletter for special offers, insider tips, and updates delivered straight to your inbox</p>
                    <div class="newsletter-form">
                        <input type="email" id="newsletter-email" placeholder="Enter your email address" required>
                        <button onclick="subscribeNewsletter()">Subscribe</button>
                    </div>
                    <p style="color:#94a3b8; margin-top:1.2rem; font-size:0.9rem">✓ No spam. Unsubscribe anytime.</p>
                </div>
            </section>
        `;
        displayProducts(products.slice(0, 6), 'featured-grid');
        displayProducts(products.slice(6, 12), 'bestseller-grid');
    }

    else if (view === 'shop') {
        main.innerHTML = `
            <div class="container shop-layout">
                <aside class="filters">
                    <h3>Filters</h3><br>
                    <p>Category</p>
                    <select onchange="filterCategory(this.value)">
                        <option value="all">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                    </select><br><br>
                    <p>Price Range</p>
                    <input type="range" min="0" max="1000">
                </aside>
                <div class="product-grid" id="shop-grid"></div>
            </div>
        `;
        displayProducts(products, 'shop-grid');
    }

    else if (view === 'cart') {
        renderCart();
    }
}

// --- SEARCH PRODUCTS ---
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();

    if (!searchTerm) {
        renderView('shop');
        return;
    }

    renderView('shop');
    setTimeout(() => {
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );

        if (filtered.length === 0) {
            const grid = document.getElementById('shop-grid');
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem"><h3 style="color:var(--grey)">No products found for "${searchTerm}"</h3><p style="color:#94a3b8; margin-top:0.5rem">Try searching for different keywords</p></div>`;
        } else {
            displayProducts(filtered, 'shop-grid');
            showNotification(`✓ Found ${filtered.length} product(s)`);
        }
    }, 10);
}

// --- FILTER CATEGORY ---
function filterCategory(category) {
    document.getElementById('search-input').value = '';
    renderView('shop');
    setTimeout(() => {
        const filtered = category === 'all' ? products : products.filter(p => p.category === category);
        displayProducts(filtered, 'shop-grid');
    }, 10);
}

// --- PRODUCT DISPLAY ---
function displayProducts(items, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = items.map(item => `
        <div class="product-card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <button class="btn-add" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join('');
}


// --- CART LOGIC ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    showNotification(`✓ ${product.name} added to cart!`);
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    showNotification(`✗ ${item.name} removed from cart`);
    renderCart();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        z-index: 2000;
        animation: slideInRight 0.4s ease;
        font-weight: 600;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function renderCart() {
    const main = document.getElementById('main-content');
    if (cart.length === 0) {
        main.innerHTML = `<div class="container" style="padding:100px; text-align:center"><h2>Your cart is empty</h2><p style="margin-top:1rem; color:#64748b">Start shopping to add items!</p></div>`;
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    main.innerHTML = `
        <div class="container" style="margin-top:2rem">
            <h2 style="margin-bottom:2rem; font-size:2rem">Your Shopping Cart</h2>
            <div class="cart-container">
                <table class="cart-table">
                    <thead><tr><th>Product</th><th>Price</th><th>Action</th></tr></thead>
                    <tbody>
                        ${cart.map((item, idx) => `<tr><td>${item.name}</td><td>$${item.price}</td><td><button onclick="removeFromCart(${idx})" style="background:#ef4444; color:white; border:none; padding:0.5rem 1rem; border-radius:6px; cursor:pointer; font-weight:600">Remove</button></td></tr>`).join('')}
                    </tbody>
                </table>
                <div style="margin-top:2rem; padding-top:2rem; border-top:2px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center">
                    <h3 style="font-size:1.5rem">Total: <span style="color:var(--primary)">$${total}</span></h3>
                    <button class="btn-add" style="width:250px" onclick="checkout()">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    `;
}

// --- AUTH MODAL ---
function toggleAuth() {
    const modal = document.getElementById('auth-modal');
    modal.classList.toggle('show');
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('auth-modal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

function checkout() {
    alert("Proceeding to Secure Stripe/PayPal Payment Gateway...");
    cart = [];
    updateCartCount();
    renderView('home');
}

// --- NEWSLETTER SUBSCRIPTION ---
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (!email) {
        showNotification('Please enter your email address');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address');
        return;
    }

    showNotification(`✓ Successfully subscribed with ${email}`);
    emailInput.value = '';
}