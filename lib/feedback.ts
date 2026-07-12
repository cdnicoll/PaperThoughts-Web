import { firebaseConfig } from './firebaseConfig';

// The Firebase SDK is loaded lazily, only when someone actually submits.
// The marketing pages and /support itself never pull it into their bundle
// until this runs — keeps the static site lean. Firestore's default cache
// is in-memory (no IndexedDB, no cookies), so the "No cookies. Obviously."
// footer stays literally true.

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

export async function submitFeedback(input: {
  message: string;
  email: string;
  source: 'home' | 'support' | 'roadmap';
}) {
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
  const db = await getDb();
  // Shape must match firestore.rules exactly (create-only, validated).
  await addDoc(collection(db, 'feedback'), {
    message: input.message.trim(),
    email: input.email.trim(),
    source: input.source,
    createdAt: serverTimestamp(),
  });
}
