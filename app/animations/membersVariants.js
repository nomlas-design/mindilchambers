export const topSideVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    x: -75,
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0 },
  },
};

export const middleSideVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    x: -75,
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
};

export const bottomSideVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    x: -75,
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
  },
};

export const buttonLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 1 },
  },
};

export const buttonRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 1 },
  },
};

export const carouselVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
};

export const rightSideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.5 },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};
export const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

export const gridItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.8,
    },
  },
};
