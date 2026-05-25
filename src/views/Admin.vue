<template>
    <div class="admin">
        <!-- Firebase not configured -->
        <div v-if="!firebaseReady" class="admin__notice">
            <h1>⚠️ Admin not set up yet</h1>
            <p>
                The admin panel needs Firebase to be configured. Open the
                <code>README.md</code> file and follow the
                <strong>"Set up the admin panel"</strong> section
                (5–10 minutes, free Google account).
            </p>
        </div>

        <!-- Login form -->
        <form v-else-if="!user" class="admin__login" @submit.prevent="signIn">
            <h1>Admin sign-in</h1>
            <p class="admin__hint">
                Use the email &amp; password you set up in your Firebase project
                (Authentication → Users).
            </p>
            <input v-model="loginEmail"    type="email"    placeholder="Email"    autocomplete="email"            required>
            <input v-model="loginPassword" type="password" placeholder="Password" autocomplete="current-password" required>
            <button type="submit" :disabled="busy">{{ busy ? 'Signing in…' : 'Sign in' }}</button>
            <p v-if="loginError" class="admin__error">{{ loginError }}</p>
        </form>

        <!-- Editor -->
        <div v-else class="admin__panel">
            <header class="admin__top">
                <div>
                    <h1>Edit Achievements</h1>
                    <p class="admin__hint">Signed in as <strong>{{ user.email }}</strong></p>
                </div>
                <button class="ghost" @click="signOutNow">Sign out</button>
            </header>

            <p v-if="status" :class="['admin__status', statusType]">{{ status }}</p>

            <!-- IELTS -->
            <section class="admin__card">
                <h2>IELTS</h2>
                <label>Overall band
                    <input type="number" step="0.5" min="0" max="9" v-model.number="form.ielts.overall">
                </label>
                <div class="admin__grid">
                    <label v-for="(s, i) in form.ielts.sections" :key="i">
                        {{ s.label }}
                        <input type="number" step="0.5" min="0" max="9" v-model.number="s.score">
                    </label>
                </div>
            </section>

            <!-- GPA -->
            <section class="admin__card">
                <h2>GPA</h2>
                <label>Value     <input type="text" v-model="form.gpa.value"></label>
                <label>Out of    <input type="text" v-model="form.gpa.scale"></label>
                <label>Caption   <input type="text" v-model="form.gpa.note"></label>
            </section>

            <!-- SAT -->
            <section class="admin__card">
                <h2>SAT</h2>
                <label>Status    <input type="text" v-model="form.sat.status"></label>
                <label>Caption   <input type="text" v-model="form.sat.note"></label>
            </section>

            <!-- Milestones -->
            <section class="admin__card">
                <header class="admin__cardhead">
                    <h2>Study &amp; Milestones</h2>
                    <button class="ghost" type="button" @click="addMilestone">+ Add</button>
                </header>

                <div v-for="(m, i) in form.milestones" :key="i" class="admin__milestone">
                    <label>Title      <input type="text" v-model="m.title"></label>
                    <label>Where      <input type="text" v-model="m.org"></label>
                    <label>When       <input type="text" v-model="m.when"></label>
                    <label>Description<textarea v-model="m.desc" rows="2"></textarea></label>
                    <button class="danger" type="button" @click="removeMilestone(i)">Remove</button>
                </div>
            </section>

            <div class="admin__save">
                <button type="button" @click="saveAll" :disabled="busy">
                    {{ busy ? 'Saving…' : 'Save all changes' }}
                </button>
                <button type="button" class="ghost" @click="resetForm">Discard</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    doc, getDoc, setDoc,
} from 'firebase/firestore';

import { auth, db, firebaseReady } from '@/firebase';
import { defaultAchievements } from '@/data/defaults';

// ── Auth state ────────────────────────────────────────────────
const user           = ref(null);
const loginEmail     = ref('');
const loginPassword  = ref('');
const loginError     = ref('');
const busy           = ref(false);
const status         = ref('');
const statusType     = ref('ok');     // 'ok' | 'err'

let original = JSON.stringify(defaultAchievements);
const form = reactive(JSON.parse(original));

function flash(msg, type = 'ok') {
    status.value     = msg;
    statusType.value = type;
    setTimeout(() => (status.value = ''), 3500);
}

if (firebaseReady) {
    onAuthStateChanged(auth, (u) => {
        user.value = u;
        if (u) loadFromFirestore();
    });
}

async function loadFromFirestore() {
    try {
        const snap = await getDoc(doc(db, 'content', 'achievements'));
        const incoming = snap.exists() ? snap.data() : defaultAchievements;
        Object.assign(form, JSON.parse(JSON.stringify(incoming)));
        original = JSON.stringify(form);
    } catch (e) {
        flash('Could not load: ' + e.message, 'err');
    }
}

async function signIn() {
    if (!firebaseReady) return;
    busy.value = true;
    loginError.value = '';
    try {
        await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    } catch (e) {
        loginError.value = e.code === 'auth/invalid-credential'
            ? 'Wrong email or password.'
            : e.message;
    } finally {
        busy.value = false;
    }
}

async function signOutNow() {
    await signOut(auth);
}

async function saveAll() {
    busy.value = true;
    try {
        await setDoc(doc(db, 'content', 'achievements'), JSON.parse(JSON.stringify(form)));
        original = JSON.stringify(form);
        flash('Saved! Your portfolio will update within a few seconds.');
    } catch (e) {
        flash('Save failed: ' + e.message, 'err');
    } finally {
        busy.value = false;
    }
}

function resetForm() {
    Object.assign(form, JSON.parse(original));
    flash('Discarded unsaved changes.');
}

function addMilestone() {
    form.milestones.push({ title: 'New milestone', org: '', when: '', desc: '' });
}
function removeMilestone(i) {
    form.milestones.splice(i, 1);
}
</script>

<style lang="scss" scoped>
.admin {
    max-width: 760px;
    margin: 60px auto;
    padding: 0 20px;
    color: var(--text-1);
    font-family: Poppins, system-ui, sans-serif;
}
h1 { font-size: 32px; margin: 0 0 6px; color: var(--text-1); }
h2 { font-size: 22px; margin: 0 0 14px; color: var(--text-1); }

.admin__hint  { color: var(--text-mute); margin: 0 0 18px; font-size: 14px; }
.admin__notice {
    background: var(--bg-1); border-radius: 14px; padding: 28px;
    border-left: 4px solid var(--warn-fg);
}
.admin__notice code { background: var(--bg-0); padding: 2px 8px; border-radius: 4px; }

.admin__login {
    display: flex; flex-direction: column; gap: 14px;
    background: var(--bg-1); border-radius: 14px; padding: 28px;
    max-width: 420px; margin: 0 auto;
}
.admin__login input,
.admin__card  input,
.admin__card  textarea {
    background: var(--bg-input); color: var(--text-1); border: 1px solid var(--border);
    border-radius: 8px; padding: 10px 12px; font: inherit; width: 100%;
}
.admin__login input:focus,
.admin__card  input:focus,
.admin__card  textarea:focus { outline: 2px solid var(--brand-from); }

button {
    background: var(--brand-grad-h);
    color: #fff; border: 0; border-radius: 8px;
    padding: 12px 18px; font-weight: 600; cursor: pointer;
    font: inherit; transition: opacity .2s;
}
button:disabled { opacity: .5; cursor: not-allowed; }
button.ghost  { background: var(--bg-2); }
button.danger { background: var(--err-bg); color: var(--err-fg); }

.admin__error  { color: var(--err-fg); margin: 0; font-size: 14px; }
.admin__status {
    padding: 10px 14px; border-radius: 8px; margin: 0 0 18px;
    font-size: 14px;
}
.admin__status.ok  { background: var(--ok-bg);  color: var(--ok-fg); }
.admin__status.err { background: var(--err-bg); color: var(--err-fg); }

.admin__top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 24px; }

.admin__card {
    background: var(--bg-1); border-radius: 14px; padding: 22px;
    margin-bottom: 18px; display: flex; flex-direction: column; gap: 12px;
}
.admin__cardhead { display: flex; justify-content: space-between; align-items: center; }
.admin__grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
.admin__card label {
    display: flex; flex-direction: column; gap: 6px;
    font-size: 13px; color: var(--text-mute);
}

.admin__milestone {
    background: var(--bg-0); border-radius: 10px; padding: 14px;
    display: flex; flex-direction: column; gap: 8px;
}

.admin__save { display: flex; gap: 10px; margin-top: 12px; }

@media (max-width: 640px) {
    .admin__grid { grid-template-columns: 1fr; }
    .admin__top  { flex-direction: column; }
    .admin__save { flex-direction: column; }
    .admin__save button { width: 100%; }
}
</style>
