import { useState, useEffect } from 'react';
import CSSBackgroundPreloader from '@/app/components/CSSBackgroundPreloader';
import clsx from 'clsx';

const MenuButton = ({ menuOpen, onMenuToggle }) => {
  const [menuText, setMenuText] = useState('Menu');

  useEffect(() => {
    menuOpen ? setMenuText('Close') : setMenuText('Menu');
  }, [menuOpen]);

  const classes = {
    open: clsx({
      'button-menu__open': true,
      'button-menu__open--active': menuOpen,
    }),
  };

  const handleClick = () => {
    menuOpen ? onMenuToggle(false) : onMenuToggle(true);
  };

  return (
    <>
      <CSSBackgroundPreloader src='/icons/icon__menuclose.svg' />
      <button className='button-menu' onClick={handleClick}>
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
