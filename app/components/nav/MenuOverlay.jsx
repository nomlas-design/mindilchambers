import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/Button';
import MenuLink from './MenuLink';
import {
  menuFirstVariants,
  menuSecondVariants,
  menuContainerVariants,
} from '@/app/animations/menuVariants';
import FancyLink from '../links/FancyLink';

const MenuOverlay = ({ content }) => {
  const { acknowledgmentOfCountry, address, phoneNumber, email } = content;
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { href: '/members', text: 'Members' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <div className='nav__inner'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={menuFirstVariants}
        className='nav__container'
      >
        <div className='nav__location'>
          <div className='nav__container__icon'>
            <Image fill src='/icons/icon__location.svg' alt='Drop Pin' />
          </div>
          <div className='nav__location__address'>
            <PortableText value={address} />
          </div>
        </div>
        <div className='nav__contact'>
          <div className='nav__contact__row'>
            <div className='nav__contact__icon nav__contact__icon--tel'>
              <Image fill src='/icons/icon__phone.svg' alt='Email' />
            </div>
            <FancyLink text={phoneNumber} to={`tel:${phoneNumber}`} />
          </div>
          <div className='nav__contact__row'>
            <div className='nav__contact__icon'>
              <Image fill src='/icons/icon__email.svg' alt='Email' />
            </div>
            <FancyLink text={email} to={`mailto:${email}`} />
          </div>
        </div>
      </motion.div>
      <motion.nav className='nav__links' initial='hidden' animate='visible'>
        {menuItems.map((item, index) => (
          <MenuLink
            key={item.href}
            href={item.href}
            text={item.text}
            index={index}
          />
        ))}
      </motion.nav>
      <motion.div
        className='nav__footer'
        variants={menuSecondVariants}
        initial='hidden'
        animate='visible'
      >
        <PortableText content={acknowledgmentOfCountry} />
        <div className='nav__footer__row'>
          <span>© Mindil Chambers {currentYear}</span>
          <a className='textlink'>Privacy Policy</a>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuOverlay;
