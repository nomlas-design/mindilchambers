import Image from 'next/image';
import { motion } from 'framer-motion';

const CarouselSingle = ({
  member,
  index,
  activeSlide,
  onMemberClick,
  onSlideChange,
}) => {
  const activeIndex = index - activeSlide;
  const isActive = activeIndex >= 0 && activeIndex < 4;
  const isTransitioningOut = activeIndex === 4;
  const isTransitioningIn = activeIndex === -1;
  let className = `carousel__slide carousel__slide--${index} ${
    isActive
      ? `carousel__slide--active carousel__slide--active-${activeIndex}`
      : isTransitioningIn
        ? 'carousel__slide--transitioning-in'
        : ''
  }`;

  isActive &&
    isTransitioningOut &&
    (className += ' carousel__slide--transitioning-out');

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleMemberClick = () => {
    if (activeIndex === 0) {
      onMemberClick(member);
    } else {
      onSlideChange(index);
    }
  };

  return (
    <div className={className} onClick={handleMemberClick}>
      <motion.div
        className='carousel__slide__inner'
        initial='hidden'
        animate='visible'
        variants={slideVariants}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className='carousel__slide__image'>
          <Image
            src={member.portraitUrl || '/portrait-placeholder.png'}
            alt={member.name || 'Member portrait'}
            fill
          />
        </div>
        <div className='carousel__slide__content'>
          <h3>{member.name}</h3>
          <p>{member.seniority}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CarouselSingle;
