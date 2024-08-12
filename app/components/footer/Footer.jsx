'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FancyLink from '@/app/components/links/FancyLink';
import {
  footerNavVariants,
  footerLeftVariants,
  footerRightVariants,
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
      <div className='footer__underlay'>
        <div className='footer__underlay__img footer__underlay__img--left'>
          <Image fill src='/footer_left.png' alt='' layout='fill' />
        </div>

        <div className='footer__underlay__img footer__underlay__img--left'>
          <Image fill src='/footer_right.png' alt='' layout='fill' />
        </div>
      </div>
      <div className='footer__content'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={footerLeftVariants}
          className='footer__content__country'
        >
          <PortableText value={globalData?.acknowledgmentOfCountry} />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={footerRightVariants}
          className='footer__content__nav'
        >
          <div className='footer__content__row'>
            {variant === 'main' && (
              <>
                <FancyLink text='Members' to='/' />
                <FancyLink text='Contact Us' to='/' />
              </>
            )}
            <FancyLink text='Privacy Policy' to='/' />
          </div>
          <span>© {new Date().getFullYear()} Mindil Chambers</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
