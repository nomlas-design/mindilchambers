'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import HomeNav from '@/app/components/homenav/HomeNav';
import {
  mainVariants,
  topNavVariants,
  contentVariants,
  mainVariantsUnderlay,
} from '@/app/animations/homeVariants';
import Footer from '@/app/components/footer/Footer';

const HomeAnimation = ({ children, navSquareData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <AnimatePresence>
      {isLoaded && (
        <div className='home-grid'>
          <motion.main
            initial='hidden'
            animate='visible'
            variants={mainVariants}
            className='home-grid__main'
          >
            <motion.div
              initial='hidden'
              animate='visible'
              variants={contentVariants}
              className='home-grid__main__inner'
            >
              {children}
            </motion.div>
          </motion.main>
          <motion.nav
            initial='hidden'
            animate='visible'
            variants={topNavVariants}
            className='home-grid__nav'
          >
            <HomeNav navSquareData={navSquareData} />
          </motion.nav>
          <Footer variant='home' />
        </div>
      )}
    </AnimatePresence>
  );
};
export default HomeAnimation;
