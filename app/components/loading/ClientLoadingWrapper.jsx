'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/app/components/loading/LoadingScreen';

const ClientLoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default ClientLoadingWrapper;
