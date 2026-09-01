import React from 'react';

export default function FloatingAudioButton({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      className="floating-audio-top-btn"
      onClick={onToggle}
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      {isPlaying ? (
        <i className="fas fa-compact-disc music-disc-spin"></i>
      ) : (
        <i className="fas fa-play music-play-icon"></i>
      )}
    </button>
  );
}
