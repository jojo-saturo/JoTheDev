import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "LUXE — E-commerce Store",
    category: "Frontend",
    description:
      "A modern shopping experience featuring product discovery, category filtering, cart management, and theme switching.",
    technologies: ["React", "TypeScript", "Bootstrap", "Zustand"],
    github: "https://github.com/jojo-saturo",
    demo: "",
    status: "In progress",
    featured: true,
  },
  {
    title: "Personal Brand Website",
    category: "Frontend",
    description:
      "An interactive developer portfolio designed to showcase my journey, skills, projects, and creative approach.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    github: "https://github.com/jojo-saturo",
    demo: "https://webpage-nu-one.vercel.app",
    status: "In progress",
    featured: true,
  },
  {
    title: "Saturobot",
    category: "Backend",
    description:
      "A Telegram bot project exploring bot development and Solana-related functionality.",
    technologies: ["Go", "Telegram Bot API", "Solana"],
    github: "https://github.com/jojo-saturo",
    demo: "",
    status: "Learning project",
    featured: false,
  },
  {
    title: "Blockchain Exploration",
    category: "Blockchain",
    description:
      "Exploring smart contract development, blockchain concepts, and decentralized application ecosystems.",
    technologies: ["Rust", "Solana", "TypeScript"],
    github: "https://github.com/jojo-saturo",
    demo: "",
    status: "Learning",
    featured: false,
  },
];

const filters = ["All", "Frontend", "Backend", "Blockchain"];

function ProofOfWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            <Layers3 size={16} className="text-[var(--accent)]" />
            Selected projects & experiments
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Turning ideas into
            <br />
            <span className="text-[var(--accent)]">real projects.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            A collection of projects, experiments, and technologies I'm
            exploring as I grow as a developer. Every project is another
            opportunity to learn, build, and improve.
          </p>
        </motion.div>

        {/* Project overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {[
            { value: "04", label: "Projects & explorations" },
            { value: "05+", label: "Technologies explored" },
            { value: "∞", label: "Ideas to build" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
            >
              <p className="text-3xl font-bold text-[var(--accent)]">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Filter controls */}
        <div className="mt-16 flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[#0d0d0d]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div
          layout
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]/50"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--background)] sm:h-56">
                  <div
                    aria-hidden="true"
                    className="absolute h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl transition-transform duration-500 group-hover:scale-150"
                  />
                  <Code2
                    size={64}
                    strokeWidth={1}
                    className="relative text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute bottom-4 left-5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
                    {project.category}
                  </span>
                  <span className="absolute right-5 top-4 text-xs text-[var(--muted)]">
                    {project.status}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold text-[var(--text)] sm:text-2xl">
                      {project.title}
                    </h2>
                    {project.featured && (
                      <span className="shrink-0 rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[var(--border)] pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span className="text-xs font-bold">GH</span>
                      Source code
                      <ArrowUpRight size={15} />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-secondary)]"
                      >
                        <ExternalLink size={16} />
                        Live preview
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            More coming soon
          </p>
          <h2 className="mt-4 text-2xl font-bold text-[var(--text)] sm:text-4xl">
            The journey is still unfolding.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
            I'm constantly learning, experimenting, and working on new ideas.
            Follow my GitHub to see what I'm building next.
          </p>
          <a
            href="https://github.com/jojo-saturo"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--cta)] px-6 py-3 font-semibold text-[var(--cta-text)] transition-all hover:-translate-y-1 hover:brightness-110"
          >
            Visit GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProofOfWork;
