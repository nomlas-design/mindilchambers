export const menuFirstVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 1 },
  },
};

export const menuSecondVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 1 },
  },
};

export const menuItemVariants = {
  hidden: (custom) => ({
    opacity: 0,
    y: -20,
    x: 10,
    rotateX: 15,
    rotateY: -15,
    transition: {
      delay: 0.2 + custom * 0.1,
    },
  }),
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    x: 0,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2 + custom * 0.1,
    },
  }),
};
