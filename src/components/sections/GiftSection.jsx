import React, { useState } from 'react';

export default function GiftSection({ gifts, onCopy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="elementor-element e-flex e-con-boxed e-con e-child reveal-on-scroll"
      id="paper_rekening"
      style={{
        position: 'relative',
        padding: '55px 20px 45px 20px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: '440px', margin: '0 auto', width: '100%' }}>
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Ivy Mode', serif",
            fontSize: '36px',
            color: '#3b4450',
            fontWeight: 400,
            margin: '0 0 12px 0',
            textAlign: 'center'
          }}
        >
          Wedding Gift
        </h2>

        {/* Subtitle Description */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12.5px',
            lineHeight: '1.7',
            color: '#666666',
            margin: '0 auto 22px auto',
            maxWidth: '380px',
            padding: '0 5px'
          }}
        >
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado melalui:
        </p>

        {/* Toggle Button "Kirim Hadiah" */}
        <div style={{ marginBottom: isOpen ? '24px' : '10px' }}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: '#A88346',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '11px 26px',
              fontSize: '13.5px',
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(168, 131, 70, 0.35)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#947239';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#A88346';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-gift" style={{ fontSize: '15px' }}></i>
            <span>{isOpen ? 'Tutup Rekening' : 'Kirim Hadiah'}</span>
          </button>
        </div>

        {/* Collapsible Cards Container */}
        {isOpen && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              animation: 'fadeInUp 0.4s ease both'
            }}
          >
            {/* BANK ACCOUNTS */}
            {gifts.bankAccounts?.map((account, index) => (
              <div
                key={account.id || index}
                style={{
                  backgroundColor: '#FCFCFC',
                  backgroundImage: 'radial-gradient(at center center, #FFFFFF 0%, #F7F8FA 100%)',
                  borderRadius: '14px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '20px 18px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#3b4450',
                    marginBottom: '4px'
                  }}
                >
                  {account.bank}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13px',
                    color: '#666666',
                    marginBottom: '4px'
                  }}
                >
                  {account.accountHolder}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    color: '#2D3748',
                    marginBottom: '14px'
                  }}
                >
                  {account.accountNumber}
                </div>
                <button
                  type="button"
                  onClick={() => onCopy(account.accountNumber, `Nomor rekening ${account.bank}`)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#4E5E71',
                    border: '1px solid #A2A7AA',
                    borderRadius: '6px',
                    padding: '7px 18px',
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4E5E71';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#4E5E71';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#4E5E71';
                    e.currentTarget.style.borderColor = '#A2A7AA';
                  }}
                >
                  <i className="far fa-copy"></i>
                  <span>Salin Rekening</span>
                </button>
              </div>
            ))}

            {/* PHYSICAL GIFT CARD */}
            {gifts.physicalGift && (
              <div
                style={{
                  backgroundColor: '#FCFCFC',
                  backgroundImage: 'radial-gradient(at center center, #FFFFFF 0%, #F7F8FA 100%)',
                  borderRadius: '14px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '20px 18px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#3b4450',
                    marginBottom: '6px'
                  }}
                >
                  Kirim Kado Fisik
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '12.5px',
                    lineHeight: '1.5',
                    color: '#555555',
                    marginBottom: '14px'
                  }}
                >
                  <strong>{gifts.physicalGift.recipient}</strong>
                  <br />
                  {gifts.physicalGift.address}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onCopy(
                      `${gifts.physicalGift.recipient}\n${gifts.physicalGift.address}`,
                      'Alamat Pengiriman'
                    )
                  }
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#4E5E71',
                    border: '1px solid #A2A7AA',
                    borderRadius: '6px',
                    padding: '7px 18px',
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4E5E71';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#4E5E71';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#4E5E71';
                    e.currentTarget.style.borderColor = '#A2A7AA';
                  }}
                >
                  <i className="far fa-copy"></i>
                  <span>Salin Alamat</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
