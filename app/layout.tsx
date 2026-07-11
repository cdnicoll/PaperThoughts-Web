import type { Metadata, Viewport } from 'next';
import { site } from '@/content/copy';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: '/icon-tile.svg' },
  // TODO Phase 3: openGraph image designed from the hero sheet (05 §7)
};

export const viewport: Viewport = {
  themeColor: '#14211B',
};

// Two tiny behaviors, no library:
// 1. Theme: apply any saved light/dark choice before first paint, and
//    wire the toggle buttons. Explicit choice overrides the OS scheme.
// 2. Scroll reveals: adds .js-reveal immediately (so CSS may hide),
//    then reveals each [data-reveal] once as it enters the viewport.
const revealScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
  function wireToggles() {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var html = document.documentElement;
        var explicit = html.getAttribute('data-theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var current = explicit || (systemDark ? 'dark' : 'light');
        var next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    });
  }
  document.documentElement.classList.add('js-reveal');
  function init() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('revealed');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }
  function rotator() {
    var root = document.querySelector('[data-rotator]');
    if (!root) return;
    var slides = root.querySelectorAll('[data-slide]');
    var dots = document.querySelectorAll('[data-dot]');
    if (slides.length < 2) return;
    var idx = 0;
    var timer = null;
    function show(n) {
      idx = n % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    }
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () {
        if (timer) { clearInterval(timer); timer = null; } // user takes over
        show(i);
      });
    });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(function () { show(idx + 1); }, 4000);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); wireToggles(); rotator(); });
  } else {
    init();
    wireToggles();
    rotator();
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        {children}
      </body>
    </html>
  );
}
