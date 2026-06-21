import { Navbar } from "./Navbar";
import { VisualPanel } from "./VisualPanel";

export function PageHero({
  eyebrow,
  title,
  deck,
  meta,
  visualLabel,
  visualTitle,
  className = "page-hero",
  visualClassName = "page-visual-panel",
}: {
  eyebrow: string;
  title: string;
  deck: string;
  meta?: string[];
  visualLabel: string;
  visualTitle: string;
  className?: string;
  visualClassName?: string;
}) {
  return (
    <section className={`article-hero ${className}`.trim()}>
      <Navbar className="article-nav" />
      <div className="article-hero-grid page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="article-deck">{deck}</p>
          {meta && meta.length > 0 ? (
            <div className="article-meta">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </div>
        <VisualPanel label={visualLabel} title={visualTitle} className={visualClassName} />
      </div>
    </section>
  );
}
