import Link from 'next/link';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { menuItemVariants } from '@/app/animations/menuVariants';
import { useRef, useState, useEffect } from 'react';

const MenuLink = ({ href, text, index, onMenuToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const classes = clsx({
    nav__link: true,
    'nav__link--active': isHovered,
  });

  return (
    <motion.div variants={menuItemVariants} custom={index}>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onMenuToggle()}
        className={classes}
        href={href}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default MenuLink;
