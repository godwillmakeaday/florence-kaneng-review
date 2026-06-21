import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Support the Institute · Florence Kaneng Review",
  description: "Support Florence Kaneng Institute through future partnerships, sponsorships, memberships, guides, events, and care-centered programmes.",
};

const fundingAreas = ['care and education programmes', 'student support and mentorship', 'community letters and testimony archive', 'nurse-mother legacy work', 'school and church partnerships', 'future care lectures and guides'];

export default function SupportPage() {
  return (
    <main>
      <section className="article-hero page-hero">
        <Navbar className="article-nav" />
        <div className="article-hero-grid page-hero-grid">
          <div>
            <p className="eyebrow">Support & Partnerships</p>
            <h1>Support the Institute</h1>
            <p className="article-deck">
              A transparent support page for future sponsorships, memberships, partnerships, guides, events,
              newsletters, and print editions connected to Florence Kaneng Institute.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/care-letter">Join The Care Letter</Link>
              <Link className="secondary-button" href="/institute">Return to Institute</Link>
            </div>
          </div>
          <div className="article-visual-panel page-visual-panel" aria-label="Support visual panel">
            <span>Support</span>
            <strong>Partnership without confusion. Care without noise.</strong>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-grid two-column-grid">
          <article className="feature-card large-feature-card">
            <p className="eyebrow">Why support matters</p>
            <h2>Care work needs form, continuity, and credible public structure.</h2>
            <p>
              The Review and Institute are being built as a living care platform: editorial work first, then possible
              partnerships, programmes, lectures, guides, and support structures. Support helps turn memory into public service.
            </p>
          </article>
          <article className="feature-card doctrine-feature-card">
            <p className="eyebrow">Support Clarity</p>
            <h2>How this magazine may support the Institute</h2>
            <p>
              Florence Kaneng Review may be financed through sponsorships, memberships, partnerships, guides, events,
              newsletters, and future print editions. A defined portion of future proceeds may support Florence Kaneng
              Institute&apos;s care, education, and community programmes.
            </p>
          </article>
        </div>
      </section>

      <section className="desks-section page-section-tight">
        <div className="section-heading">
          <p className="eyebrow">What support may help fund</p>
          <h2>Practical areas of care, education, and community memory.</h2>
        </div>
        <div className="simple-card-grid">
          {fundingAreas.map((item, index) => (
            <article className="simple-card" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="letter-section support-letter-section">
        <div>
          <p className="eyebrow">Partnership Note</p>
          <h2>Sponsorship and partnerships</h2>
          <p>
            Schools, churches, clinics, NGOs, family brands, community leaders, and care-centered institutions may later
            partner around lectures, guides, essay series, student support, and community care documentation.
          </p>
        </div>
        <div className="newsletter-form support-contact-card">
          <p className="eyebrow">Contact Placeholder</p>
          <h3>Discuss Partnership</h3>
          <p>
            Payment and contact integrations are not active yet. For now, this page keeps the support structure clear and
            ready for a future contact form, email, or donation system.
          </p>
          <div className="support-actions">
            <Link className="primary-button" href="/care-letter">Join The Care Letter</Link>
            <Link className="ghost-button" href="/">Return to Magazine</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
