const MenuOverlay = ({ isOpen, closeMenu }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
      <div className='menu'>
        <div className='menu__item'>Home</div>
        <div className='menu__item'>About</div>
        <div className='menu__item'>Services</div>
        <div className='menu__item'>Contact</div>
      </div>
    </div>
  );
};

export default MenuOverlay;
