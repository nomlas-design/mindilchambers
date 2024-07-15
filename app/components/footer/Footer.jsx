'use client';
import { motion } from 'framer-motion';
import { contentVariants } from '@/app/animations/homeVariants';
import Button from '@/app/components/Button.jsx';
const Footer = ({ variant }) => {
  return (
    <footer className={`footer ${variant}`}>
      <div className='footer__content'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={contentVariants}
          className='footer__content__country'
        >
          <p>
            We acknowledge the Larrakia people as the Traditional Custodians of
            the land on which Mindil Chambers operates. We pay our respects to
            their Elders past and present and remain committed to working
            together to care for this land.
          </p>
        </motion.div>
      </div>
      <div className='footer__content footer__content--columns'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={contentVariants}
          className='footer__content__column'
        >
          <Button
            text='Get in touch'
            colour='white'
            size='static'
            href='/contact'
            type='up'
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
