import HomeAnimation from '@/app/animations/HomeAnimation';
import Image from 'next/image';
import Button from '@/app/components/Button';

import Posts from '@/app/components/Posts';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY } from '@/sanity/lib/queries';

const Home = async () => {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <HomeAnimation>
      <div className='home-grid__main__logo'>
        <Image fill src='/logo-white.svg' alt='Mindil Chambers' />
      </div>
      <div className='home-grid__main__content'>
        <h1>
          We are a highly specialised list of criminal barristers experienced in
          the jurisdictional challenges of the Northern Territory and northern
          Australia.
        </h1>
        <Button
          text='Find out more'
          colour='white'
          size='static'
          href='/about'
        />
      </div>
      <Posts posts={posts} />
    </HomeAnimation>
  );
};

export default Home;
