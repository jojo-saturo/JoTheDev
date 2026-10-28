import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";

const skills = ["React", "TypeScript", "Go", "Rust", "Solana"];

function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Ambient background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-96 w-96 rounded-full bg-[var(--accent-secondary)]/10 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="max-w-2xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]"
          >
            <Sparkles size={15} className="text-[var(--accent)]" />
            Developer · Builder · Lifelong Learner
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-5xl font-bold leading-[1.08] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl"
          >
            I turn ideas into{" "}
            <span className="text-[var(--accent)]">digital</span>{" "}
            <span className="text-[var(--accent-secondary)]">
              experiences.
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            I'm a developer exploring the intersection of thoughtful frontend
            design, reliable backend systems, and blockchain technology. I
            enjoy learning, building, and turning complex ideas into useful
            products.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/proof-of-work"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 font-semibold text-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_30%,transparent)]"
            >
              Explore my work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)]"
            >
              Let's connect
            </Link>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Currently exploring
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + index * 0.08 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>

              <span className="text-xs text-[var(--muted)]">
                developer.ts
              </span>
            </div>

            <div className="space-y-5 py-8 font-mono text-sm sm:text-base">
              <p className="text-[var(--muted)]">
                <span className="text-[var(--accent-secondary)]">
                  const
                </span>{" "}
                developer = {"{"}
              </p>

              <div className="space-y-4 pl-5 sm:pl-8">
                <p className="break-words">
                  <span className="text-[var(--muted)]">name:</span>{" "}
                  <span className="text-[var(--accent)]">
                    "Josiah"
                  </span>
                  ,
                </p>

                <p className="break-words">
                  <span className="text-[var(--muted)]">focus:</span>{" "}
                  <span className="text-[var(--accent-secondary)]">
                    "Building useful things"
                  </span>
                  ,
                </p>

                <p className="break-words">
                  <span className="text-[var(--muted)]">mindset:</span>{" "}
                  <span className="text-[#e96950] dark:text-[#ff0099]">
                    "Always learning"
                  </span>
                  ,
                </p>

                <p className="break-words">
                  <span className="text-[var(--muted)]">status:</span>{" "}
                  <span className="text-[var(--accent)]">
                    "In progress"
                  </span>
                </p>
              </div>

              <p className="text-[var(--muted)]">{"};"}</p>

              <motion.div
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="flex items-center gap-2 pt-3 text-xs text-[var(--accent)] sm:text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Turning curiosity into code...
              </motion.div>
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <Code2 size={15} />
                Build · Learn · Repeat
              </span>

              <a
                href="https://github.com/jojo-saturo"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
                className="text-xs font-bold transition-colors hover:text-[var(--accent)]"
              >
                GH ↗
              </a>
            </div>
          </motion.div>

          {/* Decorative accent */}
          <motion.div
            animate={{ rotate: [0, 8, 0], y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-3 -top-4 -z-10 h-24 w-24 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 sm:-right-5 sm:-top-5"
          />

          <motion.div
            animate={{ rotate: [0, -8, 0], y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-4 -left-3 -z-10 h-20 w-20 rounded-2xl border border-[var(--accent-secondary)]/30 bg-[var(--accent-secondary)]/5 sm:-bottom-5 sm:-left-5"
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden items-center justify-center gap-2 pb-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:flex"
      >
        <ArrowDown size={14} />
        Keep exploring
      </motion.div>
    </section>
  );
}

export default Home;
