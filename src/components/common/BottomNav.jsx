import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hom', iconClass: 'fas fa-home', label: 'Cover' },
  { id: 'kopel', iconClass: 'fas fa-heart', label: 'Couple' },
  { id: 'lokasi', iconClass: 'far fa-calendar-alt', label: 'Event' },
  { id: 'galeri', iconClass: 'far fa-images', label: 'Gallery' },
  { id: 'selamat', iconClass: 'far fa-comment-dots', label: 'Wishes' }
];

export default function BottomNav({ isVisible }) {
  const [activeSection, setActiveSection] = useState('hom');

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  if (!isVisible) return null;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(`#${targetId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className="bottom-nav-container"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: '100%',
        maxWidth: '500px',
        backgroundImage: 'linear-gradient(180deg, #8794a6 0%, #536579 100%)',
        borderRadius: '16px 16px 0 0',
        boxShadow: '0 -4px 25px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(8px)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          padding: '6px 0'
        }}
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                flex: '1 1 20%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 4px',
                textDecoration: 'none',
                color: '#ffffff',
                borderRight: index < NAV_ITEMS.length - 1 ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
                background: isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                borderRadius: '8px',
                margin: '0 2px'
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  lineHeight: 1,
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.2s ease',
                  opacity: isActive ? 1 : 0.85
                }}
              >
                <i className={item.iconClass}></i>
              </div>
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  fontWeight: isActive ? 600 : 400,
                  lineHeight: 1.2,
                  letterSpacing: '0.2px',
                  opacity: isActive ? 1 : 0.85
                }}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
