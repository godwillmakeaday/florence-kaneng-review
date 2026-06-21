import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "The Care Letter · Florence Kaneng Review",
  description: "A monthly letter on motherhood, child dignity, nursing wisdom, student care, family life, faith, grief, and community.",
};

const monthlyThemes = ['Motherhood and domestic wisdom', 'Child dignity and everyday care', 'Nursing wisdom and human fragility', 'Students, mentorship, and hope', 'Faith, grief, and the sacredness of life', 'Community memory and letters of care'];
const sampleTopics = ['The house as the first hospital', 'What nurses know about fragility', 'The student who needed care before advice', 'Care is not soft', 'How grief becomes responsibility', 'Why children need more than school fees'];

export default function CareLetterPage() {
  return (
    <main>
      <section className="article-hero page-hero">
        <Navbar className="article-nav" />
        <div className="article-hero-grid page-hero-grid">
          <div>
            <p className="eyebrow">Monthly Newsletter</p>
            <h1>The Care Letter</h1>
            <p className="article-deck">
              A monthly letter on motherhood, child dignity, nursing wisdom, student care, family life, faith,
              grief, and community. No noise. No generic advice. No manipulative fundraising.
            </p>
          </div>
          <form className="newsletter-form hero-newsletter-card">
            <label htmlFor="care-email">Email address</label>
            <div className="form-row">
              <input id="care-email" name="email" type="email" placeholder="you@example.com" />
              <button type="submit">Join</button>
            </div>
            <p className="form-note">Newsletter signup is a visual placeholder for now. No backend is connected.</p>
          </form>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Monthly Themes</p>
          <h2>A letter for people who believe care deserves serious language.</h2>
          <p>
            The Care Letter can become the direct relationship layer of Florence Kaneng Review: quieter than social media,
            more personal than the homepage, and more trusted than random search traffic.
          </p>
        </div>
        <div className="simple-card-grid">
          {monthlyThemes.map((theme, index) => (
            <article className="simple-card" key={theme}>
              <span>0{index + 1}</span>
              <p>{theme}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="desks-section page-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Sample Letter Topics</p>
          <h2>The kind of reflections subscribers may receive.</h2>
        </div>
        <div className="program-grid">
          {sampleTopics.map((topic, index) => (
            <article className="program-card" key={topic}>
              <div className="program-number">0{index + 1}</div>
              <h3>{topic}</h3>
              <p>Reflective, practical, reverent, and public-interest writing from the care-centered editorial desk.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-strip" aria-label="Care Letter promise">
        <div>
          <p className="eyebrow">Care Letter Promise</p>
          <h2>No noise.</h2>
        </div>
        <p>No generic advice. No manipulative fundraising. No pretending to replace professionals. Only disciplined reflections on care, dignity, memory, faith, family, and community.</p>
      </section>
      <Footer />
    </main>
  );
}
