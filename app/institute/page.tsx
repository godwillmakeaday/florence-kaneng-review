import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Florence Kaneng Institute · Florence Kaneng Review",
  description: "Florence Kaneng Institute is a developing living legacy of care, education, nursing dignity, child welfare, student support, and community compassion.",
};

const programmes = [
  [
    "Mother & Child Care Reflections",
    "Essays and public-interest reflections on the dignity of mothers, children, homes, and everyday care."
  ],
  [
    "Student Support and Mentorship",
    "A future-facing programme for vulnerable students, school dignity, mentorship, discipline, and hope."
  ],
  [
    "Nurse-Mother Legacy Project",
    "A tribute to nurses, caregivers, hospital workers, birth attendants, and women who mother communities through care."
  ],
  [
    "Community Care Letters",
    "Letters, testimonies, interviews, and field notes from families, teachers, nurses, churches, and caregivers."
  ],
  [
    "School and Church Partnerships",
    "Future collaborations around student dignity, family life, community responsibility, and faith-informed care."
  ],
  [
    "Annual Care Lecture",
    "A proposed yearly lecture on motherhood, nursing, child dignity, grief, faith, and the hidden infrastructure of care."
  ]
];

export default function InstitutePage() {
  return (
    <main>
      <section className="article-hero page-hero">
        <Navbar className="article-nav" />
        <div className="article-hero-grid page-hero-grid">
          <div>
            <p className="eyebrow">Institutional Parent</p>
            <h1>Florence Kaneng Institute</h1>
            <p className="article-deck">
              A developing living legacy of care, education, community, nursing dignity, child welfare, student support,
              family strength, and faith-informed compassion.
            </p>
          </div>
          <div className="article-visual-panel page-visual-panel" aria-label="Institute visual panel">
            <span>Institute</span>
            <strong>Life. Care. Community. Memory.</strong>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-grid two-column-grid">
          <article className="feature-card large-feature-card">
            <p className="eyebrow">Living Legacy</p>
            <h2>The Institute is not only remembrance. It is a public form of care.</h2>
            <p>
              Florence Kaneng Institute honours a mother and nurse by developing a public language around care,
              childhood, students, families, faith, community, and the dignity of those who preserve life quietly.
              The magazine is one of its public voices.
            </p>
          </article>
          <article className="feature-card doctrine-feature-card">
            <p className="eyebrow">Institutional Voice</p>
            <h2>Florence Kaneng Review</h2>
            <p>
              The Review carries the Institute&apos;s reflective and educational voice: a careful magazine for essays,
              interviews, guides, letters, and public-interest care content.
            </p>
            <Link className="primary-button card-button" href="/articles">Read the Articles</Link>
          </article>
        </div>
      </section>

      <section className="desks-section page-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Developing Programmes</p>
          <h2>Possible pillars for care, education, and community life.</h2>
          <p>These programme cards present the Institute as developing, not as already overclaiming completed operations.</p>
        </div>
        <div className="program-grid">
          {programmes.map(([title, description], index) => (
            <article className="program-card" key={title}>
              <div className="program-number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="support-clarity-section">
        <div className="clarity-card">
          <div>
            <p className="eyebrow">Care as Institution</p>
            <h2>The work can grow through writing, partnerships, lectures, and support.</h2>
            <p>
              The Institute can mature gradually: first as a public voice, then as a partner for schools, churches,
              caregivers, families, and communities seeking stronger care culture.
            </p>
          </div>
          <div className="clarity-grid">
            <span>Magazine</span>
            <span>Letters</span>
            <span>Lectures</span>
            <span>Partnerships</span>
            <span>Student Support</span>
            <span>Nurse Legacy</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
