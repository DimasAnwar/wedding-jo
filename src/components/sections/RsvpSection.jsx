import React, { useState } from 'react';

export default function RsvpSection({ guestName, onShowToast }) {
  const [name, setName] = useState(guestName !== 'Tamu' ? guestName : '');
  const [status, setStatus] = useState('Bersedia Hadir');
  const [guestsCount, setGuestsCount] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const rsvpData = {
        id: Date.now(),
        name: name.trim(),
        status,
        guestsCount: status === 'Bersedia Hadir' ? guestsCount : 0,
        date: new Date().toLocaleDateString('id-ID')
      };

      // Save to localStorage
      const existingRsvps = JSON.parse(localStorage.getItem('nobuka_rsvps') || '[]');
      localStorage.setItem('nobuka_rsvps', JSON.stringify([rsvpData, ...existingRsvps]));
    } catch (err) {
      console.error('Failed to save RSVP', err);
    }

    setIsSubmitted(true);
    if (onShowToast) {
      onShowToast('Konfirmasi kehadiran berhasil dikirim! Terima kasih.');
    }
  };

  return (
    <div
      className="elementor-element e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="rsvp"
      style={{
        position: 'relative',
        backgroundColor: '#C8C8C6',
        padding: '45px 20px 50px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 3, maxWidth: '370px', margin: '0 auto', width: '100%' }}>
        {/* Section Title */}
        <h2
          style={{
            fontFamily: "'Ivy Mode', serif",
            fontSize: '32px',
            color: '#465668',
            fontWeight: 400,
            margin: '0 0 12px 0',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '0.2px'
          }}
        >
          Konfirmasi Kehadiran
        </h2>

        {/* Subtitle Description */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12px',
            lineHeight: '1.6',
            color: '#666666',
            margin: '0 auto 20px auto',
            maxWidth: '340px',
            padding: '0 4px',
            fontWeight: 400
          }}
        >
          Mohon kesediaannya untuk melakukan konfirmasi kehadiran, supaya kami bisa mempersiapkan kehadiran anda dengan baik.
        </p>

        {/* Form Container */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '4px',
                border: '1.5px solid #6C7A89',
                backgroundColor: '#ffffff',
                fontSize: '13px',
                fontFamily: "'Poppins', sans-serif",
                color: '#333333',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Row: Konfirmasi Status & Jumlah Hadir */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 85px', gap: '10px' }}>
            {/* Konfirmasi Status */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '11px',
                  fontFamily: "'Poppins', sans-serif",
                  color: '#666666',
                  marginBottom: '3px',
                  fontWeight: 400
                }}
              >
                Konfirmasi
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 26px 8px 10px',
                  borderRadius: '4px',
                  border: '1.5px solid #6C7A89',
                  backgroundColor: '#ffffff',
                  fontSize: '13px',
                  fontFamily: "'Poppins', sans-serif",
                  color: '#333333',
                  outline: 'none',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23536579\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 6px center',
                  backgroundSize: '18px'
                }}
              >
                <option value="Bersedia Hadir">Bersedia Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Ragu-ragu">Ragu-ragu</option>
              </select>
            </div>

            {/* Jumlah Hadir */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '11px',
                  fontFamily: "'Poppins', sans-serif",
                  color: '#666666',
                  marginBottom: '3px',
                  fontWeight: 400
                }}
              >
                Jumlah Hadir
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={guestsCount}
                onChange={(e) => setGuestsCount(parseInt(e.target.value) || 1)}
                disabled={status === 'Tidak Hadir'}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: '1.5px solid #6C7A89',
                  backgroundColor: status === 'Tidak Hadir' ? '#f0f0f0' : '#ffffff',
                  fontSize: '13px',
                  fontFamily: "'Poppins', sans-serif",
                  color: '#333333',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2B2B2B',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '11px 16px',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
              marginTop: '4px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              transition: 'background-color 0.2s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2B2B2B';
            }}
          >
            {isSubmitted ? 'Terkirim ✓' : 'Kirim Konfirmasi'}
          </button>
        </form>
      </div>

      {/* Bottom Geometric / Faceted Polygon Separator */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '42px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <polygon points="0,25 250,0 500,25 500,50 0,50" fill="#DBDBDB" opacity="0.8" />
          <polygon points="0,38 250,15 500,38 500,50 0,50" fill="#EAEAEA" />
        </svg>
      </div>
    </div>
  );
}
