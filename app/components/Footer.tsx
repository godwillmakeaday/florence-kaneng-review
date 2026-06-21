import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/issue-one", label: "Issue One" },
  { href: "/articles", label: "Articles" },
  { href: "/care-letter", label: "Care Letter" },
  { href: "/institute", label: "Institute" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
];

export function Footer({ note = "Complete premium static publication foundation." }: { note?: string }) {
  return (
    <footer>
      <div>
        <h2>Florence Kaneng Review</h2>
        <p>A publication of Florence Kaneng Institute.</p>
        <p className="footer-doctrine">Motherhood as Public Infrastructure</p>
        <p className="footer-note">
          Not medical advice. Florence Kaneng Review publishes public-interest reflections and
          educational care content; it should not replace qualified medical, legal, psychological,
          emergency, or other professional guidance.
        </p>
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Florence Kaneng Review. All rights reserved.</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
