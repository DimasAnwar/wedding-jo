import React from 'react';
import FloatingAudioButton from '../common/FloatingAudioButton';

export default function HeroSection({
  isOpen,
  isClosing,
  heroImage,
  coverData,
  eventDate,
  timeLeft,
  isPlaying,
  onToggleAudio
}) {
  return (
    <div className={`hero-section ${isOpen || isClosing ? 'hero-animate-in' : ''}`} id="hom">
      {/* Background Slideshow */}
      <div
        className="hero-bg-slideshow"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* --- BOTANICAL ORNAMENTS ON THE RIGHT (SLIDES IN FROM RIGHT) --- */}
      {/* 1. Green Pine Needle on the Right */}
      <div
        className="elementor-element elementor-absolute hero-ornament-right-wrap"
        style={{
          position: 'absolute',
          top: '36%',
          right: '-70px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="115"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
          />
        </div>
      </div>

      {/* 2. Blue Broadleaf on the Right (Mirrored) */}
      <div
        className="elementor-element elementor-absolute hero-ornament-right-wrap"
        style={{
          position: 'absolute',
          top: '44%',
          right: '-75px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <div style={{ transform: 'scaleX(-1) rotate(-8deg)', display: 'inline-block' }}>
            <img
              width="135"
              src="/assets/ornaments/ddw2.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* --- BOTANICAL ORNAMENTS ON THE BOTTOM-LEFT (SLIDES IN FROM LEFT) --- */}
      {/* 1. Green Pine Needle on the Bottom-Left */}
      <div
        className="elementor-element elementor-absolute hero-ornament-left-wrap"
        style={{
          position: 'absolute',
          bottom: '75px',
          left: '-42px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <div style={{ transform: 'scaleX(-1) rotate(15deg)', display: 'inline-block' }}>
            <img
              width="115"
              src="/assets/ornaments/ad13e.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* 2. Blue Flower/Broadleaf on the Bottom-Left */}
      <div
        className="elementor-element elementor-absolute hero-ornament-left-wrap"
        style={{
          position: 'absolute',
          bottom: '5px',
          left: '-75px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <div style={{ transform: 'rotate(-5deg)', display: 'inline-block' }}>
            <img
              width="140"
              src="/assets/ornaments/ddw2.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Floating Audio Play/Pause Button in Top-Right */}
      <FloatingAudioButton isPlaying={isPlaying} onToggle={onToggleAudio} />

      {/* Middle Content (Centered Text + Symmetrical Countdown) */}
      <div className="hero-content">
        <div className="hero-thewedding">{coverData.title}</div>
        <div className="hero-names">{coverData.coupleName}</div>
        <div className="hero-date">
          {eventDate.dayName}, {eventDate.dateFormatted}
        </div>

        <div className="hero-save-the-date">SAVE THE DATE</div>

        {/* Symmetrically Centered Countdown Timer */}
        <div className="countdown-container">
          <div className="countdown-boxes">
            <div className="countdown-box">
              <span className="countdown-box-digits">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-box-label">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-box-digits">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-box-label">Hours</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-box-digits">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-box-label">Minutes</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-box-digits">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-box-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
