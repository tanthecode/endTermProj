// components/Footer.jsx
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Evergreen University</h3>
          <p>Cultivating minds, shaping futures, and inspiring excellence in education since 1967.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <address>
            123 University Avenue<br />
            Evergreen, CA 90210<br />
            Phone: (555) 123-4567<br />
            Email: info@evergreenuniversity.edu
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Evergreen University. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;