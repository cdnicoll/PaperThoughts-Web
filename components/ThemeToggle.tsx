// Plain button; the inline script in layout.tsx wires the click.
// The sun shows when dark is active (tap for light), the moon when
// light is active — CSS in globals.css picks which one is visible.
export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-toggle
      aria-label="Switch between light and dark"
    >
      <svg
        className="theme-toggle__sun"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3.2" />
        <path d="M8 1.2v1.8M8 13v1.8M1.2 8H3M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3" />
      </svg>
      <svg
        className="theme-toggle__moon"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13.5 9.8A6 6 0 1 1 6.2 2.5a4.8 4.8 0 0 0 7.3 7.3Z" />
      </svg>
    </button>
  );
}
