import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>We're Here to Help</h1>
          <p>Have questions about our products, your order, or tallow skincare in general? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-methods">
              <div className="contact-method card">
                <div className="method-icon">📧</div>
                <h3>Email Support</h3>
                <div className="contact-details">
                  <p><strong>General Questions:</strong><br />info@oztallow.com</p>
                  <p><strong>Order Support:</strong><br />orders@oztallow.com</p>
                  <p><strong>Returns & Exchanges:</strong><br />returns@oztallow.com</p>
                </div>
                <p className="response-time">We respond within 24 hours</p>
              </div>

              <div className="contact-method card">
                <div className="method-icon">📱</div>
                <h3>Social Media</h3>
                <div className="contact-details">
                  <p>Follow and message us on Instagram</p>
                  <p><strong>@OzTallow</strong></p>
                  <p>We share skincare tips, behind-the-scenes, and customer stories</p>
                </div>
                <p className="response-time">We respond within 12 hours</p>
              </div>
            </div>

            <div className="contact-form-container card">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </form>
            </div>
          </div>

          <div className="faq-section">
            <h2>Common Questions</h2>
            <div className="faq-grid">
              <div className="faq-item card">
                <h4>How long does shipping take?</h4>
                <p>Most orders arrive within 3-5 business days with standard shipping.</p>
              </div>
              <div className="faq-item card">
                <h4>Is tallow suitable for my skin type?</h4>
                <p>Yes! Tallow is bio-compatible with all skin types, including sensitive skin.</p>
              </div>
              <div className="faq-item card">
                <h4>Can I use this on my face?</h4>
                <p>Absolutely! Many customers use our creams as their primary facial moisturizer.</p>
              </div>
              <div className="faq-item card">
                <h4>What is your return policy?</h4>
                <p>We offer a 30-day happiness guarantee on all products.</p>
              </div>
            </div>
          </div>

          <div className="closing-note">
            <h3>Thank you for choosing Oz Tallow</h3>
            <p>We're a small Australian business passionate about pure, effective skincare. Your support means everything to us.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
