import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-12">
      {/* Title — dramatic scale + fade spring reveal */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.15, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 1.2, delay: 0.2 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-ultra-tight leading-[1.05] text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
      >
        Welcome to Perceiva
      </motion.h1>

      {/* Tagline — delayed horizontal drift from left */}
      <motion.p
        initial={{ opacity: 0, x: -80, filter: 'blur(8px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
        className="mt-8 font-body text-lg md:text-xl text-zinc-400 font-light tracking-wide text-center"
      >
        See beyond the words
      </motion.p>

      {/* Explore Ecosystem link */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, ease: EASE }}
        onClick={() => navigate('/about')}
        className="group mt-16 flex items-center gap-3 text-white"
      >
        <span className="font-display text-base font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">Explore Ecosystem</span>
        <span className="relative w-12 h-px bg-white/40 overflow-hidden">
          <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </span>
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      </motion.button>
    </div>
  );
}
