'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import HomeNav from '@/app/components/homenav/HomeNav';
import {
  mainVariants,
  topNavVariants,
  contentVariants,
} from '@/app/animations/homeVariants';
import Footer from '@/app/components/footer/Footer';

const HomeAnimation = ({ children, navSquareData, globalData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
          <Footer globalData={globalData} variant='home' />
        </div>
      )}
    </AnimatePresence>
  );
};
export default HomeAnimation;
