import MemberWrapper from '@/app/components/members/MemberWrapper';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Suspense } from 'react';

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
