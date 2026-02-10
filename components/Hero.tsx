export default function Hero() {
  return (
    <section id="top" className="hero-bg">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-14">
        {/* top divider line like Sanketh */}
        <div className="mx-auto mb-10 h-px w-[70%] bg-white/10" />

        <div className="flex flex-col items-center text-center">
          {/* IMAGE (different placement: right side on desktop, still above on mobile) */}
          <div className="mb-8 md:mb-10 w-full flex justify-center md:justify-end">
            <div className="relative">
              <div className="h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.35)]">
                {/* Put your image in /public/profile.jpg */}
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* subtle outer glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-indigo-500/30" />
            </div>
          </div>

          <p className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi, I&apos;m
          </p>

          <h1 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Aiswaryaa
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/60">
            Graduate student focused on software, data, and automation — building scalable, data-driven solutions.
          </p>

          <a
            href="/resume.pdf"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/10"
          >
            Download Resume
          </a>

          {/* ICONS like Sanketh (minimal, centered) */}
          <div className="mt-8 flex items-center gap-6 text-white/70">
            <a
              href="https://github.com/Aiswaryaa04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white"
            >
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 .5C5.73.5.75 5.7.75 12.16c0 5.2 3.44 9.61 8.2 11.17.6.12.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.28 1.84 1.28 1.07 1.9 2.8 1.35 3.48 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.46-2.46 1.23-3.33-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27.96-.28 1.99-.41 3.02-.42 1.03.01 2.06.14 3.02.42 2.3-1.6 3.3-1.27 3.3-1.27.65 1.69.24 2.94.12 3.25.77.87 1.23 1.98 1.23 3.33 0 4.74-2.8 5.79-5.47 6.1.43.39.81 1.15.81 2.32 0 1.67-.02 3.02-.02 3.44 0 .33.22.72.83.59 4.76-1.56 8.2-5.97 8.2-11.17C23.25 5.7 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              {/* LinkedIn icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>

            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="hover:text-white"
            >
              {/* Mail icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
