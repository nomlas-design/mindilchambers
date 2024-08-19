'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FancyLink from '@/app/components/links/FancyLink';
import ContactForm from '@/app/components/contact/ContactForm';
import {
  topSideVariants,
  bottomSideVariants,
  middleSideVariants,
} from '@/app/animations/membersVariants';

const ContactAnimation = ({ navSquareData, globalData }) => {
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
            {navSquareData?.contact}
          </motion.h2>
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={topSideVariants}
            className='contact-grid__details'
          >
            <div className='contact-grid__location'>
              <div className='contact-grid__location__icon'>
                <Image
                  fill
                  src='/icons/icon__location--dark.svg'
                  alt='Drop Pin'
                />
              </div>
              <div className='contact-grid__location__address'>
                <PortableText value={globalData?.address} />
              </div>
            </div>
            <div className='contact-grid__column'>
              <div className='contact-grid__row'>
                <div className='contact-grid__icon contact-grid__icon--tel'>
                  <Image fill src='/icons/icon__phone--dark.svg' alt='Email' />
                </div>
                <FancyLink
                  text={globalData?.phoneNumber}
                  to={`tel:${globalData?.phoneNumber}`}
                />
              </div>
              <div className='contact-grid__row'>
                <div className='contact-grid__icon'>
                  <Image fill src='/icons/icon__email--dark.svg' alt='Email' />
                </div>
                <FancyLink
                  text={globalData?.email}
                  to={`mailto:${globalData?.email}`}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={bottomSideVariants}
            className='contact-grid__form'
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactAnimation;
