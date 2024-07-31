import Image from 'next/image';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';

import HomeAnimation from '@/app/animations/HomeAnimation';
import ClientLoadingWrapper from '@/app/components/loading/ClientLoadingWrapper';

import { sanityFetch } from '@/sanity/lib/fetch';
import { INTRO_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';

const Home = async () => {
  const [navSquareData, introData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
    sanityFetch({ query: INTRO_QUERY }),
  ]);

  const portableComponents = {
    block: {
      normal: ({ children }) => {
        if (
          children.length === 0 ||
          (children.length === 1 && children[0] === '')
        ) {
          return <br />;
        }
        return <h1>{children}</h1>;
      },
    },
  };

  return (
    <>
      <Head>
        <link rel='preload' href='/blockmain.jpg' as='image' />
        <link rel='preload' href='/blockbottom.jpg' as='image' />
        <link rel='preload' href='/blocktop.jpg' as='image' />
        <link rel='preload' href='/logo-white.svg' as='image' />
      </Head>
      <ClientLoadingWrapper>
        <HomeAnimation navSquareData={navSquareData}>
          <div className='home-grid__main__logo'>
            <Image fill src='/logo-white.svg' alt='Mindil Chambers' priority />
          </div>
          <div className='home-grid__main__content'>
            <PortableText
              value={introData.intro}
              components={portableComponents}
            />
          </div>
        </HomeAnimation>
      </ClientLoadingWrapper>
    </>
  );
};

export default Home;
