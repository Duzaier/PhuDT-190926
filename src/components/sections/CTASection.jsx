import React from 'react';
import './CTASection.css';
import agentImg from '../../assets/images/cta_agent.png';

export default function CTASection() {
  return (
    <section className="cta-section" id="become-agent" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta__banner">
          {/* Ambient decorative spheres */}
          <div className="cta__glow cta__glow--left" aria-hidden="true" />
          <div className="cta__glow cta__glow--right" aria-hidden="true" />

          {/* Left: Overlapping Agent Cutout */}
          <div className="cta__image-wrapper">
            <img
              src={agentImg}
              alt="Become a Rezilla Real Estate Agent"
              className="cta__image"
              loading="lazy"
            />
          </div>

          {/* Middle: Content */}
          <div className="cta__content">
            <h2 id="cta-heading" className="cta__title">
              Become a Agent.
            </h2>
            <p className="cta__description">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.
            </p>
          </div>

          {/* Right: Register Now Action Button */}
          <div className="cta__action">
            <a href="#register" className="cta__btn">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
