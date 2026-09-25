import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto max-w-6xl rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass bg-background/70 shadow-[var(--shadow-soft)]" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => go("home")} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30">AE</span>
            <span className="hidden sm:inline">Abdulrahman Emad</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {items.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-300 ${
                    active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-primary transition-transform duration-500 origin-left ${
                      active === id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <ul className="md:hidden mt-3 grid gap-1 border-t border-border pt-3">
            {items.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`w-full rounded-lg px-3 py-3 text-left text-sm ${
                    active === id ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
