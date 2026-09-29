import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, X, Eye, ZoomIn, Image as ImageIcon } from 'lucide-react';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Home Cleaning', 'Commercial Cleaning', 'College Cleaning', 'Kitchen Cleaning', 'Bathroom Cleaning'];

  const filteredGallery = siteConfig.gallery.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="our-work" className="section-padding" style={{ background: 'var(--color-bg-body)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="section-title">
            OUR <span className="text-gradient">WORK</span>
          </h2>
          <p className="section-subtitle">
            A visual glimpse into our on-site cleaning execution across homes, office workspaces, and college institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid var(--color-royal-600)' : '1px solid var(--color-border-light)',
                  background: isActive ? 'var(--color-navy-800)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--color-navy-800)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
              onClick={() => setLightboxImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 500ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                loading="lazy"
              />

              {/* Gradient Overlay & Captions */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 23, 44, 0.88) 0%, rgba(7, 23, 44, 0.2) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                color: '#FFFFFF'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-cyan-400)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '4px'
                }}>
                  {item.category}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', marginTop: '4px' }}>
                  {item.description}
                </div>
              </div>

              {/* Zoom pill top right */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-navy-800)'
              }}>
                <ZoomIn size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="modal-overlay" onClick={() => setLightboxImage(null)}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '880px', padding: 0, overflow: 'hidden', background: '#0B2545' }}
            >
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
              />

              <div style={{ padding: '24px', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-cyan-400)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {lightboxImage.category}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                  {lightboxImage.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#CBD5E1', marginTop: '6px' }}>
                  {lightboxImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
