import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Send,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { fadeUp, slideInFromLeft, slideInFromRight } from "../lib/animations";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:niyitripplejoejoejoe@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyle =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10";

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            <Sparkles size={16} className="text-[var(--accent)]" />
            Let's connect
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-[var(--accent)]">Let's talk about it.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Whether it's a project, collaboration, opportunity, or simply a
            conversation about technology, I'd love to hear from you.
          </p>
        </motion.div>


        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Get in touch
              </p>

              <h2 className="mt-4 text-2xl font-bold text-[var(--text)] sm:text-3xl">
                Let's create something meaningful.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                I'm open to learning opportunities, interesting collaborations,
                developer communities, and conversations with people building
                great things.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="https://github.com/jojo-saturo"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition-all hover:border-[var(--accent)]/50 hover:bg-[var(--background)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <span className="text-sm trackling-tight font-bold">GH</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--text)]">
                      GitHub
                    </p>
                    <p className="truncate text-xs text-[var(--muted)]">
                      github.com/jojo-saturo
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">
                      Email
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      Send me a message using the form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-2 text-sm text-[var(--accent)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                </span>
                Open to meaningful opportunities
              </div>

              <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                Good conversations often lead to great things.
              </p>
            </div>
          </motion.aside>


          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
          >
            <div className="mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <MessageCircle size={23} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[var(--text)]">
                Send a message
              </h2>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Fill in the details below and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[var(--text)]"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Agent Kim"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--text)]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[var(--text)]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--text)]"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyle} resize-y`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--cta)] px-6 py-4 font-semibold text-[var(--cta-text)] transition-all hover:brightness-110"
              >
                Send message
                <Send size={18} />
              </motion.button>

              <p className="text-center text-xs leading-5 text-[var(--muted)]">
                This form opens your default email application. It does not
                send messages through a website backend.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
