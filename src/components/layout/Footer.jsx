/**
 * Site footer - brand, links, newsletter placeholder.
 * Links are placeholders (#). Form submit is prevented.
 */

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand & Value Proposition */}
        <div className="footer-section brand-section">
          <div className="brand-header">
            <Link to="/" className="logo logo-link">
              <img src="/taskmanager-pro-logo.png" alt="TaskManager Pro Logo" className="logo-image" />
            </Link>
          </div>
          <p className="footer-desc">
            Boost your team's productivity with the world's most intuitive Kanban solution. 
            Plan, track, and deliver — all in one place.
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} TaskManagerPro. All rights reserved.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-section links-section">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Board</Link></li>
            <li><Link to="/analysis">Analytics</Link></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Report a Bug</a></li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="footer-section contact-section">
          <h4>Connect</h4>
          <p>Have questions or suggestions?</p>
          <a href="mailto:contact@taskmanagerpro.com" className="email-link">
            contact@taskmanagerpro.com
          </a>
          
          <div className="footer-socials">
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">Gi</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;