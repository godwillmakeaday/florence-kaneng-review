import Link from "next/link";
import { issueOneArticles } from "../data/articles";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DisclaimerNote } from "./components/DisclaimerNote";

const desks = [
  {
    title: "The Motherhood Desk",
    label: "Motherhood",
    description:
      "Essays on mothers, sacrifice, domestic wisdom, tenderness, discipline, grief, and the invisible work of raising people.",
    tag: "Domestic wisdom",
  },
  {
    title: "Child & Care",
    label: "Child dignity",
    description:
      "Public education around child dignity, family support, emotional care, safety, school life, and everyday care.",
    tag: "Everyday care",
  },
  {
    title: "The Nurse-Mother",
    label: "Nursing wisdom",
    description:
      "Honouring nurses, caregivers, hospital workers, birth attendants, and women who mother communities through professional care.",
    tag: "Professional care",
  },
  {
    title: "Students & Future",
    label: "Student care",
    description:
      "Mentorship, student dignity, vulnerable children, school life, discipline, hope, and the future of young people.",
    tag: "Young futures",
  },
  {
    title: "Home, Faith & Meaning",
    label: "Faith & grief",
    description:
      "Reflections on life, death, faith, happiness, grief, sacrifice, heaven, and the sacredness of life.",
    tag: "Sacred life",
  },
  {
    title: "Community Letters",
    label: "Witness",
    description:
      "Stories, testimonies, field notes, interviews, and letters from mothers, nurses, teachers, caregivers, and families.",
    tag: "Living archive",
  },
];

const editorialPromises = [
  "Human stories before generic advice",
  "African realities before imported assumptions",
  "Care as dignity, not pity",
  "Faith and grief handled with reverence",
  "Public education without pretending to replace professionals",
];

const supportPaths = [
  "Sponsorships",
  "Memberships",
  "Partnerships",
  "Guides",
  "Events",
  "Newsletters",
  "Future print editions",
];

const futureFormats = [
  "Monthly Care Letter",
  "Motherhood Essays",
  "Nurse-Mother Interviews",
  "Child & Student Care Guides",
  "Annual Print Review",
  "Community Care Lectures",
  "School & Church Partnerships",
  "Care Testimony Archive",
];

const coverNotes = ["Motherhood", "Care", "Memory", "Community"];

export default function Home() {
  const leadArticle = issueOneArticles[0];
  const supportingArticles = issueOneArticles.slice(1);

  return (
    <main>
      <section className="hero" id="home">
        <Navbar />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Motherhood · Care · Nursing · Community</p>
            <h1>Florence Kaneng Review</h1>
            <p className="hero-subtitle">
              A magazine of motherhood, care, childhood, nursing, faith, and
              community life.
            </p>
            <div className="founding-line">
              She was my mother. She was a mother. She remains a mothering
              presence through every life this work touches.
            </div>
            <div className="hero-actions">
              <Link className="primary-button" href="/issue-one">
                Read the Latest Issue
              </Link>
              <Link className="secondary-button" href="/care-letter">
                Join the Care Letter
              </Link>
              <Link className="ghost-button" href="/support">
                Support the Institute
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Editorial magazine cover placeholder">
            <div className="photo-plate photo-plate-one" />
            <div className="photo-plate photo-plate-two" />
            <div className="cover-card">
              <p className="cover-kicker">Issue One · Founding Edition</p>
              <h2>She Was My Mother. She Was a Mother.</h2>
              <p>
                A living magazine of the hidden work that keeps society human.
              </p>
              <div className="cover-note-grid" aria-label="Magazine themes">
                {coverNotes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>
            <div className="visual-caption">Motherhood as Public Infrastructure</div>
          </div>
        </div>
      </section>

      <section className="doctrine-section" id="doctrine">
        <div className="section-label">Core Doctrine</div>
        <div className="doctrine-card">
          <div className="doctrine-mark">Care as civilization</div>
          <h2>Motherhood as Public Infrastructure</h2>
          <p>
            A mother is not only a private family figure. Motherhood is one of
            the hidden systems by which society survives. Before the school
            forms the child, somebody fed the child. Before the law protects the
            citizen, somebody preserved the child. Before the economy receives
            the worker, somebody raised the person. Before the nation counts
            population, mothers carried life.
          </p>
        </div>
      </section>

      <section className="manifesto-strip" aria-label="Editorial manifesto">
        <div>
          <p className="eyebrow">Editorial Manifesto</p>
          <h2>Care is not soft.</h2>
        </div>
        <p>
          Care is structure. Care is memory. Care is discipline. Care is the
          first architecture of civilization.
        </p>
      </section>

      <section className="promise-section" id="editorial-promise">
        <div className="section-heading">
          <p className="eyebrow">Editorial Promise</p>
          <h2>Our Editorial Promise</h2>
          <p>
            Florence Kaneng Review exists to treat care as serious public
            knowledge. We publish essays, interviews, letters, guides, and
            reflections on motherhood, child dignity, nursing wisdom, students,
            home life, faith, grief, and community.
          </p>
        </div>
        <div className="promise-intro">
          <p>
            We believe care is not merely private emotion. Care is one of the
            hidden infrastructures by which society survives.
          </p>
        </div>
        <div className="promise-grid">
          {editorialPromises.map((promise, index) => (
            <article className="promise-card" key={promise}>
              <span>0{index + 1}</span>
              <h3>{promise}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="desks-section" id="desks">
        <div className="section-heading">
          <p className="eyebrow">Magazine Desks</p>
          <h2>Where care becomes public knowledge.</h2>
          <p>
            The Review is organized into editorial desks that treat motherhood,
            nursing, childhood, students, faith, home, and community as serious
            subjects of reflection.
          </p>
        </div>
        <div className="desk-grid">
          {desks.map((desk, index) => (
            <article className="desk-card" key={desk.title}>
              <div className="desk-topline">
                <div className="desk-number">0{index + 1}</div>
                <span>{desk.tag}</span>
              </div>
              <div className="desk-image" aria-hidden="true" />
              <p className="card-label">{desk.label}</p>
              <h3>{desk.title}</h3>
              <p>{desk.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="issue-section" id="issue">
        <div className="section-heading issue-heading">
          <p className="eyebrow">Featured Issue</p>
          <h2>Issue One: She Was My Mother. She Was a Mother.</h2>
          <p>
            The first issue establishes the founding memory and public doctrine
            of Florence Kaneng Review. The article previews below now open into
            full static magazine pages.
          </p>
        </div>
        <div className="issue-layout">
          <Link className="lead-story article-link-card" href={`/articles/${leadArticle.slug}`}>
            <div className="lead-image" aria-hidden="true">
              <span>Founding Essay</span>
            </div>
            <div className="lead-story-content">
              <p className="card-label">
                {leadArticle.issue} · {leadArticle.category} · {leadArticle.readingTime}
              </p>
              <h3>{leadArticle.title}</h3>
              <p>{leadArticle.excerpt}</p>
              <span className="read-time">Read lead story</span>
            </div>
          </Link>

          <div className="supporting-stories">
            {supportingArticles.map((article) => (
              <Link className="article-card article-link-card" href={`/articles/${article.slug}`} key={article.slug}>
                <div className="image-placeholder">
                  <span>{article.category}</span>
                </div>
                <div className="article-content">
                  <p className="card-label">
                    {article.issue} · {article.category} · {article.readingTime}
                  </p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="read-time">Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="issue-actions">
          <Link className="primary-button" href="/issue-one">
            Open Full Issue Archive
          </Link>
        </div>
      </section>

      <section className="support-clarity-section" id="support">
        <div className="clarity-card">
          <div>
            <p className="eyebrow">Support Clarity</p>
            <h2>How This Magazine Supports the Institute</h2>
            <p>
              Florence Kaneng Review may be financed through sponsorships,
              memberships, partnerships, guides, events, newsletters, and future
              print editions. A defined portion of future proceeds may support
              Florence Kaneng Institute&apos;s care, education, and community
              programmes.
            </p>
          </div>
          <div className="clarity-grid" aria-label="Possible support paths">
            {supportPaths.map((path) => (
              <span key={path}>{path}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="future-section" id="future-formats">
        <div className="section-heading">
          <p className="eyebrow">Publication Structure</p>
          <h2>Future Formats</h2>
          <p>
            The Review can grow beyond articles into a practical media house of
            care: letters, interviews, guides, lectures, partnerships, and a
            living archive of testimony.
          </p>
        </div>
        <div className="future-grid">
          {futureFormats.map((format) => (
            <article className="future-card" key={format}>
              <div className="future-icon" aria-hidden="true" />
              <h3>{format}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="letter-section" id="letter">
        <div>
          <p className="eyebrow">Monthly Newsletter</p>
          <h2>Join The Care Letter</h2>
          <p>
            A monthly letter on motherhood, child dignity, nursing wisdom,
            student care, family life, faith, grief, and community.
          </p>
        </div>
        <form className="newsletter-form">
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="you@example.com" />
            <button type="submit">Subscribe</button>
          </div>
          <p className="form-note">Newsletter signup is a visual placeholder for now.</p>
        </form>
      </section>

      <section className="support-section" id="institute">
        <div className="support-panel">
          <div className="support-image" aria-hidden="true" />
          <div className="support-copy">
            <p className="eyebrow">Institute Support</p>
            <h2>Published in support of Florence Kaneng Institute</h2>
            <p>
              Florence Kaneng Review is built as a living magazine of care. A
              portion of future proceeds, partnerships, and sponsorships may
              support the Institute&apos;s care, education, and community programmes.
            </p>
            <Link className="primary-button" href="/support">
              Support the Institute
            </Link>
          </div>
        </div>
      </section>
      <DisclaimerNote />
      <Footer />
    </main>
  );
}
