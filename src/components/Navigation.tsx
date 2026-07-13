import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/vision', label: 'Vision' },
  { to: '/invest', label: 'Invest' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-12 flex items-center justify-between backdrop-blur-xl bg-cinematic-black/50 border-b border-white/5"
      >
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-300" />
          <span className="font-display text-lg font-semibold tracking-ultra-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
            Perceiva
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-body text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {({ isActive: active }) => (
                  <>
                    <span className={active || isActive ? 'text-white' : ''}>{link.label}</span>
                    {(active || isActive) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-px bg-white"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-50 md:hidden glass-panel mx-4 flex flex-col gap-2 p-4"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-body rounded-lg transition-colors ${
                  isActive ? 'text-white bg-white/5' : 'text-zinc-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.nav>
      )}
    </>
  );
}
