import Image from 'next/image';
import Button from '@/app/components/Button';

const Page = () => {
  return (
    <div className='wrapper'>
      <div className='container container--grid-2'>
        <div className='column'>
          <h1>About us</h1>
          <div className='column column--padding'>
            <p>
              Established in the heart of Darwin, our chambers bring together
              the Northern Territory's most promising legal talent. We are
              committed to delivering exceptional advocacy and client service in
              the field of criminal law.
            </p>
            <p>
              Our team of barristers combines fresh perspectives with a deep
              respect for legal tradition, offering a dynamic approach to
              criminal defence. We leverage our collective expertise to navigate
              the unique challenges presented by the Territory's legal
              landscape.
            </p>
            <p>
              As the newest criminal barrister chambers in the Northern
              Territory, we are dedicated to fostering innovation in legal
              practice while upholding the highest ethical standards. Our goal
              is to set a new benchmark for criminal advocacy in the region.
            </p>
            <p>
              Our chambers proudly houses a diverse team of experienced criminal
              law barristers, led by our permanent members and supported by a
              roster of distinguished visiting counsel. We also maintain strong
              partnerships with respected chambers across Australia, enhancing
              our capacity to provide comprehensive legal services. For detailed
              profiles of our members and to explore our partner chambers,
              please click on the names below.
            </p>
            <Button text='Meet our members' href='/members' />
          </div>
        </div>
        <div className='column-image'>
          <Image fill src='/blocktop.jpg' alt='Main image' objectFit='cover' />
        </div>
      </div>
    </div>
  );
};

export default Page;
