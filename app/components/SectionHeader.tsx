import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
