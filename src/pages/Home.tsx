import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import {
  staggerIntro,
  fadeUpSmall,
  fadeUpMedium,
  fadeUpLarge,
  fadeIn,
  fadeInDelayed,
  slideInRight,
  staggerSkills,
  popIn,
  floatAnimation,
  pulseAnimation,
  floatRotateRight,
  floatRotateLeft
} from "../lib/animations";

const skills = ["React", "TypeScript", "Go", "Rust", "Solana"];

function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      // Ambient background effects
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[110px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-80 w-80 rounded-full bg-[var(--accent-secondary)]/10 blur-[110px] sm:h-96 sm:w-96"
      />

      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-24">
        <motion.div
          variants={staggerIntro}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-2xl"
        >
          <motion.div
            variants={fadeUpSmall}
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)] sm:px-4 sm:text-sm"
          >
            <Sparkles
              size={15}
              className="shrink-0 text-[var(--accent)]"
            />
            Developer · Builder · Lifelong Learner
          </motion.div>

          <motion.h1
            variants={fadeUpLarge}
            className="text-[clamp(2.6rem,7vw,4.8rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
          >
            I turn ideas into{" "}
            <span className="text-[var(--accent)]">digital</span>{" "}
            <span className="text-[var(--accent-secondary)]">
              experiences.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpMedium}
            className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8 lg:text-lg"
          >
            I'm a developer exploring the intersection of thoughtful frontend
            design, reliable backend systems, and blockchain technology. I
            enjoy learning, building, and turning complex ideas into useful
            products.
          </motion.p>

          // Action buttons
          <motion.div
            variants={fadeUpSmall}
            className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9 sm:gap-4"
          >
            <Link
              to="/proof-of-work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--cta)] px-5 py-3.5 text-sm font-semibold text-[var(--cta-text)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:brightness-110 sm:px-6 sm:text-base"
            >
              Explore my work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] sm:px-6 sm:text-base"
            >
              Let's connect
            </Link>
          </motion.div>

          // Skills
          <motion.div
            variants={fadeIn}
            className="mt-10 sm:mt-12"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
              Currently exploring
            </p>

            <motion.div
              variants={staggerSkills}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={popIn}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)] sm:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        // Visual panel
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-lg md:max-w-none"
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:rounded-3xl sm:p-7"
          >
            // Code window header
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 sm:pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
              </div>

              <span className="text-[10px] text-[var(--muted)] sm:text-xs">
                developer.ts
              </span>
            </div>


            <div className="space-y-5 py-7 font-mono text-xs sm:py-8 sm:text-sm md:text-base">
              <p className="text-[var(--muted)]">
                <span className="text-[var(--accent-secondary)]">const</span>{" "}
                developer = {"{"}
              </p>

              <div className="space-y-4 pl-5 sm:pl-8">
                <p className="break-words">
                  <span className="text-[var(--muted)]">name:</span>{" "}
                  <span className="text-[var(--accent)]">"Josiah"</span>,
                </p>

                <p className="break-words">
                  <span className="text-[var(--muted)]">focus:</span>{" "}
                  <span className="text-[var(--accent-secondary)]">
                    "Building useful things"
                  </span>,
                </p>

                <p className="break-words">
                  <span className="text-[var(--muted)]">mindset:</span>{" "}
                  <span className="text-[var(--cta)]">
                    "Always learning"
                  </span>,
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
                variants={pulseAnimation}
                animate="animate"
                className="flex items-center gap-2 pt-2 text-[10px] text-[var(--accent)] sm:text-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                Turning curiosity into code...
              </motion.div>
            </div>


            <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 text-[10px] text-[var(--muted)] sm:pt-5 sm:text-xs">
              <span className="flex items-center gap-2">
                <Code2 size={14} />
                Build · Learn · Repeat
              </span>

              <a
                href="https://github.com/jojo-saturo"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
                className="font-bold transition-colors hover:text-[var(--accent)]"
              >
                GH ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            variants={floatRotateRight}
            animate="animate"
            className="absolute -right-2 -top-3 -z-10 h-20 w-20 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"
          />

          <motion.div
            aria-hidden="true"
            variants={floatRotateLeft}
            animate="animate"
            className="absolute -bottom-3 -left-2 -z-10 h-16 w-16 rounded-2xl border border-[var(--accent-secondary)]/30 bg-[var(--accent-secondary)]/5 sm:-bottom-5 sm:-left-5 sm:h-20 sm:w-20"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeInDelayed}
        initial="hidden"
        animate="visible"
        className="hidden items-center justify-center gap-2 pb-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:flex"
      >
        <ArrowDown size={14} />
        Keep exploring
      </motion.div>
    </section>
  );
}

export default Home;
