import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand & Value Proposition */}
        <div className="footer-brand">
          <h2 className="brand-logo">TaskPro</h2>
          <p className="brand-desc">
            Boost your team's productivity with the world's most intuitive Kanban solution. 
            Plan, track, and deliver — all in one place.
          </p>
          <div className="app-badges">
            {/* Fake Download Buttons */}
            <button className="btn-store"> App Store</button>
            <button className="btn-store">▶ Google Play</button>
          </div>
        </div>

        {/* Column 2: Product */}
        <div className="footer-links-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Roadmap</a></li>
          </ul>
        </div>

        {/* Column 3: Company & Legal */}
        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Careers</a> <span className="hiring-badge">Hiring</span></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest updates and productivity tips.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            {/* Social Placeholders */}
            <span>𝕏</span>
            <span>in</span>
            <span>IG</span>
            <span>Gt</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; 2026 TaskPro Inc. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Security</a>
            <a href="#">Sitemap</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;