import React from 'react';
import './PartnersSection.css';
import { partnersData } from '../../data/partners.js';

export default function PartnersSection() {
  const allPartners = [
    { id: 'google', name: 'Google', isText: true, textClass: 'partners__logo-google', text: 'Google' },
    ...partnersData,
    { id: 'netflix', name: 'Netflix', isText: true, textClass: 'partners__logo-netflix', text: 'NETFLIX' }
  ];

  const renderLogoList = (keyPrefix) => (
    <div className="partners__track" aria-hidden={keyPrefix !== 'primary'}>
      {allPartners.map((item, idx) => (
        <div key={`${keyPrefix}-${item.id || idx}`} className="partners__item">
          {item.isText ? (
            <span className={item.textClass}>{item.text}</span>
          ) : (
            <img
              src={item.logo}
              alt={item.name}
              className="partners__logo"
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="partners-section" aria-label="Trusted Partners">
      <div className="container partners__container">
        <p className="partners__label">Trusted by 100+ Companies across the globe!</p>
        <div className="partners__marquee-wrapper">
          {renderLogoList('primary')}
          {renderLogoList('clone')}
        </div>
      </div>
    </section>
  );
}
