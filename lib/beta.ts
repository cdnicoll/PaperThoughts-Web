import { firebaseConfig } from './firebaseConfig';

// Beta signup write. Firebase SDK is lazy-loaded, same as the feedback
// path — the page never pulls it in until someone submits.
//
// The document doubles as the record AND the trigger for the "Trigger
// Email from Firestore" extension (Option A): the extension watches
// beta_signups and emails the `to` address using `message`. The `to` is
// locked to hello@paperthoughts.app in firestore.rules so a client can
// never turn this into an open relay. Until the extension is installed
// the extra fields just sit as data (forward-compatible).

const NOTIFY = 'hello@paperthoughts.app';

let dbPromise: Promise<import('firebase/firestore').Firestore> | null = null;

async function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeApp, getApps } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

export async function submitBetaSignup(input: { name: string; email: string }) {
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
  const db = await getDb();
  const name = input.name.trim();
  const email = input.email.trim();
  await addDoc(collection(db, 'beta_signups'), {
    name,
    email,
    to: NOTIFY,
    message: {
      subject: `New beta signup: ${name}`,
      text: `${name} (${email}) asked to join the Paper Thoughts beta.`,
    },
    source: 'beta',
    createdAt: serverTimestamp(),
  });
}
