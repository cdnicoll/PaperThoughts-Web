// Every string on the marketing page lives here (planning 06 §6):
// edit words without touching JSX.
//
// Voice: warm, plain, human. Contractions are fine and wanted. First
// person singular ("I") for anything personal, since it's one developer.
// Still: sentence case, short sentences, concrete nouns, no exclamation
// marks, no emoji, no hype, no paper-replacement claims.

export const site = {
  name: 'Paper Thoughts',
  title: 'Paper Thoughts, a handwriting journal for iPad',
  description:
    'A handwriting journal for iPad and Apple Pencil. Your ink, photos, and places stay in your iCloud, and nowhere else.',
  email: 'hello@paperthoughts.app',
};

export const nav = {
  features: 'Features',
  roadmap: 'Roadmap',
  support: 'Support',
};

export const hero = {
  headline: 'Paper Thoughts.',
  sub: 'A handwriting journal for iPad and Apple Pencil. Your ink, photos, and places stay in your iCloud, and nowhere else.',
  sheetAlt:
    'A handwritten journal entry on cream paper, with a doodle and a location line',
};

export const cta = {
  comingSoon: 'Coming soon to the App Store',
  badge: 'Download on the App Store',
};

export const pencil = {
  heading: 'Pick up the Pencil and write.',
  body: 'The pencil always draws, and your fingers never leave a mark. Write past the bottom of the page and it just keeps going.',
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
  body: 'Photos sit in little frames you place with your fingers. Add where you were with a tap, and it shows up as text, not a map.',
  subBeat: "No photo yet? Drop an empty frame now and add the picture tonight.",
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
      caption: 'A place with one tap, or drop the pin yourself.',
      alt: 'The location picker: a map of Kamloops with a dropped pin over a garden entry',
    },
    {
      img: 'gallery-details.png',
      device: 'ipad',
      caption: 'Location, mood, and tags, off to the side.',
      alt: 'The details panel beside an entry: title, tags, location, and a state of mind picker',
    },
    {
      img: 'gallery-dark.png',
      device: 'ipad',
      caption: 'Dark paper for writing at night.',
      alt: 'A hiking entry written in white ink on dark paper, with three photos',
    },
    {
      img: 'gallery-stats.png',
      device: 'ipad',
      caption: 'The days you wrote, and the places you wrote from.',
      alt: 'The insights screen: entry counts, a year of writing days, a calendar, and places',
    },
  ],
};

export const privacy = {
  // "I never see them" is the personal, solo-dev version of the brand line.
  heading: 'Your journals are stored in your iCloud. I never see them.',
  proof: ['No accounts.', 'No servers of mine.', 'Locked with Face ID.'],
};

// Pricing per app issue #92. Free tier has every feature, capped at 3
// journals / 5 entries each; Premium removes limits. PRICES ARE #92
// DEFAULTS — confirm against App Store Connect before the launch flip.
export const pricing = {
  heading: 'Free to write in.',
  body: "Every feature is free, up to three journals with five entries each. Premium lifts the limits for $3.99 a month, $24.99 a year, or $59.99 once and yours for good. Either way your writing is never locked, and you can export all of it whenever you want.",
};

// The feature table. Rows from the closed GitHub issues and
// 02-feature-inventory; tiers per app issue #92. Both columns check every
// feature on purpose. Only the Limits group differs.
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
        { name: 'Pencil-first canvas', line: 'The pencil always draws, and your fingers never mark the page.' },
        { name: 'Pages that grow', line: 'Write past the bottom and the page keeps going.' },
        { name: 'Paper styles', line: 'Blank, lined, grid, or dots, in three sizes.' },
        { name: 'Paper colours', line: 'Nine colours, including auto light and dark.' },
        { name: 'Journaling prompts', line: "A question to drop onto the page and answer in ink, for blank-page days." },
        { name: 'Typed entries', line: 'Serif type on the same paper, for keyboard days.' },
        { name: 'Dark mode', line: 'Your ink re-renders for dark paper.' },
      ],
    },
    {
      title: 'Keep',
      rows: [
        { name: 'Photos in frames', line: 'Place, tilt, and crop them with your fingers, then write around them.' },
        { name: 'Photo placeholders', line: 'Drop an empty frame now, add the picture tonight.' },
        { name: 'Location, one tap', line: 'Real place names, or drop the pin yourself.' },
        { name: 'State of mind', line: 'How the day felt, if you want it. Saved privately to Apple Health.' },
        { name: 'Works offline', line: 'Places and sync catch up when you are back.' },
      ],
    },
    {
      title: 'Organize',
      rows: [
        { name: 'Multiple journals', line: 'Six muted covers, each with its own paper.' },
        { name: 'Tags', line: 'Simple labels that filter across every journal.' },
        { name: 'Bookmarks', line: 'A whole entry, or a single handwritten passage.' },
        { name: 'A look back', line: 'Calendars of writing days and places. Never scores.' },
        { name: 'Home Screen widgets', line: 'Writing days and places, at a glance.' },
        { name: 'Recently Deleted', line: 'Thirty days to change your mind.' },
      ],
    },
    {
      title: 'Yours',
      rows: [
        { name: 'iCloud sync', line: 'Your iCloud, across your devices. No accounts of mine.' },
        { name: 'Face ID lock', line: 'The journal locks like a diary.' },
        { name: 'PDF and portable exports', line: 'Entries or whole journals, out anytime.' },
        { name: 'iPhone companion', line: 'Read anywhere, and jot a typed thought.' },
      ],
    },
  ],
};

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'Do I need an Apple Pencil?',
      a: "Yes. It's built around the Pencil, so the page always draws and your finger never smudges it. If you set the Pencil down, typed entries still work, and the iPhone companion lets you read and jot from anywhere.",
    },
    {
      q: 'What does it cost?',
      a: "Nothing to start. Every feature is free for three journals with five entries each. Premium lifts the limits for $3.99 a month, $24.99 a year, or $59.99 once. Either way your writing is never locked. You can read and export all of it, even if Premium lapses.",
    },
    {
      q: 'What about iPhone?',
      a: "There's an iPhone companion. You can read your whole journal, pinch into your ink, and jot a typed thought while you're out. Handwriting stays on iPad, where it belongs.",
    },
    {
      q: 'Where is my data?',
      a: "In your own iCloud, synced across your devices. I have no servers and no accounts, so I never see a word you write. Lock it with Face ID, and it all works offline.",
    },
    {
      q: 'Can I get my writing out?',
      a: "Anytime. Export a single entry or a whole journal as a PDF, or as a portable file you can keep or move elsewhere. It's your writing, so it's never trapped in the app.",
    },
    {
      q: 'Is there handwriting search?',
      a: "Not yet. You can filter by journal, place, tag, or date today. Searching the handwriting itself is coming once iPadOS supports it properly, instead of shipping something half-baked.",
    },
  ],
};

// Extra questions on the fuller /support page, on top of the main-page six.
export const supportExtras = [
  {
    q: 'What happens when I reach the free limit?',
    a: "Nothing you've written is touched. You keep full read and export access, and only making new journals or entries past the free limit asks you to go Premium.",
  },
  {
    q: 'Can I use it on more than one device?',
    a: 'Yes. Your journals sync through your own iCloud, so they show up on every iPad and iPhone signed in to the same Apple account.',
  },
  {
    q: 'How do I get back an entry I deleted?',
    a: 'Deleted entries wait in Recently Deleted for thirty days. Open it and restore anything before it clears.',
  },
  {
    q: 'How do I move an entry to another journal?',
    a: 'Open the entry details and pick a different journal. Its tags come along with it.',
  },
  {
    q: 'How do I lock the journal?',
    a: 'Turn on Face ID or Touch ID in Settings. The journal locks when you leave and asks to unlock when you come back.',
  },
];

// Main-page invitation. One developer, first person.
export const feedbackInvite = {
  heading: 'Tell me what you want next',
  sub: "Paper Thoughts is made by one person, and I read every note. Tell me about a feature you want, a rough edge, or just say hello.",
};

// Beta signup (below the hero). CASL-clean: they're asking for an invite,
// which is express consent to contact them. Dormant once config.ts flips
// to live — page.tsx stops rendering the section at launch.
export const betaSignup = {
  heading: 'Be part of the beta',
  sub: "Paper Thoughts is testing with a small group first. Leave your name and email and I'll send you an invite.",
  nameLabel: 'Name',
  namePlaceholder: 'Your name',
  emailLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  submit: 'Join the beta',
  submitting: 'Joining',
  success: "You're on the list. I'll be in touch soon.",
  error: "That didn't go through. Give it another try, or email hello@paperthoughts.app.",
};

// Feedback form mechanics, shared by both placements.
export const feedbackForm = {
  supportHeading: 'Send me a note',
  supportSub: 'Feedback, a feature you wish existed, or a question. I read everything.',
  messageLabel: 'Your note',
  messagePlaceholder: "What's on your mind?",
  emailLabel: 'Email',
  emailHint: "Optional, only if you'd like a reply.",
  emailPlaceholder: 'you@example.com',
  submit: 'Send',
  submitting: 'Sending',
  success: "Thanks, I've got it. I read everything.",
  error: "That didn't go through. Give it another try, or email hello@paperthoughts.app.",
};

// Roadmap (/roadmap). Direction, not commitment: no dates, no versions,
// nothing App Store review could read as a promised feature.
export const roadmap = {
  heading: "Where it's headed",
  intro:
    "Paper Thoughts is built by one person, out in the open. Here's what's on my mind. None of this is a promise or a date, just where things are going.",
  groups: [
    {
      title: 'On the way',
      items: [
        {
          name: 'Shape snapping',
          line: 'Draw a rough line, box, or circle and hold it, and it snaps into a clean shape.',
        },
        {
          name: 'Gentle reminders',
          line: 'An optional nudge to write, on your own schedule. Never a streak.',
        },
        {
          name: 'Start from a suggestion',
          line: "Start an entry from the day's moments, using Apple's private on-device Journaling Suggestions.",
        },
      ],
    },
    {
      title: 'Exploring',
      items: [
        {
          name: 'Handwriting search',
          line: 'Finding words inside your ink, once iPadOS supports it properly.',
        },
        {
          name: 'Markdown export',
          line: 'One more way to get your writing out, alongside PDF and journal files.',
        },
      ],
    },
  ],
  // Feature-request form at the end of the roadmap.
  formHeading: "Want something that's not here?",
  formSub: "Tell me what you'd like to see next. I read every note.",
};

export const footer = {
  note: 'No cookies. Obviously.',
  privacyLink: 'Privacy',
  supportLink: 'Support',
  roadmapLink: 'Roadmap',
};
