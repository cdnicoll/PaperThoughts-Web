import { faq, features, paper, pencil, photos, pricing, privacy } from '@/content/copy';

// The 04 §2 skeleton, sections 2 through 8. Cream sections alternate
// canvas and sunken so the middle of the page reads as sheets of paper
// on the desk. Section order is the argument; don't reorder casually.
// Images are interim crops from the banked captures; Phase 3 replaces
// them with the final capture batch (07 manifest).

export function Pencil() {
  return (
    <section className="section" id="features">
      <div className="section__inner split">
        <div data-reveal>
          <h2>{pencil.heading}</h2>
          <p>{pencil.body}</p>
        </div>
        <div className="split__media" data-reveal style={{ transitionDelay: '80ms' }}>
          <img src="/img/pencil-crop.png" alt={pencil.imageAlt} />
        </div>
      </div>
    </section>
  );
}

export function PaperStyles() {
  return (
    <section className="section section--sunken">
      <div className="section__inner">
        <div data-reveal>
          <h2>{paper.heading}</h2>
          <p>{paper.body}</p>
        </div>
        <div className="paper-row">
          {paper.styles.map((s, i) => (
            <figure key={s.key} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <img src={`/img/swatch-${s.key}.png`} alt={`The ${s.label.toLowerCase()} paper style`} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
        <div style={{ marginTop: '5rem' }} data-reveal>
          <p className="centered">{paper.journals}</p>
          <div className="journals-device">
            <div className="ipad">
              <img
                src="/img/journals-ipad.png"
                alt="The journals drawer open over a feed of handwritten entries"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhotosPlaces() {
  return (
    <section className="section">
      <div className="section__inner split">
        <div data-reveal>
          <h2>{photos.heading}</h2>
          <p>{photos.body}</p>
          <p className="muted" style={{ marginTop: '0.75rem' }}>
            {photos.subBeat}
          </p>
        </div>
        {/* Empty frame ⇄ photo, same crop window: the placeholder story
            told as a two-slide rotator (interim images; 07 manifest) */}
        <div className="split__media" data-reveal style={{ transitionDelay: '80ms' }}>
          <div className="rotator" data-rotator>
            {photos.slides.map((slide, i) => (
              <img
                key={slide.img}
                className={`rotator__slide${i === 0 ? ' is-active' : ''}`}
                src={`/img/${slide.img}`}
                alt={slide.alt}
                data-slide
              />
            ))}
          </div>
          <div className="rotator__dots" role="tablist">
            {photos.slides.map((slide, i) => (
              <button
                key={slide.img}
                type="button"
                className={i === 0 ? 'is-active' : undefined}
                data-dot={i}
                aria-label={slide.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <section className="section section--sunken" id="privacy">
      {/* This section earns visual silence: text on paper, no screenshot (04 §2) */}
      <div className="section__inner section__inner--narrow" data-reveal>
        <h2 style={{ maxWidth: '22rem' }}>{privacy.heading}</h2>
        <ul className="privacy-proof">
          {privacy.proof.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="section">
      <div className="section__inner section__inner--narrow" data-reveal>
        <h2>{pricing.heading}</h2>
        <p>{pricing.body}</p>
      </div>
    </section>
  );
}

export function FeatureTable() {
  return (
    <section className="section section--sunken">
      <div className="section__inner" data-reveal>
        <h2>{features.heading}</h2>
        <p>{features.sub}</p>
        <table className="features">
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Feature</span>
              </th>
              <th scope="col" className="features__check-col">
                {features.includedLabel}
              </th>
            </tr>
          </thead>
          {features.groups.map((group) => (
            <tbody key={group.title}>
              <tr className="features__group">
                <th scope="rowgroup" colSpan={2}>
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <strong>{row.name}</strong>
                    <span>{row.line}</span>
                  </td>
                  <td className="features__check" aria-label="Included">
                    ✓
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section">
      <div className="section__inner section__inner--narrow" data-reveal>
        <h2>{faq.heading}</h2>
        <dl className="faq">
          {faq.items.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
