'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/app/components/loading/LoadingScreen';
import { preloadImage } from '@/app/utils/imageUtils';

const imagesToPreload = [
  '/blockmain.jpg',
  '/blockbottom.jpg',
  '/blocktop.jpg',
  '/logo-white.svg',
  '/footerblock.jpg',
];

const ClientLoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [preloadComplete, setPreloadComplete] = useState(false);
  const [finalAnimationComplete, setFinalAnimationComplete] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(imagesToPreload.map(preloadImage));
        setPreloadComplete(true);
        // Add a minimum delay to ensure the loading animation completes
        await new Promise((resolve) => setTimeout(resolve, 2750));
        // Trigger final animation
        setIsLoading(false);
        // Wait for final animation to complete
        await new Promise((resolve) => setTimeout(resolve, 750));
        setFinalAnimationComplete(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setPreloadComplete(true);
        setIsLoading(false);
        setFinalAnimationComplete(true);
      }
    };

    preloadImages();
  }, []);

  if (!finalAnimationComplete) {
    return (
      <LoadingScreen
        key='loading-screen'
        preloadComplete={preloadComplete}
        isLoading={isLoading}
      />
    );
  }

  return <>{children}</>;
};

export default ClientLoadingWrapper;
