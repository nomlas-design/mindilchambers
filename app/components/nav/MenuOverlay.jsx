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

const MenuOverlay = ({ content, onMenuToggle }) => {
  const { acknowledgmentOfCountry, address, phoneNumber, email } = content;
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { href: '/', text: 'Home' },
    { href: '/members', text: 'Members' },
    { href: '/contact', text: 'Contact' },
  ];

  console.log(content);

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
        <div className='nav__contact__column'>
          <div className='nav__contact__row nav__contact__row--top'>
            <div className='nav__contact__icon nav__contact__icon--tel'>
              <Image fill src='/icons/icon__phone.svg' alt='Email' />
            </div>
            <FancyLink text={phoneNumber} to={`tel:${phoneNumber}`} />
          </div>
          <div className='nav__contact__row nav__contact__row--bot'>
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
            onMenuToggle={onMenuToggle}
          />
        ))}
      </motion.nav>
      <motion.div
        className='footer footer--nav'
        variants={menuSecondVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='footer__content'>
          <div className='footer__content__country'>
            <PortableText value={acknowledgmentOfCountry} />
          </div>
          <div className='footer__content__nav'>
            <div className='footer__content__row'>
              <span></span>
              <span>© Mindil Chambers {currentYear}</span>
            </div>
            <div className='footer__content__row'>
              <div>
                <span>Designed & developed by </span>
                <FancyLink
                  text='Nomlas Design'
                  to='https://nomlas.design/'
                  external={true}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuOverlay;
