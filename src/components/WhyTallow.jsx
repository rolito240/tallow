import { useState } from 'react'
import './WhyTallow.css'

function WhyTallow() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "¿No es grasa animal?",
      answer: "Sí, y por eso funciona. Las plantas no tienen la misma biología que tu piel. El sebo ancestral se ha utilizado durante siglos antes de la era de los químicos sintéticos. Su composición molecular es prácticamente idéntica a los lípidos de tu propia piel."
    },
    {
      question: "¿Cómo se siente en la piel?",
      answer: "Rico pero no pegajoso. Se funde al contacto con el calor corporal. A diferencia de muchas cremas que quedan en la superficie, el sebo se absorbe profundamente sin dejar residuo grasoso."
    },
    {
      question: "¿Es seguro para piel sensible?",
      answer: "Absolutamente. El sebo es hipoalergénico por naturaleza y es seguro para bebés, mujeres embarazadas y personas con condiciones como eccema, psoriasis y rosácea. No contiene fragancias sintéticas ni químicos irritantes."
    },
    {
      question: "¿Por qué Grass-Fed (alimentado con pasto)?",
      answer: "El ganado alimentado con pasto produce sebo con mayor concentración de vitaminas A, D, E y K, además de ácidos grasos omega-3. Esto se traduce en un producto más nutritivo y efectivo para tu piel."
    },
    {
      question: "¿Qué significa Halal Certified?",
      answer: "Nuestra certificación Halal representa más que cumplimiento religioso: es nuestro compromiso con el abastecimiento ético, estándares de pureza y procesamiento transparente. Garantiza el más alto nivel de calidad."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="why-tallow section">
      <div className="container">
        <div className="section-header text-center">
          <h2>¿Por qué Sebo?</h2>
          <p className="section-subtitle">
            Todo lo que necesitas saber sobre el ingrediente más biocompatible para el cuidado de la piel
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="why-highlights">
          <div className="highlight-box">
            <h3>✓ Hipoalergénico</h3>
            <p>Libre de fragancias sintéticas y químicos irritantes</p>
          </div>
          <div className="highlight-box">
            <h3>✓ Seguro para Todos</h3>
            <p>Bebés, embarazadas y piel sensible</p>
          </div>
          <div className="highlight-box">
            <h3>✓ Grass-Fed Premium</h3>
            <p>Ganado alimentado con pasto australiano</p>
          </div>
          <div className="highlight-box">
            <h3>✓ Multiusos</h3>
            <p>Rostro, cuerpo, labios y manos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTallow
