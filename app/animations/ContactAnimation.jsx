'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from '@/app/components/contact/ContactForm';
import {
  topSideVariants,
  bottomSideVariants,
  middleSideVariants,
} from '@/app/animations/membersVariants';

const ContactAnimation = ({ query }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='contact-grid'>
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
              Contact
            </motion.div>
            <motion.div
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={middleSideVariants}
            >
              Us
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
            {query?.contact}
          </motion.h2>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isLoaded && (
          <div className='contact-grid__form'>
            <>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={bottomSideVariants}
              >
                <ContactForm />
              </motion.div>
            </>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactAnimation;
