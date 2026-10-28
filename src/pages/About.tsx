import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  HeartPulse,
  Blocks,
  Lightbulb,
  Terminal,
} from "lucide-react";

const interests = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive interfaces with React, TypeScript, and thoughtful design.",
    icon: Code2,
    color: "var(--accent)",
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Exploring APIs, server-side development, and reliable application architecture.",
    icon: Terminal,
    color: "var(--accent-secondary)",
  },
  {
    number: "03",
    title: "Blockchain & Solana",
    description:
      "Learning Rust and exploring decentralized applications and the Solana ecosystem.",
    icon: Blocks,
    color: "var(--accent)",
  },
  {
    number: "04",
    title: "Nursing & Healthcare",
    description:
      "Studying nursing while developing an interest in how technology can support useful solutions.",
    icon: HeartPulse,
    color: "var(--cta)",
  },
];

const principles = [
  {
    title: "Stay curious",
    description:
      "Keep asking questions, exploring new ideas, and learning beyond the obvious.",
  },
  {
    title: "Build with purpose",
    description:
      "Focus on creating things that solve problems and offer real value.",
  },
  {
    title: "Grow consistently",
    description:
      "Improve through practice, feedback, experimentation, and patience.",
  },
];

function About() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:py-24">
      {/* Ambient decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Page introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            <Lightbulb size={16} className="text-[var(--accent)]" />
            A little about me
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Different interests.
            <br />
            <span className="text-[var(--accent)]">
              One curious mind.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I'm Josiah, a nursing student and developer who enjoys exploring
            technology, solving problems, and turning ideas into useful digital
            experiences.
          </p>
        </motion.div>

        {/* Story and profile panel */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              My story
            </p>

            <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Learning across disciplines.
              <br />
              Building one project at a time.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
              <p>
                My journey brings together two demanding worlds: nursing and
                software development. One teaches me to pay attention to people
                and their needs; the other gives me tools to explore ideas and
                build practical solutions.
              </p>

              <p>
                On the development side, I'm growing my skills in frontend
                engineering, backend systems, and blockchain technology, with
                a particular interest in React, Go, Rust, and Solana.
              </p>

              <p>
                I'm still learning, experimenting, and improving. My goal is
                to keep building useful things, contribute to meaningful
                projects, and become a better developer with every iteration.
              </p>
            </div>

            <a
              href="https://github.com/jojo-saturo"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-secondary)]"
            >
              Explore my GitHub
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.article>

          {/* Profile highlight */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] p-7 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[var(--accent)]/30"
            />

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                <Code2 size={28} />
              </div>

              <p className="mt-10 text-sm text-[var(--muted)]">
                The direction
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-snug text-[var(--text)]">
                Curiosity first.
                <br />
                Progress always.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Exploring the intersection of software, healthcare, and
                decentralized technology.
              </p>
            </div>

            <div className="mt-10 border-t border-[var(--border)] pt-5">
              <p className="font-mono text-xs text-[var(--accent-secondary)]">
                {"// "}
                Always building. Always learning.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Interests */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Areas of interest
              </p>
              <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
                What I'm exploring
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              A growing set of interests that shape what I learn and build.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map(({ number, title, description, icon: Icon, color }, index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/50 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]"
                    style={{ color }}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    /{number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--text)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              My approach
            </p>
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Principles I build around
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="border-l-2 border-[var(--accent)] py-2 pl-5"
              >
                <h3 className="font-semibold text-[var(--text)]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
