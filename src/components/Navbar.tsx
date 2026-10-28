import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  House,
  UserRound,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: UserRound },
  {
    name: "Proof of Work",
    path: "/proof-of-work",
    icon: BriefcaseBusiness,
  },
  { name: "Contact", path: "/contact", icon: Mail },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-[var(--text)]"
        >
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code2 size={25} className="text-[var(--accent)]" />
          </motion.span>

          <span>
            MyBrand
            <span className="text-[var(--accent)]">.</span>
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map(({ name, path, icon: Icon }, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.07, duration: 0.35 }}
            >
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={16} />
                    <span>{name}</span>

                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--accent)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Desktop theme toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Mobile and tablet actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:bg-[var(--surface-hover)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Animated mobile and tablet menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06 },
                },
              }}
            >
              {navItems.map(({ name, path, icon: Icon }) => (
                <motion.div
                  key={path}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <NavLink
                    to={path}
                    end={path === "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-[var(--accent)]/30 bg-[var(--background)] text-[var(--accent)]"
                          : "border-transparent text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                      }`
                    }
                  >
                    <Icon size={18} />
                    <span>{name}</span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
