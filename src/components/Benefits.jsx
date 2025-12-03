import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      title: "Nature's Perfect Match",
      description: "Tallow is bio-identical to your skin's natural oils, providing deep hydration that synthetic creams can't match.",
      icon: "🧬"
    },
    {
      title: "Transparently Pure",
      description: "Know exactly what you're putting on your skin. Our ingredient list is simple, pure, and honest.",
      icon: "✨"
    },
    {
      title: "Australian Ethos",
      description: "From our pasture-raised cattle to our small-batch crafting, we're committed to Australian quality.",
      icon: "🇦🇺"
    }
  ]

  return (
    <section className="benefits section">
      <div className="container">
        <div className="section-header text-center">
          <h2>The Science of Nature</h2>
          <p className="section-subtitle">
            Discover why tallow is the most bio-compatible skincare ingredient
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="science-details">
          <div className="science-item">
            <div className="science-number">01</div>
            <h4>Biocompatibilidad Total</h4>
            <p>
              La estructura molecular del sebo es casi idéntica a los aceites naturales 
              de la piel humana, permitiendo una absorción profunda sin obstruir poros.
            </p>
          </div>
          <div className="science-item">
            <div className="science-number">02</div>
            <h4>Vitaminas A, D, E y K</h4>
            <p>
              Un cóctel natural de antioxidantes y nutrientes esenciales que la mayoría 
              de las lociones sintéticas intentan imitar.
            </p>
          </div>
          <div className="science-item">
            <div className="science-number">03</div>
            <h4>Alivio para Piel Sensible</h4>
            <p>
              Específicamente formulado para calmar brotes de eccema, rosácea y psoriasis 
              sin ardor ni irritación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
