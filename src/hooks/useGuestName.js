import { useState, useEffect } from 'react';

/**
 * Custom hook to extract guest name from URL query string (?to= or ?untuk=)
 * @param {string} defaultName
 * @returns {string} guestName
 */
export function useGuestName(defaultName = 'Tamu Undangan') {
  const [guestName, setGuestName] = useState(defaultName);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      // Extract from both window.location.search and hash
      const searchParams = new URLSearchParams(window.location.search);
      let hashParams = new URLSearchParams();
      if (window.location.hash && window.location.hash.includes('?')) {
        hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
      }

      // Check all common query parameters
      const paramKeys = ['to', 'nama', 'guest', 'u', 'n', 'undangan', 'kepada', 'untuk', 'yth'];
      let foundName = null;

      for (const key of paramKeys) {
        const val = searchParams.get(key) || hashParams.get(key);
        if (val && val.trim()) {
          foundName = val.trim();
          break;
        }
      }

      if (foundName) {
        // Replace '+' with space and decode
        const decoded = decodeURIComponent(foundName.replace(/\+/g, ' '));
        setGuestName(decoded);
      }
    } catch (e) {
      console.error('Failed to parse URL params for guest name', e);
    }
  }, [defaultName]);

  return guestName;
}
