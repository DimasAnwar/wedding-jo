import React from 'react';

export default function DesktopStickyLeft({ guestName, coverData, eventDate }) {
  return (
    <div
      className="elementor-element elementor-element-7abb00f0 e-con-full elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-child"
      style={{
        backgroundImage: `url('${coverData.desktopBg || coverData.photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="elementor-element elementor-element-46cd0a1a elementor-widget elementor-widget-heading">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">{coverData.coupleName}</h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-5e2abdd7 elementor-widget elementor-widget-Date Generator">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">
            {eventDate.dayName}, {eventDate.dateFormatted}
          </h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-373242e1 elementor-widget elementor-widget-heading">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">
            Kepada Yth. <br /> Bapak/Ibu/Saudara/i
          </h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-22db001c namatamu elementor-widget elementor-widget-heading">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">{guestName}</h2>
        </div>
      </div>
    </div>
  );
}
