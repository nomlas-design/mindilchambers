import Image from 'next/image';

const CarouselSingle = ({ member, index, activeSlide }) => {
  const activeIndex = index - activeSlide;
  const isActive = activeIndex >= 0 && activeIndex < 4;
  const wasRecentlyActive = activeIndex >= -1 && activeIndex < 5;

  const className = `carousel__slide carousel__slide--${index} ${
    isActive
      ? `carousel__slide--active carousel__slide--active-${activeIndex}`
      : wasRecentlyActive
        ? 'carousel__slide--transitioning-out'
        : ''
  }`;
  return (
    <div className={className}>
      {' '}
      <div className='carousel__slide__inner'>
        <div className='carousel__slide__image'>
          <Image src={member.portraitUrl} alt={member.name} fill />
        </div>
        <div className='carousel__slide__content'>
          <h3>{member.name}</h3>
          <p>{member.seniority}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSingle;
