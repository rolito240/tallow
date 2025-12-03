import './Products.css'

function Products() {
  const products = [
    {
      name: "Essential Whipped Tallow Cream",
      price: "45.00",
      description: "Your daily skincare essential. Pure, uncomplicated hydration that works with your skin's natural biology.",
      features: ["For face, body, and hands", "All skin types including sensitive", "Light, whipped texture"],
      badge: "BEST SELLER",
      category: "Essential Collection"
    },
    {
      name: "Premium Whipped Tallow Cream",
      price: "49.00",
      description: "Enriched with Australian essential oils for elevated skincare",
      features: ["Enhanced with botanicals", "Deep moisturization", "Luxurious texture"],
      badge: null,
      category: "Premium Collection"
    },
    {
      name: "Renewal Care Cream",
      price: "48.00",
      description: "Specialized care for healing and maintaining body art",
      features: ["Accelerates healing process", "Maintains vibrancy", "Soothing and protective"],
      badge: null,
      category: "Specialized Solutions"
    },
    {
      name: "Sensitive Skin Formula",
      price: "47.00",
      description: "Ultra-gentle formula for reactive and delicate skin",
      features: ["Fragrance-free", "Hypoallergenic", "Extra soothing"],
      badge: null,
      category: "Specialized Solutions"
    }
  ]

  return (
    <main className="products-page">
      <section className="page-hero">
        <div className="container">
          <h1>Skincare Essentials</h1>
          <p>Simple solutions for complex skin needs. Each product crafted with our signature 100% grass-fed tallow base.</p>
        </div>
      </section>

      <section className="products-section section">
        <div className="container">
          {/* Essential Collection */}
          <div className="product-category">
            <h2>Essential Collection</h2>
            <p className="category-description">Our core formulations for daily hydration and skin balance</p>
            <div className="products-grid">
              {products.filter(p => p.category === "Essential Collection").map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* Premium Collection */}
          <div className="product-category">
            <h2>Premium Collection</h2>
            <p className="category-description">Enriched with Australian botanicals for elevated skincare</p>
            <div className="products-grid">
              {products.filter(p => p.category === "Premium Collection").map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* Specialized Solutions */}
          <div className="product-category">
            <h2>Specialized Solutions</h2>
            <p className="category-description">Targeted care for specific skin needs</p>
            <div className="products-grid">
              {products.filter(p => p.category === "Specialized Solutions").map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <div className="shipping-grid">
              <div className="shipping-option">
                <h4>Standard Australia Wide</h4>
                <p className="price">AUS$10</p>
                <p>3-5 business days</p>
              </div>
              <div className="shipping-option highlighted">
                <h4>Free Shipping</h4>
                <p className="price">AUS$0</p>
                <p>On orders over AUS$100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProductCard({ product }) {
  return (
    <div className="product-card card">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}
      <div className="product-image">
        <div className="jar-mini">
          <div className="jar-mini-lid"></div>
          <div className="jar-mini-body"></div>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">AUS${product.price}</p>
        <p className="product-description">{product.description}</p>
        <ul className="product-features">
          {product.features.map((feature, idx) => (
            <li key={idx}>✓ {feature}</li>
          ))}
        </ul>
        <button className="btn btn-primary">Add to Cart • 120ml</button>
      </div>
    </div>
  )
}

export default Products
