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

const MenuOverlay = ({ content }) => {
  const { acknowledgmentOfCountry, address, phoneNumber, email } = content;
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { href: '/members', text: 'Members' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <>
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
          <div>
            <PortableText value={address} />
          </div>
        </div>
        <div className='nav__contact'>
          <div className='nav__contact__row'>
            <div className='nav__contact__icon'>
              <Image fill src='/icons/icon__phone.svg' alt='Email' />
            </div>
            <Button
              text={phoneNumber}
              href={`tel:${phoneNumber}`}
              size='menu'
              type='up'
            />
          </div>
          <div className='nav__contact__row'>
            <div className='nav__contact__icon'>
              <Image fill src='/icons/icon__email.svg' alt='Email' />
            </div>
            <Button
              text='Get in touch'
              href={`mailto:${email}`}
              size='menu'
              type='up'
            />
          </div>
        </div>
      </motion.div>
      <nav className='nav__links'>
        {menuItems.map((item, index) => (
          <MenuLink
            key={item.href}
            href={item.href}
            text={item.text}
            index={index}
          />
        ))}
      </nav>
      <motion.div
        className='nav__footer'
        variants={menuSecondVariants}
        initial='hidden'
        animate='visible'
      >
        <p>{acknowledgmentOfCountry}</p>
        <div className='nav__footer__row'>
          <span>© Mindil Chambers {currentYear}</span>
          <a className='textlink'>Privacy Policy</a>
        </div>
      </motion.div>
    </>
  );
};

export default MenuOverlay;
