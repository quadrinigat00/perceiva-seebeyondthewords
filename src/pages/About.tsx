import { motion } from 'framer-motion';

const leftVariant = {
  hidden: { opacity: 0, x: -60, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 60, filter: 'blur(10px)', scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left typography */}
        <motion.div variants={leftVariant} initial="hidden" animate="show">
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-ultra-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
          >
            Hey, I am
            <br />
            Nigat Quadri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 font-mono-accent text-sm md:text-base text-zinc-500 tracking-wide uppercase"
          >
            A Computer Science Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 font-body text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl tracking-wide"
          >
            I engineer at the intersection of computer vision and human dignity.
            Perceiva is the result of a single conviction — that communication is a
            fundamental human right, not a technical privilege.
          </motion.p>
        </motion.div>

        {/* Right glassmorphic card */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate="show"
          className="glass-panel glass-panel-hover p-8 md:p-10 lg:p-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span className="font-mono-accent text-xs text-accent-white-faint tracking-ultra-wide uppercase">
              Mandate
            </span>
          </div>

          <p className="font-body text-base md:text-lg text-zinc-300 leading-relaxed tracking-wide">
            I lead with execution. I ship what I promise, when I promise it, against
            people twice my experience — because visionary challenges do not wait for
            permission. Our mandate is direct: rebuild the assistive technology
            landscape from the ground up, and give complete autonomy back to the
            millions excluded from it.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10">
            <span className="font-mono-accent text-xs text-zinc-500 tracking-wide">
              Computer Vision <span className="text-accent-white-faint mx-2">•</span> Voice Synthesis
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
