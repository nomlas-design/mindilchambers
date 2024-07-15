import NavSquare from './NavSquare';
import {
  topNavVariants,
  bottomNavVariants,
} from '@/app/animations/homeVariants';

const HomeNav = ({ navSquareData }) => {
  return (
    <nav className='home-grid__nav'>
      <NavSquare
        title='Our Members'
        image='/blocktop.jpg'
        link='/about'
        content={navSquareData?.members}
        variant={topNavVariants}
      />
      <NavSquare
        title='Areas of Practice'
        image='/blockbottom.jpg'
        link='/services'
        content={navSquareData?.practices}
        variant={bottomNavVariants}
      />
    </nav>
  );
};

export default HomeNav;
