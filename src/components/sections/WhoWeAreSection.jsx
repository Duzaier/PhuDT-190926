import React from 'react';
import './WhoWeAreSection.css';

// Import images and icons matching Figma design exactly
import tallHouseImg from '../../assets/images/66d6e8883c1780f6158b1d62f2036152ec7a594f.jpg';
import bedroomImg from '../../assets/images/ac6bf43e8363fc4f62fd9a46cc28eb202059adff.jpg';
import livingRoomImg from '../../assets/images/1498b2468d9d904d15616c6b35ab1d67adea9e75.jpg';

import smartHomeIcon from '../../assets/icons/Group 2.png';
import userProfileIcon from '../../assets/icons/Group (1).png';

export default function WhoWeAreSection() {
  return (
    <section className="who-we-are-section" id="about" aria-labelledby="who-we-are-heading">
      {/* Ambient gradient glows */}
      <div className="who-we-are__glow who-we-are__glow--top-left" aria-hidden="true" />
      <div className="who-we-are__glow who-we-are__glow--bottom-right" aria-hidden="true" />

      <div className="container who-we-are__container">
        {/* Left Column: Content & Feature Cards */}
        <div className="who-we-are__content">
          <span className="who-we-are__badge-tag">WHO ARE WE</span>
          
          <h2 id="who-we-are-heading" className="who-we-are__title">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          
          <p className="who-we-are__description">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
          </p>

          <div className="who-we-are__features">
            {/* Feature Card 1: Smart Home / Wireless Property */}
            <div className="who-we-are__card">
              <div className="who-we-are__card-icon-wrapper" aria-hidden="true">
                <img
                  src={smartHomeIcon}
                  alt=""
                  className="who-we-are__card-icon-img"
                />
              </div>
              <div className="who-we-are__card-text">
                <h3 className="who-we-are__card-title">Donec porttitor euismod</h3>
                <p className="who-we-are__card-desc">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
              </div>
            </div>

            {/* Feature Card 2: Personal Profile / Trusted Agent */}
            <div className="who-we-are__card">
              <div className="who-we-are__card-icon-wrapper" aria-hidden="true">
                <img
                  src={userProfileIcon}
                  alt=""
                  className="who-we-are__card-icon-img"
                />
              </div>
              <div className="who-we-are__card-text">
                <h3 className="who-we-are__card-title">Donec porttitor euismod</h3>
                <p className="who-we-are__card-desc">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase with Rotating Text Badge */}
        <div className="who-we-are__gallery">
          {/* Tall Left Villa / Pool Image */}
          <div className="who-we-are__image-wrapper who-we-are__image-wrapper--tall">
            <img
              src={tallHouseImg}
              alt="Modern luxury house with outdoor swimming pool"
              className="who-we-are__image who-we-are__image--tall"
              loading="lazy"
            />
          </div>

          {/* Right Stacked Images */}
          <div className="who-we-are__stacked-images">
            {/* Top Bedroom Image */}
            <div className="who-we-are__image-wrapper who-we-are__image-wrapper--bedroom">
              <img
                src={bedroomImg}
                alt="Cozy styled modern bedroom with aesthetic plant decor"
                className="who-we-are__image who-we-are__image--bedroom"
                loading="lazy"
              />
            </div>

            {/* Bottom Living Room Image */}
            <div className="who-we-are__image-wrapper who-we-are__image-wrapper--living">
              <img
                src={livingRoomImg}
                alt="Spacious contemporary living room with leather couch and decor"
                className="who-we-are__image who-we-are__image--living"
                loading="lazy"
              />
            </div>
          </div>

          {/* Rotating Circular Text Component */}
          <div className="who-we-are__rotating-badge" aria-label="Real Estate Since 2024 badge">
            <svg
              className="who-we-are__rotating-svg"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="whoWeAreCirclePath"
                  d="M 100, 100 m -68, 0 a 68,68 0 1, 1 136, 0 a 68,68 0 1, 1 -136, 0"
                />
              </defs>
              <text className="who-we-are__rotating-text">
                <textPath
                  href="#whoWeAreCirclePath"
                  startOffset="0%"
                  textLength="427"
                  lengthAdjust="spacing"
                >
                  Real Estate Since 2024 - Real Estate Since 2024 - 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
