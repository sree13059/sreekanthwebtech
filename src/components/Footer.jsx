import logo from '../assets/images/logo.jpg.jpeg';

export default function Footer({ setCurrentTab }) {
  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section glass">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo-title" onClick={() => handleNavClick('home')}>
            <img src={logo} alt="Sreekanth WebTech Logo" className="footer-logo" />
            <span className="footer-brand-name">Sreekanth WebTech</span>
          </div>
          <p className="footer-description">
            Empowering students, freshers, and experienced professionals to master Full Stack Web Development with clear concepts, structured roadmaps, and hands-on practice.
          </p>
          <div className="footer-socials">
            <a
              href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/14mDeiJp6e3/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sreekanth_webtech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
          
          <div className="footer-contact-details">
            <a href="mailto:sree13049@gmail.com" className="footer-contact-item" title="Send Email">
              <span className="footer-contact-icon">✉️</span>
              <span className="footer-contact-value">sree13049@gmail.com</span>
            </a>
            <a href="tel:+916281762361" className="footer-contact-item" title="Call Me">
              <span className="footer-contact-icon">📞</span>
              <span className="footer-contact-value">+91 6281762361</span>
            </a>
            <a
              href="https://sreekanthportfolio7373.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item portfolio-link"
              title="Visit Portfolio"
            >
              <span className="footer-contact-icon">🌐</span>
              <span className="footer-contact-value">Visit Portfolio Website</span>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-link-group">
            <h3>Learn Frontend</h3>
            <ul>
              <li><button onClick={() => handleNavClick('html')}>HTML5</button></li>
              <li><button onClick={() => handleNavClick('css')}>CSS3</button></li>
              <li><button onClick={() => handleNavClick('javascript')}>JavaScript (ES6+)</button></li>
              <li><button onClick={() => handleNavClick('react')}>React.js</button></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h3>Learn Backend & DB</h3>
            <ul>
              <li><button onClick={() => handleNavClick('node')}>Node.js</button></li>
              <li><button onClick={() => handleNavClick('mongodb')}>MongoDB</button></li>
              <li><button onClick={() => handleNavClick('roadmap')}>Interactive Roadmap</button></li>
              <li><button onClick={() => handleNavClick('interview')}>Interview Prep</button></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h3>Stay Updated</h3>
            <p className="subscribe-text">Subscribe to get notifications when new tutorials and roadmap checklists are uploaded.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" required />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2026 Sreekanth WebTech. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9" target="_blank" rel="noopener noreferrer">Channel Info</a>
            <span>•</span>
            <button onClick={() => handleNavClick('roadmap')}>Roadmaps</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
