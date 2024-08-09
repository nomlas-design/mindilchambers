import MemberWrapper from '@/app/components/members/MemberWrapper';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';

const Members = async () => {
  const [membersData, navSquareData] = await Promise.all([
    sanityFetch({ query: MEMBERS_QUERY }),
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  const duplicatedMembers = Array.from({ length: 8 }, (_, index) => {
    const originalMember = membersData[0];
    return {
      ...originalMember,
      _id: `${originalMember._id}_${index + 1}`,
      name: `${originalMember.name} ${index + 1}`,
    };
  });

  return (
    <MemberWrapper members={duplicatedMembers} navSquareData={navSquareData} />
  );
};

export default Members;
