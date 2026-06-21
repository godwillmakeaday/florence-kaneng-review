import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../../data/articles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DisclaimerNote } from "../components/DisclaimerNote";

export const metadata: Metadata = {
  title: "Articles · Florence Kaneng Review",
  description: "Read essays from Florence Kaneng Review on motherhood, care, nursing wisdom, students, faith, grief, and community life.",
};

const categories = Array.from(new Set(articles.map((article) => article.category)));

export default function ArticlesIndexPage() {
  const leadArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <main>
      <section className="article-hero page-hero">
        <Navbar className="article-nav" />
        <div className="article-hero-grid page-hero-grid">
          <div>
            <p className="eyebrow">Magazine Index</p>
            <h1>Articles</h1>
            <p className="article-deck">
              Essays, reflections, guides, and public-interest writing from Florence Kaneng Review.
              Each article treats care as serious public knowledge rather than generic advice.
            </p>
            <div className="article-meta">
              <span>{articles.length} articles</span>
              <span>Issue One</span>
              <span>Static archive</span>
            </div>
          </div>
          <div className="article-visual-panel page-visual-panel" aria-label="Article archive visual panel">
            <span>Archive</span>
            <strong>Motherhood. Care. Nursing Wisdom. Community.</strong>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Browse by Theme</p>
          <h2>A growing archive of care-centered writing.</h2>
          <p>
            These category chips are visual markers for now. They show the editorial range of the Review
            without requiring a database, CMS, or filtering backend.
          </p>
        </div>
        <div className="chip-row" aria-label="Article category chips">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <section className="issue-section article-index-section">
        {leadArticle ? (
          <div className="issue-layout">
            <Link className="lead-story article-link-card" href={`/articles/${leadArticle.slug}`}>
              <div className="lead-image" aria-hidden="true">
                <span>{leadArticle.category}</span>
              </div>
              <div className="lead-story-content">
                <p className="card-label">{leadArticle.issue} · {leadArticle.category} · {leadArticle.readingTime}</p>
                <h3>{leadArticle.title}</h3>
                <p>{leadArticle.excerpt}</p>
                <span className="read-time">Read lead article</span>
              </div>
            </Link>
            <div className="supporting-stories">
              {otherArticles.map((article) => (
                <Link className="article-card article-link-card" href={`/articles/${article.slug}`} key={article.slug}>
                  <div className="image-placeholder">
                    <span>{article.category}</span>
                  </div>
                  <div className="article-content">
                    <p className="card-label">{article.issue} · {article.category} · {article.readingTime}</p>
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
      <DisclaimerNote />
      <Footer />
    </main>
  );
}
