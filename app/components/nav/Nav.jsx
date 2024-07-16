'use client';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { useState } from 'react';
import clsx from 'clsx';
import MenuOverlay from './MenuOverlay';
import { AnimatePresence } from 'framer-motion';

const Nav = ({ content }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className={classes.nav}>
      <div className={classes.navWrapper}>
        <div className={classes.navBar}>
          <a href='/' className={classes.navLogo}>
            <Image fill src='/logo-white.svg' alt='Mindil Chambers' priority />
          </a>
          <MenuButton menuOpen={menuOpen} onMenuToggle={onMenuToggle} />
        </div>
        {menuOpen && (
          <AnimatePresence>
            <MenuOverlay content={content} />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Nav;
