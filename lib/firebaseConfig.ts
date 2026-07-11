// Firebase web config for the paperthoughts-app project.
//
// This is the PUBLISHABLE client config — it is designed to ship in
// client-side code and is safe to commit. It is not a secret: it only
// identifies the project. Actual protection comes from Firestore security
// rules (firestore.rules) and App Check, never from hiding these values.
//
// NOTE: GitHub secret scanning flags the apiKey as a "Google API Key"
// (resolved as false positive, 2026-07-10). It ships in the browser
// bundle regardless of git, so hiding it is theater. It is HTTP-referrer
// restricted to our domains + localhost in Google Cloud. Do not move it to
// an env var expecting secrecy; do not rewrite history to "remove" it.
//
// Currently unused; the feedback form (web issue #4) will lazy-load the
// Firebase SDK and initialize with this. Kept here so that work is a
// pure import.
export const firebaseConfig = {
  projectId: 'paperthoughts-app',
  appId: '1:154081480562:web:fd7dda37b2922035ac97eb',
  storageBucket: 'paperthoughts-app.firebasestorage.app',
  apiKey: 'AIzaSyCqRTbIiMVkr4GOMRuy0-AF_rVCxiBE0B0',
  authDomain: 'paperthoughts-app.firebaseapp.com',
  messagingSenderId: '154081480562',
};
