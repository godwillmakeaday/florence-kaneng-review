import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "../../../data/articles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { DisclaimerNote } from "../../components/DisclaimerNote";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found · Florence Kaneng Review",
    };
  }

  return {
    title: `${article.title} · Florence Kaneng Review`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <main>
      <section className="article-hero">
        <Navbar className="article-nav" />

        <div className="article-hero-grid">
          <div>
            <p className="eyebrow">{article.issue} · {article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-deck">{article.deck}</p>
            <div className="article-meta">
              <span>{article.author}</span>
              <span>{article.date}</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
          <div className="article-visual-panel" aria-label={`${article.category} visual panel`}>
            <span>{article.category}</span>
            <strong>Motherhood. Care. Memory. Community.</strong>
          </div>
        </div>
      </section>

      <article className="article-shell">
        <div className="article-body">
          {article.body.map((block, index) => (
            <section className="article-block" key={`${article.slug}-${index}`}>
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.pullQuote ? <blockquote>{block.pullQuote}</blockquote> : null}
            </section>
          ))}

          {article.medicalDisclaimer ? (
            <aside className="article-disclaimer">
              <p className="eyebrow">Public Interest Note</p>
              <p>
                This article is a public-interest reflection and educational care text. It does not replace
                professional medical, psychological, emergency, legal, or other qualified guidance.
              </p>
            </aside>
          ) : null}

          <aside className="published-note">
            <p>Published by <strong>Florence Kaneng Review</strong>.</p>
            <p>A publication of <strong>Florence Kaneng Institute</strong>.</p>
          </aside>
        </div>
      </article>

      <section className="related-section">
        <div className="section-heading">
          <p className="eyebrow">Continue Reading</p>
          <h2>Related articles from Issue One</h2>
        </div>
        <div className="related-grid">
          {relatedArticles.map((related) => (
            <Link className="article-card article-link-card" href={`/articles/${related.slug}`} key={related.slug}>
              <div className="image-placeholder">
                <span>{related.category}</span>
              </div>
              <div className="article-content">
                <p className="card-label">
                  {related.issue} · {related.category} · {related.readingTime}
                </p>
                <h3>{related.title}</h3>
                <p>{related.excerpt}</p>
                <span className="read-time">Read article</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="article-return-actions">
          <Link className="secondary-button dark-button" href="/issue-one">
            Return to Issue One
          </Link>
          <Link className="ghost-button dark-ghost" href="/">
            Return to Magazine Home
          </Link>
        </div>
      </section>
      <DisclaimerNote />
      <Footer />
    </main>
  );
}
