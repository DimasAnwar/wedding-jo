import React, { useState } from 'react';

export default function GallerySection({ galleryImages = [], onImageClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 6 initial curated photos (4 balanced rows) or all photos
  const displayedImages = isExpanded ? galleryImages : galleryImages.slice(0, 6);

  // Helper to determine editorial masonry grid styling
  const getItemStyle = (idx) => {
    // Rhythm: 0: Hero (span 2), 1&2: Pair (span 1), 3: Wide (span 2), 4&5: Pair (span 1)
    const patternIdx = idx % 6;

    if (patternIdx === 0) {
      return {
        gridColumn: 'span 2',
        height: '320px',
        borderRadius: '16px',
        isHero: true
      };
    }
    if (patternIdx === 3) {
      return {
        gridColumn: 'span 2',
        height: '220px',
        borderRadius: '14px',
        isWide: true
      };
    }
    return {
      gridColumn: 'span 1',
      height: '230px',
      borderRadius: '14px'
    };
  };

  const getObjectPosition = (img) => {
    if (img.includes('3.jpeg')) return 'center 5%';
    if (img.includes('1.jpeg')) return 'center center';
    return 'center 15%';
  };

  return (
    <div
      className="elementor-element elementor-element-5fb3e4ac e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="galeri"
      style={{ padding: '40px 18px 50px 18px', position: 'relative' }}
    >
      <div className="e-con-inner" style={{ maxWidth: '420px', margin: '0 auto' }}>
        {/* Section Header & Subtitle */}
        <div className="elementor-element elementor-element-50c79b64 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-right ring-edit-yes elementor-widget elementor-widget-divider">
          <div className="elementor-widget-container">
            <div className="elementor-divider">
              <span className="elementor-divider-separator">
                <span className="elementor-divider__text elementor-divider__element"> Gallery </span>
              </span>
            </div>
          </div>
        </div>

        {/* Title and Romantic Subtitle */}
        <div style={{ textAlign: 'center', margin: '4px 0 16px 0' }}>
          <div
            style={{
              fontFamily: "'amalfi', cursive",
              fontSize: '20px',
              color: '#7C8D9E',
              margin: '0 0 10px 0'
            }}
          >
            Sweet Memories of Us
          </div>
          <div style={{ maxWidth: '180px', margin: '0 auto 8px auto' }}>
            <img
              src="/assets/ornaments/Untitled-1.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              color: '#666666',
              lineHeight: '1.6',
              margin: '0 auto',
              maxWidth: '300px'
            }}
          >
            Menyimpan setiap detik kebahagiaan dalam bingkai kenangan perjalanan cinta kami.
          </p>
        </div>

        {/* Editorial Masonry Photo Grid */}
        <div
          className="elementor-gallery__container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            padding: '10px 0'
          }}
        >
          {displayedImages.map((img, idx) => {
            const itemStyle = getItemStyle(idx);

            return (
              <div
                key={idx}
                className="e-gallery-item elementor-gallery-item"
                style={{
                  gridColumn: itemStyle.gridColumn,
                  height: itemStyle.height,
                  borderRadius: itemStyle.borderRadius,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.09)',
                  border: '2.5px solid #ffffff',
                  backgroundColor: '#E8E8E6',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease'
                }}
                onClick={() => onImageClick(img, idx)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.025)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.18)';
                  const overlay = e.currentTarget.querySelector('.gallery-hover-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.09)';
                  const overlay = e.currentTarget.querySelector('.gallery-hover-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                {/* Photo */}
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: getObjectPosition(img, idx),
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Elegant Hover Overlay with Magnifying Glass Icon */}
                <div
                  className="gallery-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.1) 0%, rgba(30, 41, 59, 0.6) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '15px'
                    }}
                  >
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>

                {/* Subtle bottom badge for featured hero card */}
                {itemStyle.isHero && idx === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: '#3B4450',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    ✦ Our Love Story
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Button */}
        {galleryImages.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '18px' }}>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12.5px',
                fontWeight: 500,
                color: '#4E5E71',
                backgroundColor: '#ffffff',
                border: '1px solid #7C8D9E',
                borderRadius: '30px',
                padding: '9px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4E5E71';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#4E5E71';
              }}
            >
              <i className={`fas fa-${isExpanded ? 'chevron-up' : 'th'}`} style={{ fontSize: '12px' }}></i>
              <span>{isExpanded ? 'Tampilkan Lebih Sedikit' : `Lihat Semua Foto (${galleryImages.length})`}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
