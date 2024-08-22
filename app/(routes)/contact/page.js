import { NAV_SQUARE_QUERY, GLOBAL_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import ContactAnimation from '@/app/animations/ContactAnimation';

export const metadata = {
  title: 'Contact | Mindil Chambers',
  description:
    'For enquiries about legal representation, a current case, or any other matters.',
  metadataBase: new URL('https://mindilchambers.com.au'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Mindil Chambers',
    description:
      'For enquiries about legal representation, a current case, or any other matters.',
    url: 'https://mindilchambers.com.au/contact',
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
    title: 'Contact | Mindil Chambers',
    description:
      'For enquiries about legal representation, a current case, or any other matters.',
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
