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
        link='/members'
        content={navSquareData?.members}
        variant={topNavVariants}
      />
      <NavSquare
        title='Get in touch'
        image='/blockbottom.jpg'
        link='/services'
        content={navSquareData?.contact}
        variant={bottomNavVariants}
      />
    </>
  );
};

export default HomeNav;
