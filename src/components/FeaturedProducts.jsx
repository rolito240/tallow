import './FeaturedProducts.css'

function FeaturedProducts() {
  const products = [
    {
      name: "Essential Whipped Tallow Cream",
      price: "45.00",
      description: "Pure, uncompromised hydration for all skin types",
      features: ["For face, body, and hands", "All skin types including sensitive", "Light, whipped texture"],
      badge: "BEST SELLER"
    },
    {
      name: "Premium Whipped Tallow Cream",
      price: "49.00",
      description: "Enriched with Australian essential oils for elevated skincare",
      features: ["Enhanced with botanicals", "Deep moisturization", "Luxurious texture"],
      badge: null
    },
    {
      name: "Renewal Care Cream",
      price: "48.00",
      description: "Specialized care for healing and maintaining body art",
      features: ["Accelerates healing process", "Maintains vibrancy", "Soothing and protective"],
      badge: null
    },
    {
      name: "Sensitive Skin Formula",
      price: "47.00",
      description: "Ultra-gentle formula for reactive and delicate skin",
      features: ["Fragrance-free", "Hypoallergenic", "Extra soothing"],
      badge: null
    }
  ]

  return (
    <section className="featured-products section bg-cream">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Essentials Collection</h2>
          <p className="section-subtitle">
            Simple, effective skincare solutions for every need
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card card">
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
          ))}
        </div>

        <div className="cta-section">
          <h3>More than 10,000 pieles transformadas</h3>
          <p>Join our community and experience the Oz Tallow difference</p>
          <button className="btn btn-secondary btn-lg">View All Products</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
