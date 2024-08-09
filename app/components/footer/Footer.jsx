'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FancyLink from '@/app/components/links/FancyLink';
import {
  footerNavVariants,
  contentVariants,
} from '@/app/animations/homeVariants';
import { footerMainVariants } from '@/app/animations/menuVariants';
const Footer = ({ variant, globalData }) => {
  return (
    <motion.footer
      initial='hidden'
      animate='visible'
      variants={variant === 'home' ? footerNavVariants : footerMainVariants}
      className={`footer ${variant}`}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={contentVariants}
        className='footer__content'
      >
        <div className='footer__content__country'>
          <PortableText value={globalData?.acknowledgmentOfCountry} />
        </div>
        <div className='footer__content__nav'>
          <div className='footer__content__row'>
            <FancyLink text='Privacy Policy' to='/' />
          </div>
          <span>© {new Date().getFullYear()} Mindil Chambers</span>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
