import React from 'react';
import './TestimonialCard.css';
import starIcon from '../../assets/icons/icon-star.svg';

export default function TestimonialCard({ testimonial }) {
  const { name, role, rating, avatar, quote } = testimonial;

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__rating" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, i) => (
          <img
            key={i}
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="testimonial-card__star"
          />
        ))}
      </div>

      <blockquote className="testimonial-card__quote">
        <p>"{quote}"</p>
      </blockquote>

      <div className="testimonial-card__author">
        {avatar && (
          <img
            src={avatar}
            alt={`Portrait of ${name}`}
            className="testimonial-card__avatar"
            loading="lazy"
          />
        )}
        <div className="testimonial-card__author-info">
          <cite className="testimonial-card__name">{name}</cite>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </article>
  );
}
