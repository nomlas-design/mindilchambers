import Link from 'next/link';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { menuItemVariants } from '@/app/animations/menuVariants';
import { useRef, useState, useEffect } from 'react';

const MenuLink = ({ href, text, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const classes = clsx({
    nav__link: true,
    'nav__link--active': isHovered,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const moveX = useTransform(springX, [-10, 20], [-5, 5]);
  const moveY = useTransform(springY, [-10, 20], [-5, 5]);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (event) => {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      x.set(distanceX);
      y.set(distanceY);
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, x, y]);

  return (
    <motion.div
      ref={ref}
      variants={menuItemVariants}
      custom={index}
      initial='hidden'
      animate='visible'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ position: 'relative' }}
    >
      <Link className={classes} href={href}>
        <motion.span
          style={{
            display: 'inline-block',
            x: moveX,
            y: moveY,
          }}
        >
          {text}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default MenuLink;
