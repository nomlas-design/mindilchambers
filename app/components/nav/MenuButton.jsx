import Image from 'next/image';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import MenuOverlay from './MenuOverlay';

const MenuButton = ({ menuOpen, onMenuToggle }) => {
  const [menuText, setMenuText] = useState('Menu');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    menuOpen ? setMenuText('Close') : setMenuText('Menu');
  }, [menuOpen]);

  const classes = {
    open: clsx({
      'button-menu__open': true,
      'button-menu__open--active': menuOpen,
    }),
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (!menuOpen) {
      onMenuToggle(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    if (menuOpen) {
      onMenuToggle(false);
    } else {
      onMenuToggle(true);
    }
  };

  return (
    <>
      <button
        className='button-menu'
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className='button-menu__text' data-text={menuText}>
          {menuText}
        </span>
        <div className={classes.open}>
          <div className='button-menu__open__bar' />
          <div className='button-menu__open__bar button-menu__open__bar-bottom' />
        </div>
      </button>
    </>
  );
};

export default MenuButton;
