import React, { useState } from 'react';
import './TestimonialsSection.css';
import { testimonialsData } from '../../data/testimonials.js';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container testimonials__container">
        {/* Left Column: Heading & Controls */}
        <div className="testimonials__left">
          <span className="testimonials__eyebrow">TESTIMONIALS</span>
          <h2 id="testimonials-heading" className="testimonials__title">
            Look What Our<br />Customers Say!
          </h2>
          <p className="testimonials__description">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
          </p>

          <div className="testimonials__nav">
            <button
              type="button"
              className="testimonials__nav-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              type="button"
              className="testimonials__nav-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Floating Sphere, Card & Pagination */}
        <div className="testimonials__right">
          {/* Decorative ambient 3D sphere */}
          <div className="testimonials__sphere" aria-hidden="true" />

          <div className="testimonials__card">
            {/* Golden Quote Mark */}
            <div className="testimonials__quote-icon" aria-hidden="true">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M6.5 28L15 2L10 2L1.5 28H6.5Z" fill="#FDE047" />
                <path d="M20.5 28L29 2L24 2L15.5 28H20.5Z" fill="#FDE047" />
              </svg>
            </div>

            <p className="testimonials__quote">{currentTestimonial.quote}</p>

            <div className="testimonials__divider" />

            <div className="testimonials__author-row">
              <div className="testimonials__author-info">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="testimonials__avatar"
                />
                <span className="testimonials__author-name">{currentTestimonial.name}</span>
              </div>

              <div className="testimonials__rating" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="testimonials__star-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                    stroke="#FFB800"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Pagination Bars */}
          <div className="testimonials__pagination">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`testimonials__pagination-bar ${idx === currentIndex ? 'testimonials__pagination-bar--active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
