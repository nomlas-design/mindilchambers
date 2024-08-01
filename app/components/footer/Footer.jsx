'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FancyLink from '@/app/components/links/FancyLink';
import {
  contentVariants,
  footerNavVariants,
} from '@/app/animations/homeVariants';
const Footer = ({ variant, globalData }) => {
  return (
    <motion.footer
      initial='hidden'
      animate='visible'
      variants={variant === 'home' ? footerNavVariants : contentVariants}
      className={`footer ${variant}`}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={contentVariants}
        className='footer__content'
      >
        <PortableText value={globalData.acknowledgmentOfCountry} />
        <div className='footer__content__nav'>
          <div className='footer__content__row'>
            <div className='footer__content__nav__img'>
              <Image
                fill
                src='logos/logo_single.svg'
                alt='Mindil Chambers'
                priority
              />
            </div>
            <FancyLink text='Privacy Policy' to='/' />
          </div>
          <span>© {new Date().getFullYear()} Mindil Chambers</span>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
