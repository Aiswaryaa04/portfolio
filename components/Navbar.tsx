const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="hero-bg sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 pt-4">
        <nav className="flex items-center justify-center gap-8 text-sm text-white/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mx-auto mt-4 h-px w-[70%] bg-white/10" />
      </div>
    </header>
  );
}
