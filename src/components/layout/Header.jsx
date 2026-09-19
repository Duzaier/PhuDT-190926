import React, { useState, useEffect } from 'react';
import './Header.css';
import logoIcon from '../../assets/icons/rezilla-logo.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';
import loginIcon from '../../assets/icons/icon-login.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile navigation drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__container">
        {/* Left: Desktop Primary Navigation */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            <li>
              <a href="/" className="header__nav-link header__nav-link--active">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="header__nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/listings" className="header__nav-link">
                Listings
              </a>
            </li>
            <li>
              <a href="/services" className="header__nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="/blogs" className="header__nav-link">
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        {/* Center: Brand Logo */}
        <a href="/" className="header__logo" aria-label="Rezilla Home">
          <img src={logoIcon} alt="Rezilla Logo" className="header__logo-img" />
        </a>

        {/* Right: Actions (Login & Add Listing) */}
        <div className="header__actions">
          <a href="/login" className="header__login-link">
            <span className="header__user-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <span>Login/Register</span>
          </a>
          <button type="button" className="header__cta-btn">
            <span className="header__cta-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <span>Add Listing</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="header__menu-btn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <img src={menuIcon} alt="" aria-hidden="true" className="header__menu-icon" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="header__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`header__mobile-drawer ${isMenuOpen ? 'header__mobile-drawer--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="header__mobile-header">
          <a href="/" className="header__logo" onClick={closeMenu} aria-label="Rezilla Home">
            <img src={logoIcon} alt="Rezilla Logo" className="header__logo-img" />
          </a>
          <button
            type="button"
            className="header__close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <nav className="header__mobile-nav" aria-label="Mobile Navigation">
          <ul className="header__mobile-nav-list">
            <li>
              <a href="/" onClick={closeMenu} className="header__mobile-nav-link header__mobile-nav-link--active">
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={closeMenu} className="header__mobile-nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/listings" onClick={closeMenu} className="header__mobile-nav-link">
                Listings
              </a>
            </li>
            <li>
              <a href="/services" onClick={closeMenu} className="header__mobile-nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="/blogs" onClick={closeMenu} className="header__mobile-nav-link">
                Blogs
              </a>
            </li>
          </ul>

          <div className="header__mobile-actions">
            <a href="/login" onClick={closeMenu} className="header__mobile-login-link">
              <span className="header__user-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span>Login/Register</span>
            </a>
            <button type="button" className="header__cta-btn header__cta-btn--full">
              <span className="header__cta-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              <span>Add Listing</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
