export function VisualPanel({
  label,
  title,
  className = "",
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`article-visual-panel ${className}`.trim()} aria-label={`${label} visual panel`}>
      <span>{label}</span>
      <strong>{title}</strong>
    </div>
  );
}
