import { gallery } from '@/content/copy';

// A chrome set-piece band: three framed devices back on the desk.
// Static row for now — a quiet crossfade cycle can come with the
// Phase 3 capture batch once there are more shots than frames.
// On mobile the row scroll-snaps sideways.
export function Gallery() {
  return (
    <section className="chrome gallery">
      <div className="gallery__row">
        {gallery.shots.map((shot, i) => (
          <figure
            key={shot.img}
            className="gallery__shot"
            data-reveal
            style={{ transitionDelay: `${(i % 2) * 80}ms` }}
          >
            <div className={shot.device === 'iphone' ? 'iphone' : 'ipad'}>
              <img src={`/img/${shot.img}`} alt={shot.alt} />
            </div>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
