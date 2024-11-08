import Nav from '@/app/components/nav/Nav';
import Footer from '@/app/components/footer/Footer';
import PiwikPageViewTracker from '@/app/components/PiwikPageViewTracker';
import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { GLOBAL_QUERY } from '@/sanity/lib/queries';

export default async function RoutesLayout({ children }) {
  const [globalData] = await Promise.all([
    sanityFetch({ query: GLOBAL_QUERY }),
  ]);
  return (
    <>
      <Nav content={globalData} />
      <main className='main'>{children}</main>
      <Footer globalData={globalData} variant='main' />
      <div id='modal-root' />
      <Suspense>
        <PiwikPageViewTracker />
      </Suspense>
    </>
  );
}
