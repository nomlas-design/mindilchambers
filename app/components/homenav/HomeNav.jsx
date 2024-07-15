import NavSquare from './NavSquare';
import { motion } from 'framer-motion';
import {
  topNavVariants,
  bottomNavVariants,
} from '@/app/animations/homeVariants';

const HomeNav = () => {
  return (
    <nav className='home-grid__nav'>
      <NavSquare
        title='Our Members'
        image='/blocktop.jpg'
        link='/about'
        variant={topNavVariants}
      />
      <NavSquare
        title='Areas of Practice'
        image='/blockbottom.jpg'
        link='/services'
        variant={bottomNavVariants}
      />
    </nav>
  );
};
export default HomeNav;
