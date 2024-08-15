import CarouselSingle from './CarouselSingle';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  carouselVariants,
  rightSideVariants,
  buttonLeftVariants,
  buttonRightVariants,
} from '@/app/animations/membersVariants';

const Carousel = ({ members, onMemberClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide < members.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleMemberClick = (member) => {
    onMemberClick(member);
  };

  return (
    <div className='carousel__wrapper'>
      <AnimatePresence>
        <motion.div
          className='carousel'
          initial='hidden'
          animate='visible'
          variants={carouselVariants}
        >
          {members.map((member, index) => {
            return (
              <CarouselSingle
                activeSlide={activeSlide}
                index={index}
                key={member._id}
                member={member}
                onMemberClick={() => handleMemberClick(member)}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
      <div className='carousel__nav'>
        <div className='carousel__nav__buttons'>
          <AnimatePresence>
            <motion.button
              initial='hidden'
              animate='visible'
              variants={buttonLeftVariants}
              className='btn'
              onClick={handlePrev}
              disabled={activeSlide === 0}
            >
              <div className='btn__icon'>
                <svg
                  id='icon__arrowleft'
                  data-name='Icon Arrow Left'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 12.77 11.05'
                >
                  <g>
                    <polygon points='5.53 0 6.23 .71 1.92 5.02 12.77 5.02 12.77 6.02 1.92 6.02 6.23 10.34 5.53 11.05 0 5.52 5.53 0' />
                  </g>
                </svg>
              </div>
              Previous
            </motion.button>
          </AnimatePresence>
          <AnimatePresence>
            <motion.button
              initial='hidden'
              animate='visible'
              variants={buttonRightVariants}
              className='btn'
              onClick={handleNext}
              disabled={activeSlide === members.length - 1}
            >
              Next
              <div className='btn__icon'>
                <svg
                  id='icon__arrowright'
                  data-name='Icon Arrow Right'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 12.77 11.05'
                >
                  <g>
                    <polygon points='7.24 0 6.54 .71 10.85 5.02 0 5.02 0 6.02 10.85 6.02 6.54 10.34 7.24 11.05 12.77 5.52 7.24 0' />
                  </g>
                </svg>
              </div>
            </motion.button>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={rightSideVariants}
            className='carousel__nav__count'
          >
            <span className='count--active'>{activeSlide + 1}</span>
            <span> / {members.length}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
