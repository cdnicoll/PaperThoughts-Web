// Every string on the marketing page lives here (planning 06 §6):
// edit words without touching JSX. Word budget for the main page is
// under 350 (04 §3) — count before adding.
//
// Copy rules (brand readme, 04 §3): sentence case, short sentences,
// concrete nouns, no exclamation marks, no emoji, no paper-replacement
// claims. Every claim must be demonstrable in a screenshot.

export const site = {
  name: 'Paper Thoughts',
  title: 'Paper Thoughts — a quiet journal for iPad',
  description:
    'A handwriting journal for iPad and Apple Pencil. Your ink, your photos, your places, in your iCloud and nowhere else.',
  email: 'hello@paperthoughts.app',
};

export const hero = {
  headline: 'Paper Thoughts.',
  sub: 'A handwriting journal for iPad and Apple Pencil. Your ink, your photos, your places, in your iCloud and nowhere else.',
  sheetAlt:
    'A handwritten journal entry on cream paper, with a doodle and a location line',
};

export const cta = {
  comingSoon: 'Coming soon to the App Store',
  badge: 'Download on the App Store',
};

export const pencil = {
  heading: 'Pick up the Pencil and write.',
  body: 'The pencil always draws. Fingers never leave a mark. Pages grow as you write, and nothing gets between you and the page.',
  imageAlt: 'The writing canvas with the tool picker open and ink mid-stroke',
};

export const paper = {
  heading: 'Choose your paper.',
  body: 'Blank, lined, grid, or dots. The same entry reads a little differently on each.',
  journals: 'Keep more than one notebook. Muted covers, each with its own paper.',
  styles: [
    { key: 'blank', label: 'Blank' },
    { key: 'lined', label: 'Lined' },
    { key: 'grid', label: 'Grid' },
    { key: 'dots', label: 'Dots' },
  ],
};

export const photos = {
  heading: 'Your photos and places, on the page.',
  body: 'Photos sit in little frames you place with your fingers. Location is one tap and a quiet line of text.',
  subBeat: 'No photo yet? Drop an empty frame now and add the picture tonight.',
  // Two slides, same crop window: the empty frame, then the photo in it.
  slides: [
    {
      img: 'photos-empty.png',
      alt: 'Handwriting beside an empty photo frame, waiting for a picture',
      label: 'Before: an empty frame on the page',
    },
    {
      img: 'photos-crop.png',
      alt: 'The same page with a photo of a mountain lake in the frame',
      label: 'After: the photo in place',
    },
  ],
};

export const gallery = {
  shots: [
    {
      img: 'gallery-location.png',
      device: 'ipad',
      caption: 'A place, one tap. Or drop the pin yourself.',
      alt: 'The location picker: a map of Kamloops with a dropped pin over a garden entry',
    },
    {
      img: 'gallery-details.png',
      device: 'ipad',
      caption: 'Location, mood, and tags, in the margins.',
      alt: 'The details panel beside an entry: title, tags, location, and a state of mind picker',
    },
    {
      img: 'gallery-dark.png',
      device: 'ipad',
      caption: 'Dark paper, when the day calls for it.',
      alt: 'A hiking entry written in white ink on dark paper, with three photos',
    },
    {
      img: 'gallery-stats.png',
      device: 'ipad',
      caption: 'A quiet look back: the days you wrote, the places you wrote from.',
      alt: 'The insights screen: entry counts, a year of writing days, a calendar, and places',
    },
  ],
};

export const privacy = {
  // Verbatim from brand/readme.md via 04 §2.
  heading: 'Your journals are stored in your iCloud. We never see them.',
  proof: ['No accounts.', 'No servers of ours.', 'Locked with Face ID.'],
};

// Pricing per app issue #92 (2026-07-10): free tier has every feature,
// capped at 3 journals / 5 entries per journal; Premium removes the
// limits. PRICES ARE #92 DEFAULTS — confirm against App Store Connect
// before the launch flip. "No subscription. Ever." stays retired; the
// trust line (never locked, always exportable) is an App Store
// requirement AND the pitch.
export const pricing = {
  heading: 'Free to write in.',
  body: 'Every feature is free, up to three journals with five entries each. Premium removes the limits: $3.99 a month, $24.99 a year, or $59.99 once, yours forever. Your writing is never locked. Read and export everything, always.',
};

// The feature table. Rows mined from the closed GitHub issues and
// 02-feature-inventory; tiers per app issue #92. Both tier columns check
// every feature ON PURPOSE — no feature gates is the story. Only the
// Limits group differs.
export const features = {
  heading: "What's inside",
  sub: 'Every feature, in both tiers. Premium removes the limits.',
  columns: ['Free', 'Premium'],
  limits: {
    title: 'Limits',
    rows: [
      { name: 'Journals', line: '', free: '3', premium: 'Unlimited' },
      { name: 'Entries per journal', line: '', free: '5', premium: 'Unlimited' },
      {
        name: 'Read and export',
        line: 'Never locked, even if Premium lapses.',
        free: 'Always',
        premium: 'Always',
      },
    ],
  },
  groups: [
    {
      title: 'Write',
      rows: [
        { name: 'Pencil-first canvas', line: 'The pencil always draws; fingers never mark the page.' },
        { name: 'Pages that grow', line: 'Write past the bottom and the page appends.' },
        { name: 'Paper styles', line: 'Blank, lined, grid, or dots, in three sizes.' },
        { name: 'Paper colours', line: 'Nine colours, including auto light and dark.' },
        { name: 'Typed entries', line: 'Serif type on the same paper, for keyboard days.' },
        { name: 'Dark mode', line: 'Your ink re-renders for dark paper.' },
      ],
    },
    {
      title: 'Keep',
      rows: [
        { name: 'Photos in frames', line: 'Place, tilt, and crop with your fingers; write around them.' },
        { name: 'Photo placeholders', line: 'Drop an empty frame now, add the picture tonight.' },
        { name: 'Location, one tap', line: 'Real place names, or drop the pin yourself.' },
        { name: 'State of mind', line: 'How the day felt, if you want it.' },
        { name: 'Works offline', line: 'Places and sync catch up when you are back.' },
      ],
    },
    {
      title: 'Organize',
      rows: [
        { name: 'Multiple journals', line: 'Six muted covers, each with its own paper.' },
        { name: 'Tags', line: 'Quiet labels that filter across every journal.' },
        { name: 'Bookmarks', line: 'An entry, or a single handwritten passage.' },
        { name: 'A quiet look back', line: 'Calendars of writing days and places. Never scores.' },
        { name: 'Home Screen widgets', line: 'Writing days and places, at a glance.' },
        { name: 'Recently Deleted', line: 'Thirty days to change your mind.' },
      ],
    },
    {
      title: 'Yours',
      rows: [
        { name: 'iCloud sync', line: 'Your iCloud, across your devices. No accounts of ours.' },
        { name: 'Face ID lock', line: 'The journal locks like a diary.' },
        { name: 'PDF and portable exports', line: 'Entries or whole journals, out anytime.' },
        { name: 'iPhone companion', line: 'Read anywhere; jot a typed thought.' },
      ],
    },
  ],
};

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'Do I need an Apple Pencil?',
      a: 'Yes. It is built for it. Typed entries work without one.',
    },
    {
      q: 'What does it cost?',
      a: 'Nothing to start. Every feature is free for three journals with five entries each. Premium removes the limits, from $3.99 a month or $59.99 once.',
    },
    {
      q: 'What about iPhone?',
      a: 'Read everything and jot typed thoughts. Ink lives on iPad, on purpose.',
    },
    {
      q: 'Where is my data?',
      a: 'In your iCloud. We have no servers and no accounts.',
    },
    {
      q: 'Can I get my writing out?',
      a: 'PDF or portable journal files, anytime.',
    },
    {
      q: 'Is there handwriting search?',
      a: 'Not yet. It is coming when iPadOS supports it properly.',
    },
  ],
};

export const footer = {
  note: 'No cookies. Obviously.',
  privacyLink: 'Privacy',
  supportLink: 'Support',
};
