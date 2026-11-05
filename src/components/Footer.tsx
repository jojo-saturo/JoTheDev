
import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-[var(--text)]"
            >
              MyBrand<span className="text-[var(--accent)]">.</span>
            </Link>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Building ideas into digital experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jojo-saturo"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={16} />
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>

          <p className="text-xs text-[var(--muted)]">
            Designed & built with intention.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:self-auto"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
