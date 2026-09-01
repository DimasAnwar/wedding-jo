import React from 'react';

export default function FooterSection({ footerImage, copyrightText }) {
  return (
    <div
      className="elementor-element elementor-element-464ce39b e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="fotofooter"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px',
        transition: 'background-image 1.2s ease-in-out'
      }}
    >
      <div className="e-con-inner" style={{ position: 'relative', zIndex: 2 }}>
        <div className="elementor-element elementor-element-60e9a94 elementor-widget elementor-widget-heading">
          <div className="elementor-widget-container">
            <div className="elementor-heading-title elementor-size-default">
              <span style={{ color: '#fff', fontSize: '14px' }}>{copyrightText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
