import Carousel from '@/app/components/members/Carousel';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';

const Members = async () => {
  const [membersData, navSquareData] = await Promise.all([
    sanityFetch({ query: MEMBERS_QUERY }),
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  const duplicatedMembers = Array.from({ length: 10 }, (_, index) => {
    const originalMember = membersData[0];
    return {
      ...originalMember,
      _id: `${originalMember._id}_${index + 1}`,
      name: `${originalMember.name} ${index + 1}`,
    };
  });

  return (
    <div className='wrapper wrapper--carousel'>
      <div className='container container--carousel'>
        <div className='carousel__sidebar'>
          <h1>
            <span> Our</span>
            <br />
            Members
          </h1>
          <h2>{navSquareData?.members}</h2>
        </div>
        <Carousel members={duplicatedMembers} />
      </div>
    </div>
  );
};

export default Members;
