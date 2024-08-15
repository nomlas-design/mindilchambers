import MemberWrapper from '@/app/components/members/MemberWrapper';
import { MEMBERS_QUERY, NAV_SQUARE_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';

export default async function MembersPage() {
  const [members, navSquareData] = await Promise.all([
    sanityFetch({ query: MEMBERS_QUERY }),
    sanityFetch({ query: NAV_SQUARE_QUERY }),
  ]);

  return <MemberWrapper members={members} navSquareData={navSquareData} />;
}
