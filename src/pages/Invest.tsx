import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Invest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="font-mono-accent text-xs text-zinc-500 tracking-ultra-wide uppercase">
            Strategic Proposal
          </span>
        </motion.div>

        {/* Main header */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-ultra-tight leading-[1.1] text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
        >
          True innovation isn't just about building technology — it is about restoring
          autonomy.
        </motion.h1>

        {/* Glassmorphic frame with investor text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel glass-panel-hover mt-12 p-8 md:p-12 lg:p-14 relative"
        >
          {/* Accent geometric lines */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-base md:text-lg text-zinc-300 leading-[1.8] tracking-wide"
          >
            Perceiva is resolving a critical societal infrastructural gap using advanced
            computer vision. We are scaling our software architecture to ensure seamless
            compatibility across low-end mobile devices and web frameworks, ensuring
            accessibility for all users. We are looking for strategic institutional
            partners and investors who understand that human dignity is a high-value
            vertical. Partner with us to scale our deep learning models, deploy native
            integrations, and establish the next framework of human connection.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              <div>
                <div className="font-mono-accent text-xs text-zinc-500 uppercase tracking-wide">
                  Sector
                </div>
                <div className="font-display text-sm text-zinc-200 mt-1">Assistive Tech</div>
              </div>
              <div>
                <div className="font-mono-accent text-xs text-zinc-500 uppercase tracking-wide">
                  Stage
                </div>
                <div className="font-display text-sm text-zinc-200 mt-1">Pre-Seed</div>
              </div>
              <div>
                <div className="font-mono-accent text-xs text-zinc-500 uppercase tracking-wide">
                  Vertical
                </div>
                <div className="font-display text-sm text-zinc-200 mt-1">CV / AI</div>
              </div>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-3 text-white"
            >
              <span className="font-display text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                Partner With Us
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
