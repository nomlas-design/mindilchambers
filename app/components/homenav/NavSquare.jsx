'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { contentVariants } from '@/app/animations/homeVariants';

const NavSquare = ({ title, image, link = '/', content, variant }) => {
  const containerRef = useRef(null);
  const [bgX, setBgX] = useState('0%');
  const [bgY, setBgY] = useState('0%');

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const animationConfig = {
    type: 'spring',
    stiffness: 100,
    damping: 30,
  };

  const springX = useSpring(mouseX, animationConfig);
  const springY = useSpring(mouseY, animationConfig);

  const backgroundX = useTransform(springX, [0, 1], ['-3%', '3%']);
  const backgroundY = useTransform(springY, [0, 1], ['-3%', '3%']);

  useMotionValueEvent(backgroundX, 'change', (latest) => {
    setBgX(latest);
  });

  useMotionValueEvent(backgroundY, 'change', (latest) => {
    setBgY(latest);
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.a
      ref={containerRef}
      className='navsquare'
      href={link}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      whileHover='hover'
      initial='hidden'
      animate='visible'
      variants={variant}
    >
      <motion.div
        className='navsquare__bg'
        style={{
          backgroundImage: `url(${image})`,
          translateX: `${bgX}`,
          translateY: `${bgY}`,
        }}
        variants={{
          hover: { scale: 1.05 },
        }}
        transition={{
          scale: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
      />
      <motion.div
        className='navsquare__overlay'
        initial='hidden'
        animate='visible'
        variants={contentVariants}
      >
        <span className='navsquare__text'>{title}</span>
        {content && (
          <div className='navsquare__info'>
            <span>{content}</span>
          </div>
        )}
      </motion.div>
      <motion.div
        className='navsquare__arrow'
        initial='hidden'
        animate='visible'
        variants={contentVariants}
      >
        <Image fill src='icons/icon__arrowup.svg' alt='' />
      </motion.div>
    </motion.a>
  );
};

export default NavSquare;
