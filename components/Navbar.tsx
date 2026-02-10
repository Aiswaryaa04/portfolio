import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.7.75 12.16c0 5.2 3.44 9.61 8.2 11.17.6.12.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.28 1.84 1.28 1.07 1.9 2.8 1.35 3.48 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.46-2.46 1.23-3.33-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27.96-.28 1.99-.41 3.02-.42 1.03.01 2.06.14 3.02.42 2.3-1.6 3.3-1.27 3.3-1.27.65 1.69.24 2.94.12 3.25.77.87 1.23 1.98 1.23 3.33 0 4.74-2.8 5.79-5.47 6.1.43.39.81 1.15.81 2.32 0 1.67-.02 3.02-.02 3.44 0 .33.22.72.83.59 4.76-1.56 8.2-5.97 8.2-11.17C23.25 5.7 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/75 dark:bg-[#060b14]/75 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="font-semibold tracking-tight">
          Aiswaryaa
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Social icons */}
          <a
            href="https://github.com/Aiswaryaa04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white"
          >
            <IconGitHub />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white"
          >
            <IconLinkedIn />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white"
          >
            <IconMail />
          </a>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
