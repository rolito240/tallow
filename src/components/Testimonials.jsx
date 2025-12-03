import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      text: "Llevo años luchando con parches de eccema en los brazos. Nada funcionaba hasta que probé esto. En 3 días la rojez desapareció.",
      author: "María G.",
      rating: 5,
      condition: "Eccema"
    },
    {
      text: "Tenía miedo de que oliera a carne o fuera grasoso, pero se absorbe increíblemente y mi piel brilla.",
      author: "Carlos R.",
      rating: 5,
      condition: "Piel Seca"
    },
    {
      text: "I've struggled with sensitive skin for years. Oz Tallow is the first product that doesn't cause reactions and actually hydrates. It's revolutionary in its simplicity.",
      author: "Sarah K.",
      location: "Melbourne",
      rating: 5,
      condition: "Piel Sensible"
    },
    {
      text: "Mi psoriasis ha mejorado notablemente. Finalmente encontré algo natural que realmente funciona.",
      author: "Diego M.",
      rating: 5,
      condition: "Psoriasis"
    }
  ]

  return (
    <section className="testimonials section bg-cream">
      <div className="container">
        <div className="section-header text-center">
          <span className="testimonial-badge">⭐ 10,000+ Pieles Transformadas</span>
          <h2>Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            Historias reales de personas que encontraron alivio y transformación
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <p className="testimonial-author">— {testimonial.author}</p>
                {testimonial.location && (
                  <p className="testimonial-location">{testimonial.location}</p>
                )}
                <span className="testimonial-condition">{testimonial.condition}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="social-proof">
          <div className="proof-stat">
            <h3>10,000+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="proof-stat">
            <h3>4.9/5</h3>
            <p>Rating Promedio</p>
          </div>
          <div className="proof-stat">
            <h3>95%</h3>
            <p>Recomendarían</p>
          </div>
          <div className="proof-stat">
            <h3>100%</h3>
            <p>Natural</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
