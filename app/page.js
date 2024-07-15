import Image from 'next/image';
import { Suspense } from 'react';

import HomeAnimation from '@/app/animations/HomeAnimation';
import Button from '@/app/components/Button';
import LoadingScreen from '@/app/components/loading/LoadingScreen';

import { sanityFetch } from '@/sanity/lib/fetch';
import { INTRO_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';

const Home = async () => {
  const [navSquareData, introData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
    sanityFetch({ query: INTRO_QUERY }),
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadingScreen />
      <HomeAnimation navSquareData={navSquareData}>
        <div className='home-grid__main__logo'>
          <Image fill src='/logo-white.svg' alt='Mindil Chambers' priority />
        </div>
        <div className='home-grid__main__content'>
          <h1>{introData?.intro || 'Welcome to Mindil Chambers'}</h1>
          <Button
            text='Find out more'
            colour='white'
            size='static'
            href='/about'
          />
        </div>
      </HomeAnimation>
    </Suspense>
  );
};

export default Home;
