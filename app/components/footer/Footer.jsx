'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
        {/* <p className='footer__content__text'>
          We take pride in providing fierce representation. We pursue
          individualised justice for our clients as well as litigation with
          broader systemic implications.
        </p> */}
        {/* <div className='footer__content__separator'>
          <Image
            fill
            src='logos/logo_single.svg'
            alt='Mindil Chambers'
            priority
          />
        </div> */}
        <p>{globalData.acknowledgmentOfCountry}</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
