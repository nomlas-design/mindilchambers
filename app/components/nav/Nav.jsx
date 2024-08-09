'use client';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import MenuOverlay from './MenuOverlay';
import { AnimatePresence, motion } from 'framer-motion';
import { navBarVariants } from '@/app/animations/menuVariants';

const Nav = ({ content }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const classes = {
    nav: clsx({
      nav: true,
      'nav--open': menuOpen,
    }),
    navLogo: clsx({
      nav__logo: true,
      'nav__logo--open': menuOpen,
    }),
    navBar: clsx({
      nav__bar: true,
      'nav__bar--open': menuOpen,
    }),
    navWrapper: clsx({
      nav__wrapper: true,
      'nav__wrapper--open': menuOpen,
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={navBarVariants}
        className={classes.nav}
      >
        <div className={classes.navWrapper}>
          <div className={classes.navBar}>
            <a href='/' className={classes.navLogo}>
              <Image
                fill
                src='/logo-white.svg'
                alt='Mindil Chambers'
                priority
              />
            </a>
            <MenuButton menuOpen={menuOpen} onMenuToggle={onMenuToggle} />
          </div>
          {menuOpen && (
            <AnimatePresence>
              <MenuOverlay onMenuToggle={onMenuToggle} content={content} />
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
