
import { Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/jojo-saturo",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
  },
];

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-8 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand and tagline */}
        <div>
          <p className="font-bold text-[var(--text)]">
            MyBrand<span className="text-emerald-500">.</span>
          </p>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Building ideas into digital experiences.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              title={name}
              target={name !== "Email" ? "_blank" : undefined}
              rel={name !== "Email" ? "noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-emerald-500"
            >
              {name === "Email" && <Mail size={16} />}
              {name}
            </a>
          ))}
        </div>

        {/* Back to top */}

        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });

            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });

            document.body.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="flex items-center gap-1 text-sm text-[var(--muted)] transition-colors hover:text-emerald-500"
        >
          Back to top <ArrowUpRight size={16} />
        </button>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-6 max-w-7xl border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
