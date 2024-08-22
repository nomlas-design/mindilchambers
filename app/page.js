import Image from 'next/image';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import { Suspense } from 'react';

import HomeAnimation from '@/app/animations/HomeAnimation';
import ClientLoadingWrapper from '@/app/components/loading/ClientLoadingWrapper';
import CSSBackgroundPreloader from '@/app/components/CSSBackgroundPreloader';

import { sanityFetch } from '@/sanity/lib/fetch';
import {
  INTRO_QUERY,
  NAV_SQUARE_QUERY,
  GLOBAL_QUERY,
} from '@/sanity/lib/queries';

const Home = async () => {
  const [navSquareData, introData, globalData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
    sanityFetch({ query: INTRO_QUERY }),
    sanityFetch({ query: GLOBAL_QUERY }),
  ]);

  const portableComponents = {
    block: {
      normal: ({ children, index }) => {
        if (children.length === 0) {
          return null;
        }
        if (index === 0) {
          return <h1>{children}</h1>;
        } else {
          return <h2>{children}</h2>;
        }
      },
    },
  };

  return (
    <>
      <Head></Head>
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
              <PortableText
                value={introData.intro}
                components={portableComponents}
              />
            </div>
          </HomeAnimation>
        </ClientLoadingWrapper>
      </Suspense>
      <CSSBackgroundPreloader src='/menuoverlay.png' />
    </>
  );
};

export default Home;
