import React from 'react';

export default function QuranVerseSection({ quote }) {
  return (
    <div
      className="quran-verse-section reveal-on-scroll"
      style={{
        position: 'relative',
        background: '#4E5E71',
        clipPath: 'polygon(0 0, 50% 32px, 100% 0, 100% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 0, 50% 32px, 100% 0, 100% 100%, 0 100%)',
        padding: '55px 20px 70px 20px',
        textAlign: 'center',
        color: '#ffffff',
        overflow: 'hidden',
        marginTop: '-15px',
        zIndex: 4
      }}
    >
      {/* --- BOTTOM-LEFT CORNER BOUQUET --- */}
      <div className="flower-reveal-left flower-delay-1" style={{ position: 'absolute', bottom: '-82px', left: '-30px', zIndex: 1, pointerEvents: 'none' }}>
        <div className="goyang">
          <img width="115" src="/assets/ornaments/ddw2.webp" alt="" style={{ display: 'block', transform: 'scaleX(-1) rotate(-15deg)' }} />
        </div>
      </div>
      <div className="flower-reveal-left flower-delay-2" style={{ position: 'absolute', bottom: '-62px', left: '-5px', zIndex: 3, pointerEvents: 'none' }}>
        <div className="goyang2">
          <img width="95" src="/assets/ornaments/satu.webp" alt="" style={{ display: 'block', transform: 'scaleX(-1)' }} />
        </div>
      </div>
      <div className="flower-reveal-left flower-delay-3" style={{ position: 'absolute', bottom: '-55px', left: '55px', zIndex: 2, pointerEvents: 'none' }}>
        <div className="goyang">
          <img width="85" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'scaleX(-1) rotate(-30deg)' }} />
        </div>
      </div>

      {/* --- BOTTOM-RIGHT CORNER BOUQUET --- */}
      <div className="flower-reveal-right flower-delay-1" style={{ position: 'absolute', bottom: '-82px', right: '-30px', zIndex: 1, pointerEvents: 'none' }}>
        <div className="goyang2">
          <img width="115" src="/assets/ornaments/ddw2.webp" alt="" style={{ display: 'block', transform: 'rotate(-15deg)' }} />
        </div>
      </div>
      <div className="flower-reveal-right flower-delay-2" style={{ position: 'absolute', bottom: '-62px', right: '-5px', zIndex: 3, pointerEvents: 'none' }}>
        <div className="goyang">
          <img width="95" src="/assets/ornaments/satu.webp" alt="" style={{ display: 'block' }} />
        </div>
      </div>
      <div className="flower-reveal-right flower-delay-3" style={{ position: 'absolute', bottom: '-55px', right: '55px', zIndex: 2, pointerEvents: 'none' }}>
        <div className="goyang2">
          <img width="85" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'rotate(-30deg)' }} />
        </div>
      </div>

      {/* Center Content */}
      <div style={{ position: 'relative', zIndex: 4, maxWidth: '380px', margin: '0 auto' }}>
        {/* Top White Flower Ornament */}
        <img
          width="40"
          height="40"
          src="/assets/ornaments/daw13123.webp"
          alt=""
          style={{ display: 'block', margin: '0 auto 15px auto', objectFit: 'contain' }}
        />

        {/* Quran Verse Translation */}
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '12.5px',
            lineHeight: '1.7',
            color: '#ffffff',
            fontWeight: 400,
            margin: '0 auto 14px auto',
            padding: '0 10px',
            textAlign: 'center'
          }}
        >
          {quote.verse}
        </p>

        {/* Surah Name */}
        <h3
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#ffffff',
            margin: 0,
            textAlign: 'center'
          }}
        >
          {quote.surah}
        </h3>
      </div>
    </div>
  );
}
