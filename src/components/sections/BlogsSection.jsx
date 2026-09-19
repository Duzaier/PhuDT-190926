import React, { useState } from 'react';
import './BlogsSection.css';
import { blogsData } from '../../data/blogs.js';

export default function BlogsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="blogs-section" id="blogs" aria-labelledby="blogs-heading">
      <div className="container blogs__container">
        {/* Section Header (Centered) */}
        <div className="blogs__header">
          <span className="blogs__eyebrow">WHAT'S TRENDING</span>
          <h2 id="blogs-heading" className="blogs__title">
            Latest Blogs & Posts
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="blogs__grid">
          {blogsData.map((blog, index) => (
            <article key={blog.id} className="blogs__card">
              <div className="blogs__image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blogs__image"
                  loading="lazy"
                />
              </div>

              <div className="blogs__content">
                <h3 className="blogs__card-title">
                  <a href={blog.href} className="blogs__title-link">
                    {blog.title}
                  </a>
                </h3>
                <p className="blogs__card-excerpt">{blog.excerpt}</p>
                <div className="blogs__action-row">
                  <a
                    href={blog.href}
                    className="blogs__arrow-btn"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Slider Pagination Bars */}
        <div className="blogs__pagination" aria-hidden="true">
          {blogsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`blogs__pagination-bar ${idx === activeIndex ? 'blogs__pagination-bar--active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide indicator ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
