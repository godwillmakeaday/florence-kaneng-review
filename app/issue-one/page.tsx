import type { Metadata } from "next";
import Link from "next/link";
import { issueOneArticles } from "../../data/articles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DisclaimerNote } from "../components/DisclaimerNote";

export const metadata: Metadata = {
  title: "Issue One · Florence Kaneng Review",
  description:
    "The founding issue of Florence Kaneng Review, dedicated to motherhood, care, nursing wisdom, grief, faith, child dignity, and community life.",
};

export default function IssueOnePage() {
  const leadArticle = issueOneArticles[0];
  const supportingArticles = issueOneArticles.slice(1);

  return (
    <main>
      <section className="article-hero issue-one-hero">
        <Navbar className="article-nav" />

        <div className="article-hero-grid issue-page-grid">
          <div>
            <p className="eyebrow">Founding Edition</p>
            <h1>Issue One: She Was My Mother. She Was a Mother.</h1>
            <p className="article-deck">
              The founding issue of Florence Kaneng Review, dedicated to motherhood, care, nursing wisdom,
              grief, faith, child dignity, and the hidden infrastructure of family and community life.
            </p>
            <div className="article-meta">
              <span>Florence Kaneng Review</span>
              <span>Issue One</span>
              <span>{issueOneArticles.length} articles</span>
            </div>
          </div>
          <div className="article-visual-panel issue-visual" aria-label="Issue One magazine cover panel">
            <span>Issue One</span>
            <strong>She Was My Mother. She Was a Mother.</strong>
          </div>
        </div>
      </section>

      <section className="issue-note-section">
        <div className="issue-note-card">
          <p className="eyebrow">Issue Note</p>
          <h2>The first issue establishes the grammar of care.</h2>
          <p>
            This issue begins with memory but refuses to stop at memory. It treats motherhood, nursing,
            childhood, home life, and community as serious public knowledge. Its guiding doctrine is simple:
            motherhood is public infrastructure.
          </p>
        </div>
      </section>

      <section className="issue-section issue-archive-section">
        <div className="section-heading issue-heading">
          <p className="eyebrow">Issue Archive</p>
          <h2>Read Issue One</h2>
          <p>
            A founding collection of essays that gives Florence Kaneng Review its editorial voice, public
            doctrine, and care-centered institutional direction.
          </p>
        </div>

        {leadArticle ? (
          <div className="issue-layout">
            <Link className="lead-story article-link-card" href={`/articles/${leadArticle.slug}`}>
              <div className="lead-image" aria-hidden="true">
                <span>{leadArticle.category}</span>
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
        ) : null}
      </section>

      <section className="manifesto-strip" aria-label="Editorial doctrine strip">
        <div>
          <p className="eyebrow">Editorial Doctrine</p>
          <h2>Motherhood as Public Infrastructure</h2>
        </div>
        <p>
          Before the school forms the child, somebody fed the child. Before the law protects the citizen,
          somebody preserved the child. Before the economy receives the worker, somebody raised the person.
        </p>
      </section>
      <DisclaimerNote />
      <Footer />
    </main>
  );
}
