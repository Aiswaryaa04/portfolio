import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#060b14] dark:text-white">
      <Navbar />
      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xl md:text-2xl font-semibold">Hi, I’m</p>

            <h1 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aiswaryaa
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-neutral-600 dark:text-white/70 leading-relaxed">
              Graduate student focused on software, data, and automation—building scalable, data-driven solutions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-md border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                href="/resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="rounded-md border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                href="#projects"
              >
                View Projects
              </a>
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              <a className="underline" href="https://github.com/Aiswaryaa04" target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="underline" href="mailto:your@email.com">Email</a>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
              <div className="h-56 w-56 md:h-72 md:w-72 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-sm opacity-70">
                profile.jpg later
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="max-w-3xl text-neutral-600 dark:text-white/70 leading-relaxed">
          Replace this with 4–6 lines about your focus, strengths, and what full-time roles you’re targeting.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <p className="text-neutral-600 dark:text-white/70">
          Next step: we’ll convert this into Neha-style stacked cards.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <p className="text-neutral-600 dark:text-white/70">
          Next step: we’ll convert this into Neha-style stacked cards.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <p className="text-neutral-600 dark:text-white/70">
          Next step: we’ll convert this into Neha-style stacked cards.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="text-neutral-600 dark:text-white/70">
          University • Degree • Expected Grad
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="text-neutral-600 dark:text-white/70">
          Email: <a className="underline" href="mailto:your@email.com">your@email.com</a>
        </p>
      </section>

      <footer className="py-10 text-center text-xs text-neutral-500 dark:text-white/50">
        © {new Date().getFullYear()} Aiswaryaa
      </footer>
    </main>
  );
}
