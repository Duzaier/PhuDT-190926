import React from 'react';
import './Footer.css';
import logoIcon from '../../assets/icons/rezilla-logo.svg';
import phoneIcon from '../../assets/icons/icon-phone.svg';
import mailIcon from '../../assets/icons/icon-mail.svg';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Column 1: Brand Info & Contact */}
            <div className="footer__col footer__col--brand">
              <a href="/" className="footer__logo" aria-label="Rezilla Home">
                <img src={logoIcon} alt="Rezilla Logo" className="footer__logo-img" />
              </a>
              <p className="footer__address">
                123 XVNT, HCM City
              </p>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <img src={phoneIcon} alt="" aria-hidden="true" className="footer__contact-icon" />
                  <a href="tel:+1234567890" className="footer__contact-link">
                    +1 234-567-890
                  </a>
                </li>
                <li className="footer__contact-item">
                  <img src={mailIcon} alt="" aria-hidden="true" className="footer__contact-icon" />
                  <a href="mailto:support@rezilla.com" className="footer__contact-link">
                    support@rezilla.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer__col footer__col--nav">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__nav-list">
                <li><a href="/" className="footer__nav-link">Home</a></li>
                <li><a href="#about" className="footer__nav-link">About</a></li>
                <li><a href="#listings" className="footer__nav-link">Listings</a></li>
                <li><a href="#services" className="footer__nav-link">Services</a></li>
                <li><a href="#blogs" className="footer__nav-link">Blogs</a></li>
                <li><a href="#become-agent" className="footer__nav-link">Become a Agent</a></li>
              </ul>
            </div>

            {/* Column 3: Discovery */}
            <div className="footer__col footer__col--nav">
              <h3 className="footer__heading">Discovery</h3>
              <ul className="footer__nav-list">
                <li><a href="#discovery-canada" className="footer__nav-link">Canada</a></li>
                <li><a href="#discovery-usa" className="footer__nav-link">United States</a></li>
                <li><a href="#discovery-germany" className="footer__nav-link">Germany</a></li>
                <li><a href="#discovery-africa" className="footer__nav-link">Africa</a></li>
                <li><a href="#discovery-india" className="footer__nav-link">India</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className="footer__col footer__col--subscribe">
              <h3 className="footer__heading footer__heading--subscribe">
                Subscribe to our<br />Newsletter!
              </h3>
              
              <form className="footer__newsletter-form" method="POST" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              <div className="footer__social-section">
                <h4 className="footer__social-title">Follow Us on</h4>
                <div className="footer__social-links">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3A0CA3">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3A0CA3">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A0CA3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            &copy; Rezilla – All rights reserved. Rebuild by UTA Team
          </p>
          <div className="footer__legal-links">
            <a href="/terms" className="footer__legal-link">Terms and Conditions</a>
            <a href="/privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="/disclaimer" className="footer__legal-link">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
