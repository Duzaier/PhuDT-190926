import React, { useState } from 'react';
import './SearchForm.css';

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState('sale');
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    rooms: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-card" role="region" aria-label="Property Search">
      {/* Top Tabs: For Sale / For Rent */}
      <div className="search-card__tabs-wrapper">
        <div className="search-card__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'sale'}
            className={`search-card__tab ${activeTab === 'sale' ? 'search-card__tab--active' : ''}`}
            onClick={() => setActiveTab('sale')}
          >
            For Sale
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'rent'}
            className={`search-card__tab ${activeTab === 'rent' ? 'search-card__tab--active' : ''}`}
            onClick={() => setActiveTab('rent')}
          >
            For Rent
          </button>
        </div>
      </div>

      {/* Vertical Form Fields */}
      <form className="search-card__form" method="POST" onSubmit={handleSubmit}>
        <div className="search-card__field">
          <input
            id="search-location"
            name="location"
            type="text"
            className="search-card__input"
            placeholder="New York, San Francisco, etc"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div className="search-card__field">
          <select
            id="search-type"
            name="propertyType"
            className="search-card__select"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          >
            <option value="">Select Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>

        <div className="search-card__field">
          <select
            id="search-rooms"
            name="rooms"
            className="search-card__select"
            value={formData.rooms}
            onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
          >
            <option value="">Select Rooms</option>
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4+">4+ Rooms</option>
          </select>
        </div>

        {/* Advance Search Link */}
        <button
          type="button"
          className="search-card__advance-btn"
          aria-label="Toggle Advanced Search"
        >
          <span className="search-card__advance-icon" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </span>
          <span>Advance Search</span>
        </button>

        {/* Submit Button */}
        <button type="submit" className="search-card__submit-btn">
          <span className="search-card__btn-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
