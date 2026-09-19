import React from 'react';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
  const { id, title, price, address, beds, baths, badge, image } = property;

  const renderBadgeIcon = (icon) => {
    switch (icon) {
      case 'fire':
        return (
          <svg className="property-card__badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.53 2.05-6.71 4.29-9.15.53-.58 1.48-.3 1.63.46.36 1.83 1.34 3.43 2.58 4.67 1.08-1.57 2.07-3.6 2.07-5.98 0-.48.4-.87.88-.87.24 0 .46.1.62.26C17.3 5.4 21 10.3 21 14c0 4.97-4.03 9-9 9z" />
          </svg>
        );
      case 'home':
        return (
          <svg className="property-card__badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        );
      case 'dollar':
        return (
          <span className="property-card__badge-symbol" aria-hidden="true">$</span>
        );
      default:
        return null;
    }
  };

  return (
    <article className="property-card" aria-labelledby={`property-title-${id}`}>
      {/* Thumbnail with overlay pill badge */}
      <div className="property-card__image-container">
        <img
          src={image}
          alt={`Exterior photo of ${title}`}
          className="property-card__image"
          loading="lazy"
        />
        {badge && (
          <div className={`property-card__badge property-card__badge--${badge.type}`}>
            {renderBadgeIcon(badge.icon)}
            <span className="property-card__badge-text">{badge.text}</span>
          </div>
        )}
      </div>

      {/* Details body */}
      <div className="property-card__body">
        <span className="property-card__price">{price}</span>
        <h3 id={`property-title-${id}`} className="property-card__title">
          {title}
        </h3>
        <p className="property-card__address">{address}</p>

        {/* Specs Row */}
        <div className="property-card__specs">
          <div className="property-card__spec-item">
            <svg
              className="property-card__spec-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            <span>{beds} Beds</span>
          </div>

          <div className="property-card__spec-item">
            <svg
              className="property-card__spec-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z" />
            </svg>
            <span>{baths} Bath</span>
          </div>
        </div>
      </div>
    </article>
  );
}
