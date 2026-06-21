export function DisclaimerNote({ label = "Public Interest Note" }: { label?: string }) {
  return (
    <section className="advice-note" aria-label="Not medical advice disclaimer">
      <p className="eyebrow">{label}</p>
      <p>
        Florence Kaneng Review publishes public-interest reflections and educational care content.
        It does not replace professional medical, legal, psychological, or emergency advice.
      </p>
    </section>
  );
}
