import React from 'react';

export default function OpeningCover({ isOpen, isClosing, guestName, coverData, onOpen }) {
  if (isOpen && !isClosing) return null;

  return (
    <div
      className="cover-overlay"
      style={{
        transform: isClosing ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isClosing ? 0 : 1,
        transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.6s ease',
        pointerEvents: isClosing ? 'none' : 'auto'
      }}
    >
      <div className="cover-card">
        {/* Arched Photo at the top */}
        <img
          src={coverData.photo}
          alt={coverData.coupleName}
          className="cover-card-img"
          style={{
            width: '100%',
            height: '300px',
            maxHeight: '340px',
            objectFit: 'cover',
            objectPosition: coverData.photoPosition || 'center 10%',
            borderRadius: '290px 290px 0 0',
            display: 'block'
          }}
        />

        {/* The Wedding Of */}
        <div className="cover-title-thewedding">{coverData.title}</div>

        {/* Couple Names */}
        <div className="cover-title-names">{coverData.coupleName}</div>

        {/* Kepada Yth */}
        <div className="cover-to-text">
          Kepada Yth. <br /> Bapak/Ibu/Saudara/i
        </div>

        {/* Guest Name */}
        <div className="cover-guest-name">{guestName}</div>

        {/* Buka Undangan Button */}
        <button
          type="button"
          className="cover-btn-open"
          onClick={onOpen}
        >
          <i className="far fa-envelope-open"></i>
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
}
