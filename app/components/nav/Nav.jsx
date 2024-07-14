'use client';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { useState } from 'react';
import clsx from 'clsx';

const Nav = () => {
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
    navInner: clsx({
      nav__inner: true,
      'nav__inner--open': menuOpen,
    }),
  };

  return (
    <div className={classes.nav}>
      <div className={classes.navInner}>
        <a href='/' className={classes.navLogo}>
          <Image fill src='/logo-white.svg' alt='Mindil Chambers' priority />
        </a>
        <MenuButton menuOpen={menuOpen} onMenuToggle={onMenuToggle} />
      </div>
    </div>
  );
};

export default Nav;
