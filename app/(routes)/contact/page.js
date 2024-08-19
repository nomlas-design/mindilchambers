import { NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import ContactAnimation from '@/app/animations/ContactAnimation';

const Contact = async () => {
  const [navSquareData] = await Promise.all([
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  return (
    <div className='wrapper wrapper--contact'>
      <div className='container container--contact'>
        <ContactAnimation query={navSquareData} />
      </div>
    </div>
  );
};

export default Contact;
