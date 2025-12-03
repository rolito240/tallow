import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3>OZ TALLOW</h3>
            <p>Return to the Essentials</p>
            <p className="footer-description">
              100% Grass-Fed Australian Tallow. Halal Certified. Chemical-Free.
              The way nature intended skincare to be.
            </p>
            <div className="certifications">
              <span className="badge">🌿 Halal Certified</span>
              <span className="badge">🇦🇺 Made in Australia</span>
              <span className="badge">✓ Chemical-Free</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>📧 info@oztallow.com</li>
              <li>📦 orders@oztallow.com</li>
              <li>🔄 returns@oztallow.com</li>
            </ul>
            <div className="social-links">
              <a href="https://instagram.com/oztallow" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h3>Join Our Community</h3>
          <p>Subscribe for exclusive offers and skincare tips</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 Oz Tallow Skincare. All rights reserved.</p>
          <p className="footer-tagline">From Australian Pastures to Your Skin</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
