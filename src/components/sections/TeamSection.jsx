import React from 'react';
import './TeamSection.css';
import { teamData } from '../../data/team.js';

export default function TeamSection() {
  return (
    <section className="team-section" id="team" aria-labelledby="team-heading">
      <div className="container team__container">
        {/* Section Header (Centered) */}
        <div className="team__header">
          <span className="team__eyebrow">INTRODUCE YOURSELF TO</span>
          <h2 id="team-heading" className="team__title">
            Our Team of Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="team__grid">
          {teamData.map((member) => (
            <article key={member.id} className="team__card">
              <div className={`team__image-wrapper team__image-wrapper--${member.shape}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__image"
                  loading="lazy"
                />
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <p className="team__role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
