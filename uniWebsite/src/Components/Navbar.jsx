// components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Evergreen University
        </Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/courses" onClick={closeMenu}>Courses</Link>
            </li>
            <li>
              <Link to="/admissions" onClick={closeMenu}>Admissions</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
