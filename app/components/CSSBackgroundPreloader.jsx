'use client';
import { useEffect } from 'react';
const CSSBackgroundPreloader = ({ src }) => {
  useEffect(() => {
    const preloadImage = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    if (document.readyState === 'complete') {
      preloadImage();
    } else {
      window.addEventListener('load', preloadImage);
      return () => window.removeEventListener('load', preloadImage);
    }
  }, [src]);

  return null;
};

export default CSSBackgroundPreloader;
