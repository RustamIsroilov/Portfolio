/**
 * Firebase initialisation.
 *
 * The values below are read from Vite env vars. Create a `.env.local` file
 * in the project root (NOT committed) with the values from your Firebase
 * project's "Web app" config — see README for the 5-minute walkthrough.
 *
 * If env vars are missing the app still runs, but any Firestore call will
 * fail silently (the page falls back to hardcoded defaults). That means the
 * portfolio works even before you've set Firebase up.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth }       from 'firebase/auth';

const cfg = {
    apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseReady = Boolean(cfg.apiKey && cfg.projectId);

let app = null, db = null, auth = null;
if (firebaseReady) {
    app  = initializeApp(cfg);
    db   = getFirestore(app);
    auth = getAuth(app);
}

export { app, db, auth };
