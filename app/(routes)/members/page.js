import MemberWrapper from '@/app/components/members/MemberWrapper';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Suspense } from 'react';

export const metadata = {
  title: 'Our Members | Mindil Chambers',
  description:
    'Our members predominantly practice in criminal law as well as a range of other areas of public and private law.',
  metadataBase: new URL('https://mindilchambers.com.au'),
  alternates: {
    canonical: '/our-members',
  },
  openGraph: {
    title: 'Our Members | Mindil Chambers',
    description:
      'Our members predominantly practice in criminal law as well as a range of other areas of public and private law.',
    url: 'https://mindilchambers.com.au/our-members',
    siteName: 'Mindil Chambers',
    images: [
      {
        url: '/metadata/og.png',
        width: 1200,
        height: 630,
        alt: 'Mindil Chambers Members',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Members | Mindil Chambers',
    description:
      'Our members predominantly practice in criminal law as well as a range of other areas of public and private law.',
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

const MembersPage = async () => {
  const [membersData, navSquareData] = await Promise.all([
    sanityFetch({ query: MEMBERS_QUERY }),
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  return (
    <Suspense>
      <MemberWrapper members={membersData} navSquareData={navSquareData} />
    </Suspense>
  );
};

export default MembersPage;
