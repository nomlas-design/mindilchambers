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
import dynamic from 'next/dynamic';

const HomeAnimation = ({ children, navSquareData }) => {
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
            >
              {children}
            </motion.div>
          </motion.main>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={topNavVariants}
          >
            <HomeNav navSquareData={navSquareData} />
          </motion.div>
          <Footer variant='home' />
        </div>
      )}
    </AnimatePresence>
  );
};
export default HomeAnimation;
