import React, { useState, useRef } from 'react';
import './FeaturedListingsSection.css';
import PropertyCard from '../common/PropertyCard.jsx';
import { propertiesData } from '../../data/properties.js';

export default function FeaturedListingsSection() {
  const [activeFilter, setActiveFilter] = useState('Sell');
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filterOptions = [
    { label: 'All', value: 'All' },
    { label: 'Sell', value: 'Sell' },
    { label: 'Rent', value: 'Rent' },
  ];

  const filteredProperties = activeFilter === 'All'
    ? propertiesData
    : propertiesData.filter((item) => item.category === activeFilter);

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="featured-listings-section" id="listings" aria-labelledby="featured-heading">
      <div className="container featured-listings__container">
        {/* Section Top Header & Filters */}
        <div className="featured-listings__header">
          <div className="featured-listings__title-group">
            <span className="featured-listings__eyebrow">CHECKOUT OUR NEW</span>
            <h2 id="featured-heading" className="featured-listings__title">
              Latest Listed Properties
            </h2>
            <p className="featured-listings__description">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="featured-listings__filters" role="tablist" aria-label="Property type filters">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === option.value}
                className={`featured-listings__filter-btn ${
                  activeFilter === option.value ? 'featured-listings__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Horizontal Carousel Track — Bleeds to right edge with hidden scrollbar */}
      <div
        className={`featured-listings__track-wrapper ${isDragging ? 'featured-listings__track-wrapper--dragging' : ''}`}
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="featured-listings__track">
          {filteredProperties.map((property) => (
            <div key={property.id} className="featured-listings__card-item">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
