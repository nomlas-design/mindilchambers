'use client';
import { motion } from 'framer-motion';
import { contentVariants } from '@/app/animations/homeVariants';
import Button from '@/app/components/Button.jsx';
const Footer = ({ variant }) => {
  return (
    <motion.footer
      initial='hidden'
      animate='visible'
      variants={contentVariants}
      className={`footer ${variant}`}
    >
      <div className='footer__content'>
        <div className='footer__content__country'>
          <p>
            We acknowledge the Larrakia people as the Traditional Custodians of
            the land on which Mindil Chambers operates. We pay our respects to
            their Elders past and present and remain committed to working
            together to care for this land.
          </p>
        </div>
      </div>
      {/* <div className='footer__content'>

      </div> */}

      <div className='footer__content footer__content--columns'>
        <div className='footer__content__column'>
          <Button
            text='Get in touch'
            colour='white'
            size='static'
            href='/contact'
            type='up'
          />
        </div>
        {/* <div className='footer__content__details'>
          <a className='link' href='tel:+614 567 890'>
            +614 567 890
          </a>
          <span>
            123 Smith Street, <br />
            The Gardens,
            <br />
            Mindil Beach, NT 0820
          </span>
        </div> */}
      </div>
    </motion.footer>
  );
};

export default Footer;
