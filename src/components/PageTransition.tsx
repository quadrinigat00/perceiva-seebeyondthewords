import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN = [0.4, 0, 0.1, 1] as const;

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
    filter: 'blur(14px)',
    scale: 1,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(10px)',
    scale: 0.95,
    transition: {
      duration: 0.45,
      ease: EASE_IN,
    },
  },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  );
}
