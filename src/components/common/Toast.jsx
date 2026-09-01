import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999999,
        background: 'rgba(20, 24, 30, 0.95)',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid #c5a880',
        fontSize: '14px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <i className="fas fa-check-circle" style={{ color: '#c5a880' }}></i>
      <span>{message}</span>
    </div>
  );
}
