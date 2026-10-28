
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useThemeStore } from "../stores/themeStore";

function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun size={19} /> : <Moon size={19} />}
      </motion.span>
    </motion.button>
  );
}

export default ThemeToggle;
