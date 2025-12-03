import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="best-seller">★ BEST SELLER</span>
          <h1>THE ESSENCE OF OZ</h1>
          <h2>Return to the Essentials</h2>
          <p className="hero-subtitle">
            Discover Australia's purest skincare secret. 100% grass-fed tallow, 
            halal-certified, and chemical-free. The way nature intended skincare to be.
          </p>
          <div className="hero-features">
            <span>✓ Bio-Compatible</span>
            <span>✓ Halal Certified</span>
            <span>✓ Chemical-Free</span>
          </div>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg">Experience Pure Skincare</button>
            <button className="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div className="product-image-placeholder">
              <div className="jar-illustration">
                <div className="jar-body"></div>
                <div className="jar-lid"></div>
                <div className="jar-label">
                  <span>OZ</span>
                  <span>TALLOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="value-bar">
        <div className="container">
          <div className="value-items">
            <div className="value-item">
              <span className="icon">🌾</span>
              <span>100% Grass-Fed Australian Tallow</span>
            </div>
            <div className="value-item">
              <span className="icon">✨</span>
              <span>Halal Certified Purity</span>
            </div>
            <div className="value-item">
              <span className="icon">🧪</span>
              <span>Chemical-Free Formulations</span>
            </div>
            <div className="value-item">
              <span className="icon">🇦🇺</span>
              <span>Made in Australia with Pride</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
