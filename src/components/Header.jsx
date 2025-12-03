import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>🌿 El secreto mejor guardado de la historia para una piel radiante. Envío gratis en pedidos +$100 AUD</p>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <h1>OZ TALLOW</h1>
              <span>Return to the Essentials</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>

            <div className="header-actions">
              <button className="btn btn-primary">Shop Now</button>
              <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
