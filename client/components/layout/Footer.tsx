import { Link } from "react-router-dom";
import { Code, Globe, Mail, Share2, User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Articles", href: "/articles" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Code, href: "https://github.com", label: "GitHub" },
  { icon: User, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Share2, href: "https://twitter.com", label: "Twitter" },
  { icon: Globe, href: "https://hany.dev", label: "Website" },
  { icon: Mail, href: "mailto:hello@hany.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-base font-extrabold text-white">
              H
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              HANY<span className="text-primary">.dev</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground/60 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} HANY.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}