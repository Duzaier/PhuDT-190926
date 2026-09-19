import React, { useState } from 'react';
import './HeroSection.css';
import SearchForm from '../common/SearchForm.jsx';
import bedroomImg from '../../assets/images/luxury-classic-modern-bedroom-suite-hotel 1.png';
import houseProofImg from '../../assets/images/bc3625fec29a6fdfc56f1281691b64cd6d326273.jpg';
import avatar1 from '../../assets/images/263b00c873c9d90580bb79622bfa4c078cce65e1.jpg';
import avatar2 from '../../assets/images/440632d91b25ee1372c134a5a04c9f4e466a960d.jpg';
import avatar3 from '../../assets/images/fe0784a440086bea725a6e74d534e7d86d48d755 (1).jpg';
import avatar4 from '../../assets/images/ffa9d168555841b292ec352442cdcc50c8c80584.jpg';
import avatar5 from '../../assets/images/ac6bf43e8363fc4f62fd9a46cc28eb202059adff.jpg';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      {/* Decorative Organic Curved Background */}
      <div className="hero__curved-bg" aria-hidden="true" />
      
      {/* Decorative Ambient Gradient Spheres (Figma Ellipse 9 & Ellipse 12) */}
      <div className="hero__sphere hero__sphere--top-right" aria-hidden="true" />
      <div className="hero__sphere hero__sphere--bottom-left" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__main-grid">
          {/* Left Column: Heading, Description, Bedroom Image Slider */}
          <div className="hero__left-column">
            <span className="hero__eyebrow">REAL ESTATE</span>
            <h1 id="hero-heading" className="hero__title">
              Find a perfect<br />home you love..!
            </h1>
            <p className="hero__description">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>

            {/* Bedroom Image Slider */}
            <div className="hero__slider-container">
              <div className="hero__image-frame">
                <img
                  src={bedroomImg}
                  alt="Luxury modern master bedroom suite interior"
                  className="hero__slider-image"
                  loading="eager"
                />

                {/* Left & Right Circular Arrow Buttons */}
                <button
                  type="button"
                  className="hero__nav-arrow hero__nav-arrow--prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="hero__nav-arrow hero__nav-arrow--next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* 4 Line Bar Indicators */}
              <div className="hero__bars" role="tablist" aria-label="Slide indicators">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`hero__bar ${activeSlide === idx ? 'hero__bar--active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    aria-selected={activeSlide === idx}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Search Card */}
          <div className="hero__right-column">
            <SearchForm />
          </div>
        </div>

        {/* Floating Proof Cards Row (Overlapping bottom curve) */}
        <div className="hero__proof-row">
          {/* Left Proof Card: 72k+ Happy Customers */}
          <div className="hero__proof-pill hero__proof-pill--customers">
            <div className="hero__avatar-stack">
              <img src={avatar1} alt="" aria-hidden="true" className="hero__avatar" />
              <img src={avatar2} alt="" aria-hidden="true" className="hero__avatar" />
              <img src={avatar3} alt="" aria-hidden="true" className="hero__avatar" />
              <img src={avatar4} alt="" aria-hidden="true" className="hero__avatar" />
              <img src={avatar5} alt="" aria-hidden="true" className="hero__avatar" />
              <span className="hero__avatar-plus" aria-hidden="true">+</span>
            </div>
            <div className="hero__proof-text">
              <span className="hero__proof-title">72k+ Happy</span>
              <span className="hero__proof-subtitle">Customers</span>
            </div>
          </div>

          {/* Right Proof Card: 200+ New Listings Everyday! */}
          <div className="hero__proof-pill hero__proof-pill--listings">
            <div className="hero__proof-thumb-wrapper">
              <img src={houseProofImg} alt="" aria-hidden="true" className="hero__proof-thumb" />
            </div>
            <div className="hero__proof-text">
              <span className="hero__proof-title">200+ New</span>
              <span className="hero__proof-subtitle">Listings Everyday!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
