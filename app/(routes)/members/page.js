import MemberWrapper from '@/app/components/members/MemberWrapper';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Suspense } from 'react';

const MembersPage = async () => {
  const [membersData, navSquareData] = await Promise.all([
    sanityFetch({ query: MEMBERS_QUERY }),
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  const duplicatedMembers = Array.from({ length: 8 }, (_, index) => {
    const originalMember = membersData[0];
    return {
      ...originalMember,
      id: `${originalMember.id}_${index + 1}`,
      name: `${originalMember.name} ${index + 1}`,
      slug: `${originalMember.slug}_${index + 1}`,
    };
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemberWrapper
        members={duplicatedMembers}
        navSquareData={navSquareData}
      />
    </Suspense>
  );
};

export default MembersPage;
