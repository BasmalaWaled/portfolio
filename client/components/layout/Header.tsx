import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/5 transition-colors",
        scrolled
          ? "bg-background/90 backdrop-blur-lg"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            BASMALA<span className="text-primary">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-foreground/70",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/HANY-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/HANY-CV.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}