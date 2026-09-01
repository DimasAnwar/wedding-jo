import React from 'react';

export default function CoupleSection({ groom, bride, invitationText }) {
  return (
    <div
      className="elementor-element elementor-element-2a2d51ae e-con-full e-flex e-con e-child"
      id="kopel"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* --- 1. GROOM BOTANICAL ORNAMENTS ON THE RIGHT --- */}
      <div
        className="elementor-element elementor-absolute"
        style={{
          position: 'absolute',
          top: '210px',
          right: '-45px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <img
            width="100"
            src="/assets/ornaments/daw13123.webp"
            alt=""
            style={{ display: 'block', maxWidth: 'none', height: 'auto', transform: 'scaleX(-1) rotate(35deg)' }}
          />
        </div>
      </div>

      <div
        className="elementor-element elementor-absolute"
        style={{
          position: 'absolute',
          top: '270px',
          right: '-48px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang">
          <img
            width="120"
            src="/assets/ornaments/ad13e.webp"
            alt=""
            style={{ display: 'block', maxWidth: 'none', height: 'auto', transform: 'rotate(2deg)' }}
          />
        </div>
      </div>

      <div
        className="elementor-element elementor-absolute"
        style={{
          position: 'absolute',
          top: '335px',
          right: '-85px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <div className="goyang2">
          <div style={{ transform: 'scaleX(-1) rotate(48deg)', display: 'inline-block' }}>
            <img
              width="145"
              src="/assets/ornaments/ddw2.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* --- 2. BRIDE BOTANICAL ORNAMENTS ON THE LEFT --- */}
      <div
        style={{
          position: 'absolute',
          top: '1000px',
          left: '-45px',
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scaleX(-1)'
        }}
      >
        <div style={{ position: 'absolute', top: '0px', right: '0px' }}>
          <div className="goyang2">
            <img
              width="100"
              src="/assets/ornaments/daw13123.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto', transform: 'scaleX(-1) rotate(35deg)' }}
            />
          </div>
        </div>
        <div style={{ position: 'absolute', top: '60px', right: '-3px' }}>
          <div className="goyang">
            <img
              width="120"
              src="/assets/ornaments/ad13e.webp"
              alt=""
              style={{ display: 'block', maxWidth: 'none', height: 'auto', transform: 'rotate(2deg)' }}
            />
          </div>
        </div>
        <div style={{ position: 'absolute', top: '125px', right: '-40px' }}>
          <div className="goyang2">
            <div style={{ transform: 'scaleX(-1) rotate(48deg)', display: 'inline-block' }}>
              <img
                width="145"
                src="/assets/ornaments/ddw2.webp"
                alt=""
                style={{ display: 'block', maxWidth: 'none', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-element elementor-element-22b23ba6 e-con-full e-flex e-con e-child" style={{ paddingBottom: '45px' }}>
        <div className="elementor-element elementor-element-53f199 elementor-widget elementor-widget-image reveal-on-scroll">
          <div className="elementor-widget-container">
            <img
              width="429"
              height="27"
              src="/assets/ornaments/Untitled-1.png"
              className="attachment-medium_large size-medium_large wp-image-253756"
              alt=""
            />
          </div>
        </div>
        <div className="elementor-element elementor-element-6ec08eb3 ring-edit-yes elementor-widget elementor-widget-heading reveal-on-scroll">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              {invitationText}
            </h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-c3ec911 wadahprofil e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            {/* GROOM CARD */}
            <div className="elementor-element elementor-element-7942843c profilcatin e-flex e-con-boxed e-con e-child reveal-on-scroll reveal-delay-1">
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-f94d01b elementor-widget elementor-widget-image"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 18px auto' }}
                >
                  <div
                    className="elementor-widget-container"
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      padding: '5px',
                      border: '5px double #7C8D9E',
                      borderRadius: '170px 170px 0 0',
                      background: 'transparent',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <img
                      width="768"
                      height="1152"
                      src={groom.photo}
                      className="attachment-medium_large size-medium_large wp-image-135144"
                      alt={groom.nickname}
                      style={{
                        width: '220px',
                        maxWidth: '220px',
                        height: '310px',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        borderRadius: '160px 160px 0 0',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                </div>
                <div className="elementor-element elementor-element-3389642b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{groom.nickname}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-73022005 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{groom.fullName}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5cd77cc8 elementor-widget elementor-widget-Title Maker">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{groom.city}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-827865d elementor-widget elementor-widget-Title Maker">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {groom.childOrder} dari {groom.father} &amp; {groom.mother}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER "AND" */}
            <div className="elementor-element elementor-element-261b83ab profilcatin e-flex e-con-boxed e-con e-child reveal-on-scroll reveal-delay-2">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a3d36e7 elementor-widget-divider--view-line_text ring-edit-yes elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator">
                        <span className="elementor-divider__text elementor-divider__element"> AND </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BRIDE CARD */}
            <div className="elementor-element elementor-element-7942843c profilcatin e-flex e-con-boxed e-con e-child reveal-on-scroll reveal-delay-1">
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-f94d01b elementor-widget elementor-widget-image"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 18px auto' }}
                >
                  <div
                    className="elementor-widget-container"
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      padding: '5px',
                      border: '5px double #7C8D9E',
                      borderRadius: '170px 170px 0 0',
                      background: 'transparent',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <img
                      width="768"
                      height="1152"
                      src={bride.photo}
                      className="attachment-medium_large size-medium_large wp-image-135144"
                      alt={bride.nickname}
                      style={{
                        width: '220px',
                        maxWidth: '220px',
                        height: '310px',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        borderRadius: '160px 160px 0 0',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                </div>
                <div className="elementor-element elementor-element-3389642b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{bride.nickname}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-73022005 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{bride.fullName}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5cd77cc8 elementor-widget elementor-widget-Title Maker">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{bride.city}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-827865d elementor-widget elementor-widget-Title Maker">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {bride.childOrder} dari {bride.father} &amp; {bride.mother}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM ORNAMENT DIVIDER */}
            <div
              className="elementor-element elementor-element-202fd52 elementor-widget elementor-widget-image reveal-on-scroll"
              style={{ textAlign: 'center', margin: '18px auto 30px auto', maxWidth: '380px', width: '85%' }}
            >
              <div className="elementor-widget-container">
                <img
                  width="429"
                  height="27"
                  src="/assets/ornaments/Untitled-1.png"
                  className="attachment-medium_large size-medium_large wp-image-253756"
                  alt=""
                  style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOLIAGE ORNAMENTS CLUSTER */}
        <div
          className="elementor-element elementor-element-7b2bd3ac e-flex e-con-boxed e-con e-child"
          style={{
            position: 'absolute',
            bottom: '-65px',
            left: '0px',
            right: '0px',
            height: '200px',
            pointerEvents: 'none',
            zIndex: 2,
            overflow: 'visible'
          }}
        >
          <div className="e-con-inner" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible' }}>
            {/* Left Bottom Corner Botanical Bouquet */}
            <div style={{ position: 'absolute', bottom: '-55px', left: '-45px' }}>
              <div className="goyang">
                <img width="140" src="/assets/ornaments/ddw2.webp" alt="" style={{ display: 'block', transform: 'rotate(18deg)' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-60px', left: '-5px' }}>
              <div className="goyang">
                <img width="115" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'scaleX(-1) rotate(7deg)' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', left: '60px' }}>
              <div className="goyang2">
                <img width="36" src="/assets/ornaments/dawd123123daw.webp" alt="" style={{ display: 'block', transform: 'rotate(46deg)' }} />
              </div>
            </div>

            {/* Right Bottom Corner Botanical Bouquet */}
            <div style={{ position: 'absolute', bottom: '-55px', right: '-45px' }}>
              <div className="goyang2">
                <img width="140" src="/assets/ornaments/satu.webp" alt="" style={{ display: 'block' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-60px', right: '-5px' }}>
              <div className="goyang">
                <img width="115" src="/assets/ornaments/ad13e.webp" alt="" style={{ display: 'block', transform: 'rotate(-17deg)' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '12px', right: '0px' }}>
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
