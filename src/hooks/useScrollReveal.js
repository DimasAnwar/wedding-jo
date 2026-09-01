import { useEffect } from 'react';

/**
 * Custom hook to attach IntersectionObserver for .reveal-on-scroll elements
 * @param {boolean} triggerCondition - re-run observation when condition changes (e.g. isOpen)
 */
export function useScrollReveal(triggerCondition = true) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkVisible = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 20) {
          el.classList.add('is-visible');
        }
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
      );

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));

      // Check only elements currently visible on mount
      setTimeout(checkVisible, 200);

      return () => {
        observer.disconnect();
      };
    } else {
      window.addEventListener('scroll', checkVisible, { passive: true });
      setTimeout(checkVisible, 200);
      return () => window.removeEventListener('scroll', checkVisible);
    }
  }, [triggerCondition]);
}
