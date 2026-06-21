import Link from "next/link";
import type { Article } from "../../data/articles";

export function ArticleCard({ article, label = "Read article" }: { article: Article; label?: string }) {
  return (
    <Link className="article-card article-link-card" href={`/articles/${article.slug}`}>
      <div className="image-placeholder">
        <span>{article.category}</span>
      </div>
      <div className="article-content">
        <p className="card-label">
          {article.issue} · {article.category} · {article.readingTime}
        </p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="read-time">{label}</span>
      </div>
    </Link>
  );
}
