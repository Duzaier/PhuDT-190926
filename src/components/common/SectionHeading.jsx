import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {subtitle && <span className="section-heading__subtitle">{subtitle}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
