import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type Card = {
  num: string;
  label: string;
  title: string;
  accent: string;
  bullets: { heading: string; text: string }[];
};

const cards: Card[] = [
  {
    num: '01',
    label: 'The Problem',
    title: 'Communication Barriers',
    accent: 'rgba(239, 68, 68, 0.5)',
    bullets: [
      {
        heading: 'Systemic Social Isolation',
        text: 'Millions of deaf and mute individuals live inside a massive communication gap engineered by generational isolation, cutting them off from everyday baseline human conversation.',
      },
      {
        heading: 'Institutional Vulnerability',
        text: 'There is a total, critical lack of autonomous interpreters and immediate infrastructure during the highly decisive moments of a person\u2019s life\u2014such as high-stakes professional corporate interviews, critical medical emergencies in hospitals, academic progression in classrooms, and legal proceedings in courts.',
      },
      {
        heading: 'Deficit of Personal Privacy',
        text: 'Traditional manual workarounds and third-party assistance entirely strip away individual autonomy and speech privacy, forcing an entire demographic to remain structurally dependent on temporary human intermediaries.',
      },
    ],
  },
  {
    num: '02',
    label: 'The Idea',
    title: 'Edge Vision Translation',
    accent: 'rgba(34, 211, 238, 0.5)',
    bullets: [
      {
        heading: 'Ubiquitous Zero-Hardware Architecture',
        text: 'Our proprietary software framework runs entirely locally inside standard consumer devices, using only the native embedded smartphone or laptop camera without requiring expensive external wearables or sensors.',
      },
      {
        heading: 'Edge Computer Vision Engine',
        text: 'The system deploys an ultra-fast, local neural network that dynamically maps finger velocities, high-dimensional joint altitudes, and fine spatial micro-gestures directly on the device.',
      },
      {
        heading: 'Instant Offline Speech Synthesis',
        text: 'This real-time gesture coordinate tracking matrix immediately translates complex sign language into crystal-clear text sequences and natural synthesized vocalized speech completely offline, securely, and privately.',
      },
    ],
  },
  {
    num: '03',
    label: 'The Effect',
    title: 'Autonomy Restored',
    accent: 'rgba(74, 222, 128, 0.5)',
    bullets: [
      {
        heading: 'Absolute Freedom & Personal Autonomy',
        text: 'We establish a profound paradigm shift where a speech-impaired candidate can walk confidently into any competitive environment or corporate job interview completely alone, fully self-reliant.',
      },
      {
        heading: 'Elimination of Human Intermediaries',
        text: 'By providing an instantaneous, seamless translation bridge, daily institutional access\u2014ranging from professional employment to educational autonomy and public utility navigation\u2014no longer requires external translators.',
      },
      {
        heading: 'Dignity as the Default Standard',
        text: 'Independence stops being a rare luxury or a specialized accommodation, restructuring modern technical infrastructure to accept diverse communication styles as a fundamental privilege.',
      },
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50, filter: 'blur(12px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.15, ease: EASE },
  }),
};

export default function Vision() {
  return (
    <div className="min-h-screen px-6 py-8 pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10 md:mb-14"
        >
          <span className="font-mono-accent text-xs text-zinc-500 tracking-ultra-wide uppercase">
            Vision Dynamics
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-ultra-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
            The architecture
            <br />
            of autonomy
          </h1>
        </motion.div>

        {/* Three glassmorphic cards — side-by-side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              className="glass-panel glass-panel-hover p-6 md:p-7 flex flex-col relative overflow-hidden"
              style={{ boxShadow: `0 0 40px -12px ${card.accent}` }}
            >
              {/* Neon accent glow line at top */}
              <div
                className="absolute top-0 left-5 right-5 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  boxShadow: `0 0 8px ${card.accent}`,
                }}
              />

              {/* Card number + label */}
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className="font-display text-2xl font-bold tracking-tight leading-none"
                  style={{ color: card.accent.replace('0.5', '0.85') }}
                >
                  {card.num}
                </span>
                <span className="font-mono-accent text-[10px] text-zinc-500 tracking-ultra-wide uppercase">
                  {card.label}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-base font-semibold tracking-tight text-white mb-5">

                {card.title}
              </h2>

              {/* Bullets */}
              <div className="flex flex-col gap-5">
                {card.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div
                      className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rotate-45"
                      style={{
                        background: card.accent.replace('0.5', '0.7'),
                        boxShadow: `0 0 6px ${card.accent}`,
                      }}
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-sm font-medium text-zinc-200 leading-snug">
                        {bullet.heading}
                      </span>
                      <p className="font-body text-xs md:text-sm text-zinc-400 leading-relaxed tracking-wide">
                        {bullet.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-auto pt-5 h-px w-full opacity-25"
                style={{
                  background: `linear-gradient(90deg, ${card.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
