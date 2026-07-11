// Collapsible questions with native <details>/<summary>: no JavaScript,
// keyboard-accessible, and works the same in the static export. Closed by
// default so the section reads as a short, scannable list.
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq__item">
          <summary>{item.q}</summary>
          <p className="faq__answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
