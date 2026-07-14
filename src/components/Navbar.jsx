import { useState } from 'react';
import logo from '../assets/images/logo.jpg.jpeg';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'react', label: 'React.js' },
    { id: 'node', label: 'Node.js' },
    { id: 'mongodb', label: 'MongoDB' },
    { id: 'interview', label: 'Interview Prep' },
  ];

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-header glass">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Sreekanth WebTech Logo" className="navbar-logo" />
          <div className="navbar-title-group">
            <span className="navbar-brand-name">Sreekanth WebTech</span>
            <span className="navbar-brand-sub">Full Stack | Beginner to Pro</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`navbar-link-btn ${currentTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* YouTube CTA */}
        <div className="navbar-actions">
          <a
            href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-youtube-btn"
          >
            <svg
              className="youtube-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>Go to YouTube</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar-burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <div className="bento-grid-icon">
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
            <span className="bento-dot"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="navbar-mobile-overlay glass">
          <nav className="navbar-mobile-links">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`navbar-mobile-link-btn ${currentTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-youtube-btn"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="youtube-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Go to YouTube</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
