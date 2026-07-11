// Firebase web config for the paperthoughts-app project.
//
// This is the PUBLISHABLE client config — it is designed to ship in
// client-side code and is safe to commit. It is not a secret: it only
// identifies the project. Actual protection comes from Firestore security
// rules (firestore.rules) and App Check, never from hiding these values.
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
