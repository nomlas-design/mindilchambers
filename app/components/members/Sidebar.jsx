'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  topSideVariants,
  bottomSideVariants,
  middleSideVariants,
} from '@/app/animations/membersVariants';

const Sidebar = ({ data }) => {
  return (
    <div className='carousel__sidebar'>
      <AnimatePresence mode='wait'>
        <h1>
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={topSideVariants}
            className='carousel__sidebar__title'
          >
            Our
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={middleSideVariants}
          >
            Members
          </motion.div>
        </h1>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.h2
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={bottomSideVariants}
        >
          {data?.members}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
