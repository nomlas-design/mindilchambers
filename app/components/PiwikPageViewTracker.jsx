'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';

export default function PiwikPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { PageViews } = usePiwikPro();
  const [previousPath, setPreviousPath] = useState('');

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (url !== previousPath) {
      PageViews.trackPageView(url);
      setPreviousPath(url);
    }
  }, [pathname, searchParams, PageViews, previousPath]);

  return null;
}
