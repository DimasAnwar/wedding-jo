import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate remaining time for a target date
 * @param {string} targetDate - ISO or Date string (e.g. '2026-11-15T08:00:00+07:00')
 * @returns {{ days: number, hours: number, minutes: number, seconds: number }}
 */
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!targetDate) return;
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      let diff = target - now;
      if (diff < 0) diff = Math.abs(diff);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
