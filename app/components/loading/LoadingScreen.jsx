import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <div className='loading-screen__content'>
        <Image fill src='/logo-white.svg' alt='Loading...' />
      </div>
    </div>
  );
};

export default LoadingScreen;
