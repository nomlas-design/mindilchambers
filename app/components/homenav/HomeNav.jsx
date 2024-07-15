import NavSquare from './NavSquare';
import {
  topNavVariants,
  bottomNavVariants,
} from '@/app/animations/homeVariants';

const HomeNav = ({ navSquareData }) => {
  return (
    <>
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
    </>
  );
};

export default HomeNav;
