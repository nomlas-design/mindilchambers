import { NAV_SQUARE_QUERY, GLOBAL_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import ContactAnimation from '@/app/animations/ContactAnimation';

const Contact = async () => {
  const [navSquareData, globalData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
    sanityFetch({ query: GLOBAL_QUERY }),
  ]);

  return (
    <div className='wrapper wrapper--contact'>
      <div className='container container--contact'>
        <ContactAnimation
          navSquareData={navSquareData}
          globalData={globalData}
        />
      </div>
    </div>
  );
};

export default Contact;
