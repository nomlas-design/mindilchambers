import { GLOBAL_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import ContactAnimation from '@/app//animations/ContactAnimation';

const Contact = async () => {
  // const globalData = await Promise.all([sanityFetch({ query: GLOBAL_QUERY })]);

  return (
    <div className='wrapper wrapper--contact'>
      <div className='container container--contact'>
        <ContactAnimation>
          <div className='contact-grid__main__content'>
            <h1>Main Area</h1>
          </div>
        </ContactAnimation>
      </div>
    </div>
  );
};

export default Contact;
