import React, { useState } from 'react';

export default function WishesSection({ wishes = [], onAddWish }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const success = await onAddWish(name.trim(), text.trim());
      if (success !== false) {
        setName('');
        setText('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="elementor-element elementor-element-2d57319 e-flex e-con-boxed e-con e-child reveal-on-scroll" id="selamat">
      <div className="e-con-inner">
        {/* Divider Header */}
        <div className="elementor-element elementor-element-6e068fa6 elementor-widget-divider--view-line_text ring-edit-yes elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider">
          <div className="elementor-widget-container">
            <div className="elementor-divider">
              <span className="elementor-divider-separator">
                <span className="elementor-divider__text elementor-divider__element"> Friend Wish </span>
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div style={{ textAlign: 'center', margin: '4px 0 16px 0' }}>
          <h2
            style={{
              fontFamily: "'Ivy Mode', serif",
              fontSize: '28px',
              fontWeight: 400,
              color: '#3B4450',
              margin: '0 0 4px 0',
              letterSpacing: '0.5px'
            }}
          >
            Friend Wish
          </h2>
          <div
            style={{
              fontFamily: "'amalfi', cursive",
              fontSize: '20px',
              color: '#7C8D9E',
              margin: '0 0 8px 0'
            }}
          >
            Prayers &amp; Blessings
          </div>
          <div style={{ maxWidth: '180px', margin: '0 auto 8px auto' }}>
            <img
              src="/assets/ornaments/Untitled-1.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              color: '#666666',
              lineHeight: '1.6',
              margin: '0 auto',
              maxWidth: '320px'
            }}
          >
            Berikan ucapan manis dan doa restu terbaik Anda untuk kedua mempelai.
          </p>
        </div>

        {/* Main Card Form & List */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px 20px',
            margin: '16px auto 30px auto',
            width: '100%',
            maxWidth: '440px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxSizing: 'border-box'
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              style={{
                padding: '11px 15px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '13.5px',
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                backgroundColor: '#f9fafb',
                color: '#333333'
              }}
              required
            />
            <textarea
              placeholder="Tulis ucapan dan doa restu..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={isSubmitting}
              rows="3"
              style={{
                padding: '11px 15px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '13.5px',
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                resize: 'vertical',
                backgroundColor: '#f9fafb',
                color: '#333333'
              }}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: '#536579',
                color: '#ffffff',
                border: 'none',
                padding: '11px 20px',
                borderRadius: '25px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '13.5px',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(83, 101, 121, 0.3)',
                opacity: isSubmitting ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) e.currentTarget.style.background = '#435263';
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) e.currentTarget.style.background = '#536579';
              }}
            >
              <i className="far fa-paper-plane" style={{ fontSize: '13px' }}></i>
              <span>{isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}</span>
            </button>
          </form>

          {/* Wishes Feed */}
          <div
            style={{
              marginTop: '22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxHeight: '380px',
              overflowY: 'auto',
              paddingRight: '4px'
            }}
          >
            {wishes && wishes.length > 0 ? (
              wishes.map((w, idx) => (
                <div
                  key={w.id || idx}
                  className="wish-card-item"
                  style={{
                    background: '#f8fafc',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    border: '1px solid #edf2f7',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '5px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '13.5px',
                        color: '#3B4450'
                      }}
                    >
                      {w.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '11px',
                        color: '#94a3b8'
                      }}
                    >
                      {w.date}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '12.5px',
                      color: '#475569',
                      lineHeight: 1.55,
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {w.text}
                  </p>
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '24px 10px',
                  color: '#94a3b8',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12.5px'
                }}
              >
                Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
