'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from '@/app/components/contact/ContactForm';
import {
  mainVariants,
  topNavVariants,
  contentVariants,
} from '@/app/animations/homeVariants';

const ContactAnimation = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <div className='contact-grid'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={mainVariants}
            className='contact-grid__main'
          >
            <h1>
              <motion.div
                initial='hidden'
                animate='visible'
                exit='exit'
                className='carousel__sidebar__title'
              >
                Contact
              </motion.div>
              <motion.div initial='hidden' animate='visible' exit='exit'>
                Us
              </motion.div>
            </h1>
            <motion.h2 initial='hidden' animate='visible' exit='exit'>
              Test
            </motion.h2>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={topNavVariants}
            className='contact-grid__form'
          >
            <ContactForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactAnimation;
