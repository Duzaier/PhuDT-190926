import React from 'react';
import './NeighborhoodsSection.css';
import { neighborhoodsData } from '../../data/neighborhoods.js';

export default function NeighborhoodsSection() {
  const row1Items = neighborhoodsData.filter((item) => item.row === 1);
  const row2Items = neighborhoodsData.filter((item) => item.row === 2);

  return (
    <section className="neighborhoods-section" id="neighborhoods" aria-labelledby="neighborhoods-heading">
      {/* Decorative ambient gradient spheres */}
      <div className="neighborhoods__sphere neighborhoods__sphere--top" aria-hidden="true" />
      <div className="neighborhoods__sphere neighborhoods__sphere--bottom" aria-hidden="true" />

      <div className="container neighborhoods__container">
        {/* Header (Left-aligned) */}
        <div className="neighborhoods__header">
          <span className="neighborhoods__eyebrow">AREAS ACROSS THE TOWN</span>
          <h2 id="neighborhoods-heading" className="neighborhoods__title">
            Neighborhood Properties
          </h2>
        </div>

        {/* Asymmetrical 2-Row Grid */}
        <div className="neighborhoods__grid">
          {/* Row 1: 3 cards */}
          <div className="neighborhoods__row neighborhoods__row--top">
            {row1Items.map((item) => (
              <article
                key={item.id}
                className={`neighborhoods__card neighborhoods__card--${item.colSpan}`}
                aria-label={`${item.count} properties in ${item.location}`}
              >
                <img
                  src={item.image}
                  alt={`Properties in ${item.location}`}
                  className="neighborhoods__image"
                  loading="lazy"
                />
                <div className="neighborhoods__overlay" />
                <div className="neighborhoods__info">
                  <span className="neighborhoods__count">{item.count}</span>
                  <span className="neighborhoods__location">{item.location}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div className="neighborhoods__row neighborhoods__row--bottom">
            {row2Items.map((item) => (
              <article
                key={item.id}
                className={`neighborhoods__card neighborhoods__card--${item.colSpan}`}
                aria-label={`${item.count} properties in ${item.location}`}
              >
                <img
                  src={item.image}
                  alt={`Properties in ${item.location}`}
                  className="neighborhoods__image"
                  loading="lazy"
                />
                <div className="neighborhoods__overlay" />
                <div className="neighborhoods__info">
                  <span className="neighborhoods__count">{item.count}</span>
                  <span className="neighborhoods__location">{item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
