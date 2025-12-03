import './About.css'

function About() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Promise of Purity</h1>
          <p>In a world of complicated skincare and synthetic ingredients, we're returning to what truly matters: pure, effective, and honest nourishment for your skin.</p>
        </div>
      </section>

      <section className="story-section section">
        <div className="container">
          <h2>From Australian Pastures to Your Skin</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Our story began with a simple observation: the most effective skincare often comes from the simplest ingredients. While others were adding more chemicals, we were looking back to traditional wisdom.
              </p>
              <p>
                We discovered that grass-fed tallow – a nutrient-rich fat used for centuries – provided remarkable benefits that modern formulations were missing. But not just any tallow would do. We committed to sourcing only the highest quality, halal-certified tallow from Australian cattle that roam freely on pristine pastures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section bg-cream">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon">🌾</div>
              <h3>Grass-Fed & Pasture-Raised</h3>
              <p>Our cattle enjoy open pastures year-round, resulting in tallow rich in vitamins A, D, E, and K – nutrients your skin recognizes and absorbs naturally.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">✨</div>
              <h3>Halal Certified Integrity</h3>
              <p>Our Halal certification represents more than religious compliance – it's our commitment to ethical sourcing, purity standards, and transparent processing.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🧪</div>
              <h3>Chemical-Free Philosophy</h3>
              <p>We believe what you leave out is as important as what you put in. No synthetic preservatives, no artificial fragrances, no compromises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <h2>The Oz Tallow Difference</h2>
          <p className="section-subtitle">Our process is intentionally simple because purity doesn't need complexity</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Ethical Sourcing</h4>
              <p>We partner with Australian farms that share our commitment to animal welfare and sustainable practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Gentle Rendering</h4>
              <p>Our small-batch rendering preserves the precious nutrients and ensures maximum purity. Filtered with specialized water filters free from flora and chlorine.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Minimalist Formulating</h4>
              <p>We add only what enhances – never what compromises. Each ingredient serves a purpose.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
