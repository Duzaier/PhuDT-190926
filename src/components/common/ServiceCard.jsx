import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  const { id, type, title, description } = service;

  const renderIcon = () => {
    switch (type) {
      case 'search':
        return (
          <svg
            className="service-card__icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.2" y2="16.2" />
          </svg>
        );
      case 'house':
        return (
          <svg
            className="service-card__icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20V10.5z" />
            <polyline points="9 21 9 12 15 12 15 21" />
          </svg>
        );
      case 'bed':
        return (
          <svg
            className="service-card__icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 4v16" />
            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path d="M2 17h20" />
            <path d="M6 8v9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <article className="service-card" aria-labelledby={`service-title-${id}`}>
      {/* Royal blue glowing circular icon */}
      <div className="service-card__icon-circle" aria-hidden="true">
        {renderIcon()}
      </div>

      <h3 id={`service-title-${id}`} className="service-card__title">
        {title}
      </h3>

      <p className="service-card__description">
        {description}
      </p>
    </article>
  );
}
