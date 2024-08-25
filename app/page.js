import Image from 'next/image';
import PortableTextWrapper from '@/app/components/PortableTextWrapper';
import { Suspense } from 'react';

import HomeAnimation from '@/app/animations/HomeAnimation';
import ClientLoadingWrapper from '@/app/components/loading/ClientLoadingWrapper';
import CSSBackgroundPreloader from '@/app/components/CSSBackgroundPreloader';
import PiwikPageViewTracker from '@/app/components/PiwikPageViewTracker';

import { sanityFetch } from '@/sanity/lib/fetch';
import {
  INTRO_QUERY,
  NAV_SQUARE_QUERY,
  GLOBAL_QUERY,
} from '@/sanity/lib/queries';

export const metadata = {
  title: 'Mindil Chambers | Criminal Barristers',
  description:
    'Mindil Chambers are a list of experienced barristers who specialise in the jurisdictional challenges of the Northern Territory and northern Australia.',
  metadataBase: new URL('https://mindilchambers.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mindil Chambers | Criminal Barristers',
    description:
      'Mindil Chambers are a list of experienced barristers who specialise in the jurisdictional challenges of the Northern Territory and northern Australia.',
    url: 'https://mindilchambers.com.au',
    siteName: 'Mindil Chambers',
    images: [
      {
        url: '/metadata/og.png',
        width: 1200,
        height: 630,
        alt: 'Mindil Chambers',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindil Chambers | Criminal Barristers',
    description:
      'Mindil Chambers are a list of experienced barristers who specialise in the jurisdictional challenges of the Northern Territory and northern Australia.',
    images: ['/metadata/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/metadata/apple.png',
  },
};

const Home = async () => {
  const [navSquareData, introData, globalData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
    sanityFetch({ query: INTRO_QUERY }),
    sanityFetch({ query: GLOBAL_QUERY }),
  ]);

  return (
    <>
      <Suspense>
        <ClientLoadingWrapper key='home-page'>
          <HomeAnimation globalData={globalData} navSquareData={navSquareData}>
            <div className='home-grid__main__logo'>
              <Image
                fill
                src='/logo-white.svg'
                alt='Mindil Chambers'
                priority
              />
            </div>
            <div className='home-grid__main__content'>
              <PortableTextWrapper value={introData.intro} />
            </div>
          </HomeAnimation>
        </ClientLoadingWrapper>
      </Suspense>
      <Suspense>
        <PiwikPageViewTracker />
      </Suspense>
      <CSSBackgroundPreloader src='/menuoverlay.png' />
    </>
  );
};

export default Home;
