import React from 'react';

export default function EventSection({ events }) {
  return (
    <div
      className="elementor-element elementor-element-39db5bca e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="lokasi"
    >
      <div className="e-con-inner">
        {/* Section Divider & Header */}
        <div className="elementor-element elementor-element-2a9b96d elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left ring-edit-yes elementor-widget elementor-widget-divider">
          <div className="elementor-widget-container">
            <div className="elementor-divider">
              <span className="elementor-divider-separator">
                <span className="elementor-divider__text elementor-divider__element"> Wedding </span>
              </span>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-61669d75 ring-edit-yes elementor-widget elementor-widget-heading">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Event</h2>
          </div>
        </div>

        {/* EVENTS LIST */}
        {events.map((event, index) => {
          const isSecond = index % 2 === 1;

          return (
            <div
              key={event.id || index}
              className={`reveal-on-scroll ${isSecond ? 'reveal-delay-2' : 'reveal-delay-1'}`}
              style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: '#ffffff',
                backgroundImage: 'radial-gradient(at center center, #ffffff 0%, #f7f8fa 100%)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '28px 20px 24px 20px',
                margin: isSecond ? '0 auto 10px auto' : '0 auto 22px auto',
                maxWidth: '390px',
                width: '100%',
                textAlign: 'center',
                boxSizing: 'border-box'
              }}
            >
              {/* Event Title (Akad / Resepsi) */}
              <h2
                style={{
                  fontFamily: "'Ivy Mode', serif",
                  fontSize: '32px',
                  color: '#4E5E71',
                  fontWeight: 400,
                  margin: '0 0 6px 0',
                  letterSpacing: '0.5px'
                }}
              >
                {event.title}
              </h2>

              {/* Top Flourish Ornament */}
              <div style={{ margin: '0 auto 8px auto', maxWidth: '220px', width: '65%' }}>
                <img
                  src="/assets/ornaments/Untitled-1.png"
                  alt=""
                  style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>

              {/* Date */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  color: '#333333',
                  margin: '6px 0 8px 0'
                }}
              >
                {event.date}
              </div>

              {/* Bottom Flourish Ornament under Date */}
              <div style={{ margin: '0 auto 12px auto', maxWidth: '220px', width: '65%' }}>
                <img
                  src="/assets/ornaments/Untitled-1.png"
                  alt=""
                  style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>

              {/* Time with Clock Icon */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12.5px',
                  fontWeight: 400,
                  letterSpacing: '0.4px',
                  color: '#666666',
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <i aria-hidden="true" className="far fa-clock" style={{ fontSize: '13px' }}></i>
                <span>{event.time}</span>
              </div>

              {/* Venue Name */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#444444',
                  margin: '0 0 3px 0'
                }}
              >
                {event.venue}
              </div>

              {/* Address */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: '#666666',
                  maxWidth: '300px',
                  margin: '0 auto 18px auto'
                }}
              >
                {event.address}
              </div>

              {/* Google Map Button */}
              {event.mapsUrl && (
                <div style={{ textAlign: 'center' }}>
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#4E5E71',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #A2A7AA',
                      borderRadius: '4px',
                      padding: '7px 20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4E5E71';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#4E5E71';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = '#4E5E71';
                      e.currentTarget.style.borderColor = '#A2A7AA';
                    }}
                  >
                    <i aria-hidden="true" className="fas fa-map-marker-alt" style={{ fontSize: '12px' }}></i>
                    <span>Google Map</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}

        {/* BOTTOM FOLIAGE ORNAMENTS CLUSTER */}
        <div
          className="elementor-element elementor-element-47695fc9 e-flex e-con-boxed e-con e-child reveal-on-scroll"
          style={{
            position: 'absolute',
            bottom: '-15px',
            left: '0px',
            right: '0px',
            height: '200px',
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'visible'
          }}
        >
          <div className="e-con-inner" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible' }}>
            {/* Left Bottom Corner Botanical Bouquet */}
            <div className="flower-reveal-left flower-delay-1" style={{ position: 'absolute', bottom: '-55px', left: '-45px' }}>
              <div className="goyang">
                <img width="140" src="/assets/ornaments/ddw2.webp" alt="" style={{ display: 'block', transform: 'rotate(18deg)' }} />
              </div>
            </div>
            <div className="flower-reveal-left flower-delay-2" style={{ position: 'absolute', bottom: '-60px', left: '-5px' }}>
              <div className="goyang">
                <img width="115" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'scaleX(-1) rotate(7deg)' }} />
              </div>
            </div>
            <div className="flower-reveal-left flower-delay-3" style={{ position: 'absolute', bottom: '10px', left: '60px' }}>
              <div className="goyang2">
                <img width="36" src="/assets/ornaments/dawd123123daw.webp" alt="" style={{ display: 'block', transform: 'rotate(46deg)' }} />
              </div>
            </div>

            {/* Right Bottom Corner Botanical Bouquet */}
            <div className="flower-reveal-right flower-delay-1" style={{ position: 'absolute', bottom: '-55px', right: '-45px' }}>
              <div className="goyang2">
                <img width="140" src="/assets/ornaments/satu.webp" alt="" style={{ display: 'block' }} />
              </div>
            </div>
            <div className="flower-reveal-right flower-delay-2" style={{ position: 'absolute', bottom: '-60px', right: '-5px' }}>
              <div className="goyang">
                <img width="115" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'rotate(-17deg)' }} />
              </div>
            </div>
            <div className="flower-reveal-right flower-delay-3" style={{ position: 'absolute', bottom: '12px', right: '0px' }}>
              <div className="goyang">
                <img width="85" src="/assets/ornaments/daw13123.webp" alt="" style={{ display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
