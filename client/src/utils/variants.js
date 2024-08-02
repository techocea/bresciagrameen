export const LoyaltyCardTextVariants = {
  hidden: {
    opacity: 0,
    x: -400,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.05,
    },
  },
};

export const LoyaltyCardVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.05,
    },
  },
};

export const FadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
      delay: 0.5,
    },
  },
};
