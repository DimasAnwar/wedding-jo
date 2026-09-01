import { useState, useRef, useCallback } from 'react';

/**
 * Custom hook to manage toast notifications with automatic dismiss
 * @param {number} duration - Auto dismiss duration in milliseconds (default 3000)
 * @returns {{ toastMsg: string, showToast: (msg: string) => void }}
 */
export function useToast(duration = 3000) {
  const [toastMsg, setToastMsg] = useState('');
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setToastMsg(msg);
    timerRef.current = setTimeout(() => {
      setToastMsg('');
    }, duration);
  }, [duration]);

  return { toastMsg, showToast };
}
