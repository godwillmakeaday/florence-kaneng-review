import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "About · Florence Kaneng Review",
  description: "About Florence Kaneng Review, a magazine of motherhood, care, childhood, nursing, faith, and community life.",
};

const publishItems = [
  "Founding essays on motherhood, care, grief, faith, and meaning",
  "Interviews with mothers, nurses, teachers, caregivers, and community workers",
  "Public-interest guides on child dignity, student care, home life, and community responsibility",
  "Letters, testimonies, field notes, and a growing archive of care",
];

const nonClaims = [
  "It is not a hospital, clinic, emergency service, or medical-advice platform.",
  "It is not a generic parenting blog built around shallow tips.",
  "It is not a fundraising page disguised as journalism.",
  "It does not replace professional medical, psychological, legal, or emergency guidance.",
];

const promises = [
  "Human stories before generic advice",
  "African realities before imported assumptions",
  "Care as dignity, not pity",
  "Faith and grief handled with reverence",
  "Public education without pretending to replace professionals",
];

export default function AboutPage() {
  return (
    <main>
      <section className="article-hero page-hero">
        <Navbar className="article-nav" />
        <div className="article-hero-grid page-hero-grid">
          <div>
            <p className="eyebrow">About the Review</p>
            <h1>About Florence Kaneng Review</h1>
            <p className="article-deck">
              A magazine of motherhood, care, childhood, nursing, faith, and community life, published in support of
              Florence Kaneng Institute and built around the doctrine of Motherhood as Public Infrastructure.
            </p>
            <div className="founding-line page-founding-line">
              She was my mother. She was a mother. She remains a mothering presence through every life this work touches.
            </div>
          </div>
          <div className="article-visual-panel page-visual-panel" aria-label="About visual panel">
            <span>Living Legacy</span>
            <strong>Care as serious public knowledge.</strong>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-grid two-column-grid">
          <article className="feature-card large-feature-card">
            <p className="eyebrow">Why this magazine exists</p>
            <h2>Memory becomes public service when it continues to care.</h2>
            <p>
              Florence Kaneng Review begins with a mother, but it does not end with one family. It turns memory into a
              public grammar of care: essays, letters, interviews, guides, and reflections that treat mothers, children,
              nurses, students, homes, churches, schools, and communities as serious subjects of civilization.
            </p>
          </article>
          <article className="feature-card doctrine-feature-card">
            <p className="eyebrow">Core Doctrine</p>
            <h2>Motherhood as Public Infrastructure</h2>
            <p>
              Before the school forms the child, somebody fed the child. Before the law protects the citizen, somebody
              preserved the child. Before the economy receives the worker, somebody raised the person.
            </p>
          </article>
        </div>
      </section>

      <section className="desks-section page-section-tight">
        <div className="section-heading">
          <p className="eyebrow">What We Publish</p>
          <h2>A serious magazine of care, not generic content.</h2>
        </div>
        <div className="simple-card-grid">
          {publishItems.map((item, index) => (
            <article className="simple-card" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="content-grid two-column-grid">
          <article className="feature-card">
            <p className="eyebrow">What we do not claim to be</p>
            <h2>Public education with clear boundaries.</h2>
            <ul className="care-list">
              {nonClaims.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="feature-card">
            <p className="eyebrow">Editorial Promise</p>
            <h2>Care deserves discipline, reverence, and truthfulness.</h2>
            <ul className="care-list">
              {promises.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="manifesto-strip" aria-label="About editorial manifesto">
        <div>
          <p className="eyebrow">Founding Belief</p>
          <h2>Care is not soft.</h2>
        </div>
        <p>Care is structure. Care is memory. Care is discipline. Care is the first architecture of civilization.</p>
      </section>
      <Footer />
    </main>
  );
}
