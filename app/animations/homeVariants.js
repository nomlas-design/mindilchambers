export const mainVariants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 },
  },
};

export const topNavVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 },
  },
};

export const bottomNavVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.6 },
  },
};

export const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 1.5 },
  },
};
