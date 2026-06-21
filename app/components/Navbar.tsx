import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/issue-one", label: "Issue One" },
  { href: "/articles", label: "Articles" },
  { href: "/care-letter", label: "Care Letter" },
  { href: "/institute", label: "Institute" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
];

export function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={`nav-bar ${className}`.trim()}>
      <Link className="brand-mark" href="/" aria-label="Florence Kaneng Review home">
        <span className="brand-seal">FK</span>
        <div>
          <p className="brand-name">Florence Kaneng Review</p>
          <p className="brand-parent">A publication of Florence Kaneng Institute</p>
        </div>
      </Link>
      <nav aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
