import React from 'react';
import './ServicesSection.css';
import ServiceCard from '../common/ServiceCard.jsx';
import { servicesData } from '../../data/services.js';

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container services__container">
        {/* Centered Heading */}
        <div className="services__header">
          <span className="services__eyebrow">OUR SERVICES</span>
          <h2 id="services-heading" className="services__title">
            Donec porttitor euismod dignissim
          </h2>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="services__grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
