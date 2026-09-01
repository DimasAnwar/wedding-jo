import React, { useEffect } from 'react';

export default function Lightbox({ imageSrc, images = [], currentIndex = 0, onClose, onNavigate }) {
  if (!imageSrc) return null;

  const total = images.length || 1;
  const activeIdx = images.length > 0 ? (currentIndex >= 0 ? currentIndex : images.indexOf(imageSrc)) : 0;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (onNavigate && images.length > 1) {
      const prevIdx = (activeIdx - 1 + images.length) % images.length;
      onNavigate(images[prevIdx], prevIdx);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (onNavigate && images.length > 1) {
      const nextIdx = (activeIdx + 1) % images.length;
      onNavigate(images[nextIdx], nextIdx);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, images]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        userSelect: 'none'
      }}
    >
      {/* Top Header / Counter */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          color: '#ffffff',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '1px',
          opacity: 0.85
        }}
      >
        {total > 1 ? `${activeIdx + 1} / ${total}` : 'Foto Galeri'}
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#ffffff',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 10
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
      >
        ✕
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={imageSrc}
          alt="Enlarged"
          style={{
            maxWidth: '90vw',
            maxHeight: '78vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            animation: 'fadeInLightbox 0.3s ease'
          }}
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
