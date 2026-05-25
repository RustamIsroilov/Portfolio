# Portfolio — Rustam Isroilov

Personal portfolio built with Vue 3 + Vite. Includes a `/achievements` page
and an `/admin` panel backed by Firebase Firestore so the content can be
edited from a browser without touching code.

## Run locally

```sh
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Set up the admin panel (Firebase) — one-time, ~10 minutes

The Achievements page and the `/admin` panel use **Firebase Firestore**
(database) and **Firebase Auth** (login). Without this setup, the site still
works — Achievements falls back to hardcoded defaults — but `/admin` will
just show a "not set up yet" notice.

### Step 1 — Create a Firebase project

1. Go to **https://console.firebase.google.com** and sign in with your Google account.
2. Click **Add project** → name it whatever (e.g. `rustam-portfolio`) → continue.
3. You can disable Google Analytics — not needed.
4. After the project is created, click the **</> Web** icon (under "Get started by adding Firebase to your app").
5. Give the app a nickname → **Register app** (do NOT enable Hosting yet) → on the next screen Firebase shows your `firebaseConfig` object. Keep that tab open.

### Step 2 — Enable Authentication

1. Left sidebar → **Build → Authentication** → **Get started**.
2. **Sign-in method** tab → enable **Email/Password** → save.
3. **Users** tab → **Add user** → enter the email + password you want to use to log in to `/admin`. Save it somewhere safe.

### Step 3 — Enable Firestore

1. Left sidebar → **Build → Firestore Database** → **Create database**.
2. Pick **Production mode** → choose a location near you (eu-west, asia-south, etc.) → **Enable**.
3. Once it loads, click the **Rules** tab and paste this:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /content/{doc} {
         allow read: if true;                     // anyone can read site content
         allow write: if request.auth != null;    // only signed-in admins can write
       }
     }
   }
   ```
   Click **Publish**.

### Step 4 — Paste config into your project

Back in your local project folder, create a file named **`.env.local`** (note the dot) with these lines — copy each value from the `firebaseConfig` object Firebase showed you in Step 1.5:

```sh
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:1234567890:web:abc123
```

`.env.local` is gitignored — these values stay on your machine.

### Step 5 — Restart the dev server and log in

```sh
npm run dev
```

Open http://localhost:5173/admin → sign in with the email/password from Step 2.3 → edit any field → **Save all changes**.

The `/achievements` page updates within ~1 second. Anyone else viewing your portfolio will see the new content on their next visit.

## Updating from your phone

Once Firebase is set up, you don't need your laptop — just go to `https://your-portfolio-url/admin` on any device, sign in, edit, save.

## Deploying

For deployment to Firebase Hosting or any static host (Vercel, Netlify, GitHub Pages), make sure to set the same `VITE_FIREBASE_*` environment variables in that host's dashboard. Build with:

```sh
npm run build
```

The output goes to `dist/`.
