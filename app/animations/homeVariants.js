export const mainVariants = {
  hidden: { opacity: 1, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0 },
  },
};

export const topNavVariants = {
  hidden: { opacity: 0, y: -45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.2 },
  },
};

export const bottomNavVariants = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.5 },
  },
};

export const footerNavVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
};

export const footerLeftVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.4 },
  },
};

export const footerRightVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.4 },
  },
};

export const contentVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.7 },
  },
};
