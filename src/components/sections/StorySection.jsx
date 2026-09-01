import React from 'react';

export default function StorySection({ coupleName, stories }) {
  if (!stories || !stories.items || stories.items.length === 0) return null;

  return (
    <div
      className="elementor-element e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="cerita"
      style={{
        position: 'relative',
        padding: '50px 14px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* =========================================================================
          BOTANICAL ORNAMENTS ON ALL 4 CORNERS OF THE BACKGROUND (DEEPLY TUCKED)
          ========================================================================= */}

      {/* --- TOP-LEFT CORNER (BG SUDUT KIRI ATAS - SLIDE IN DARI KIRI) --- */}
      <div
        className="flower-reveal-left flower-delay-1"
        style={{
          position: 'absolute',
          top: '-30px',
          left: '-30px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="120"
            src="/assets/ornaments/ddw2.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(70deg)', transformOrigin: 'top left' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-left flower-delay-2"
        style={{
          position: 'absolute',
          top: '-15px',
          left: '35px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="75"
            src="/assets/ornaments/satu.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(85deg)', transformOrigin: 'top left' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-left flower-delay-3"
        style={{
          position: 'absolute',
          top: '40px',
          left: '-15px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="75"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(35deg)', transformOrigin: 'top left' }}
          />
        </div>
      </div>

      {/* --- TOP-RIGHT CORNER (BG SUDUT KANAN ATAS - SLIDE IN DARI KANAN) --- */}
      <div
        className="flower-reveal-right flower-delay-1"
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="120"
            src="/assets/ornaments/ddw2.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(70deg)', transformOrigin: 'top right' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-right flower-delay-2"
        style={{
          position: 'absolute',
          top: '-15px',
          right: '35px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="75"
            src="/assets/ornaments/satu.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(85deg)', transformOrigin: 'top right' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-right flower-delay-3"
        style={{
          position: 'absolute',
          top: '40px',
          right: '-15px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="75"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(35deg)', transformOrigin: 'top right' }}
          />
        </div>
      </div>

      {/* --- BOTTOM-LEFT CORNER (BG SUDUT KIRI BAWAH - SLIDE IN DARI KIRI) --- */}
      <div
        className="flower-reveal-left flower-delay-1"
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="120"
            src="/assets/ornaments/ddw2.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(20deg)', transformOrigin: 'bottom left' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-left flower-delay-2"
        style={{
          position: 'absolute',
          bottom: '-15px',
          left: '35px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="75"
            src="/assets/ornaments/satu.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(10deg)' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-left flower-delay-3"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '-15px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="75"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', transform: 'rotate(-30deg)' }}
          />
        </div>
      </div>

      {/* --- BOTTOM-RIGHT CORNER (BG SUDUT KANAN BAWAH - SLIDE IN DARI KANAN) --- */}
      <div
        className="flower-reveal-right flower-delay-1"
        style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-30px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="120"
            src="/assets/ornaments/ddw2.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(20deg)', transformOrigin: 'bottom right' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-right flower-delay-2"
        style={{
          position: 'absolute',
          bottom: '-15px',
          right: '35px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="75"
            src="/assets/ornaments/satu.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(10deg)' }}
          />
        </div>
      </div>
      <div
        className="flower-reveal-right flower-delay-3"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '-15px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="75"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', transform: 'scaleX(-1) rotate(-30deg)' }}
          />
        </div>
      </div>

      {/* =========================================================================
          MAIN STORY CARD (IN FRONT OF FLOWERS: zIndex 3)
          ========================================================================= */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          backgroundColor: '#FCFCFC',
          backgroundImage: 'radial-gradient(at center center, #FFFFFF 0%, #F5F6F8 100%)',
          borderRadius: '24px',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          padding: '16px',
          margin: '0 auto',
          maxWidth: '430px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Inner Outline Frame */}
        <div
          style={{
            border: '1.5px solid #7C8D9E',
            borderRadius: '18px',
            padding: '36px 18px 40px 18px',
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          {/* Header Title: Couple Name & Story Calligraphy */}
          <div
            style={{
              display: 'inline-block',
              position: 'relative',
              margin: '0 auto 22px auto',
              textAlign: 'center'
            }}
          >
            <h2
              style={{
                fontFamily: "'Ivy Mode', serif",
                fontSize: '34px',
                color: '#3b4450',
                fontWeight: 400,
                margin: 0,
                textAlign: 'center',
                lineHeight: 1.1,
                letterSpacing: '0.3px',
                whiteSpace: 'nowrap'
              }}
            >
              {coupleName}
            </h2>

            {/* Subtitle: "Story" in script calligraphy */}
            <div
              style={{
                fontFamily: "'amalfi', cursive",
                fontSize: '20px',
                color: '#3b4450',
                textAlign: 'right',
                margin: '10px 4px 0 0',
                lineHeight: 1
              }}
            >
              Story
            </div>
          </div>

          {/* Asymmetrical Arch Photo Container (Top-Left Curved) */}
          <div
            style={{
              display: 'inline-block',
              width: '100%',
              maxWidth: '320px',
              margin: '0 auto 10px auto',
              border: '2px solid #7C8D9E',
              borderRadius: '180px 0 0 0',
              padding: '5px',
              background: 'transparent',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)'
            }}
          >
            <img
              src={stories.photo || '/assets/images/4.jpeg'}
              alt="Our Story"
              style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover',
                objectPosition: stories.photoPosition || 'center 35%',
                borderRadius: '175px 0 0 0',
                display: 'block'
              }}
            />
          </div>

          {/* Timeline Items */}
          {stories.items.map((item, idx) => (
            <div key={idx}>
              {/* Vertical Connector Line */}
              <div
                style={{
                  width: '1.5px',
                  height: '35px',
                  backgroundColor: '#7C8D9E',
                  margin: '22px auto 14px auto'
                }}
              />

              {/* Date Badge */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  color: '#3b4450',
                  textAlign: 'center',
                  marginBottom: '10px'
                }}
              >
                {item.date}
              </div>

              {/* Story Description Text */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12.5px',
                  lineHeight: '1.7',
                  color: '#666666',
                  textAlign: 'center',
                  margin: 0,
                  padding: '0 10px'
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
