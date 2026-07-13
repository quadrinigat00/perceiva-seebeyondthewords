import { motion } from 'framer-motion';
import { Linkedin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/nigat-quadri',
    href: 'https://www.linkedin.com/in/nigat-quadri',
    Icon: Linkedin,
    external: true,
  },
  {
    label: 'Phone',
    value: '+91 8280801192',
    href: 'tel:+918280801192',
    Icon: Phone,
    external: false,
  },
  {
    label: 'Email',
    value: 'quadrinigat@gmail.com',
    href: 'mailto:quadrinigat@gmail.com',
    Icon: Mail,
    external: true,
  },
];

const panelVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="font-mono-accent text-xs text-zinc-500 tracking-ultra-wide uppercase">
            Institutional Contact
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-ultra-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
            Let's connect
          </h1>
        </motion.div>

        <div className="flex flex-col gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.Icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                custom={i}
                variants={panelVariant}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-panel glass-panel-hover p-6 md:p-8 flex items-center gap-5 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-400">
                  <Icon size={20} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-mono-accent text-xs text-zinc-500 tracking-ultra-wide uppercase">
                    {contact.label}
                  </div>
                  <div className="mt-1 font-display text-base md:text-lg text-zinc-200 truncate">
                    {contact.value}
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-accent-white-faint group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-center font-body text-sm text-zinc-500 tracking-wide"
        >
          Open to strategic partnerships, institutional collaborations, and investor conversations.
        </motion.p>
      </div>
    </div>
  );
}
