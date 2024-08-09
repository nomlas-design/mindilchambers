import MemberPage from '@/app/components/members/MemberPage';
import { sanityFetch } from '@/sanity/lib/fetch';
import { MEMBER_BY_SLUG_QUERY, MEMBERS_QUERY } from '@/sanity/lib/queries';

export default async function Member({ params }) {
  const member = await sanityFetch({
    query: MEMBER_BY_SLUG_QUERY,
    params: { slug: params.name },
  });

  console.log('Fetched member:', member);

  if (!member) {
    return (
      <div className='wrapper wrapper--fh'>
        <div className='container container--404'>
          <div>
            <h1>404</h1>
            <h2>Member not found</h2>
          </div>
        </div>
      </div>
    );
  }

  return <MemberPage member={member} />;
}

export async function generateStaticParams() {
  const membersData = await sanityFetch({ query: MEMBERS_QUERY });
  return membersData.map((member) => ({ name: member.slug }));
}
