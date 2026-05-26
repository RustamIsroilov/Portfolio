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
                Use the email &amp; password you set up in Firebase Console
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
                    <h1>Edit your site</h1>
                    <p class="admin__hint">Signed in as <strong>{{ user.email }}</strong></p>
                </div>
                <button class="ghost" @click="signOutNow">Sign out</button>
            </header>

            <p v-if="status" :class="['admin__status', statusType]">{{ status }}</p>

            <!-- Tabs -->
            <nav class="admin__tabs">
                <button v-for="t in tabs"
                        :key="t.id"
                        type="button"
                        :class="{ active: tab === t.id }"
                        @click="tab = t.id">
                    {{ t.label }}
                </button>
            </nav>

            <!-- ── PROFILE ─────────────────────────────────────────────── -->
            <section v-show="tab === 'profile'" class="admin__card">
                <h2>Profile &amp; Contact</h2>
                <label>Full name    <input v-model="form.site.profile.name"></label>
                <label>Email        <input v-model="form.site.profile.email"   type="email"></label>
                <label>Phone        <input v-model="form.site.profile.phone"></label>
                <label>GitHub URL   <input v-model="form.site.profile.github"></label>
                <label>Twitter URL  <input v-model="form.site.profile.twitter"></label>
                <label>Instagram URL<input v-model="form.site.profile.instagram"></label>
            </section>

            <!-- ── HOME ────────────────────────────────────────────────── -->
            <section v-show="tab === 'home'" class="admin__card">
                <h2>Home page</h2>
                <p class="admin__hint">
                    Wrap words in <code>{curly braces}</code> to apply the
                    brand gradient (sky→indigo) — e.g.
                    <code>"Hi I'm {Rustam}"</code>.
                </p>
                <label>Hero tagline
                    <textarea v-model="form.site.home.title" rows="4"></textarea>
                </label>
            </section>

            <!-- ── ABOUT ───────────────────────────────────────────────── -->
            <section v-show="tab === 'about'" class="admin__card">
                <h2>About page</h2>
                <p class="admin__hint">
                    Same <code>{brand}</code> wrapping for the tagline.
                    Bio paragraphs support <code>**bold**</code> and <code>*italic*</code>.
                </p>
                <label>Hero tagline
                    <textarea v-model="form.site.about.title" rows="3"></textarea>
                </label>

                <header class="admin__cardhead">
                    <h3 style="margin-top:8px">Bio paragraphs</h3>
                    <button class="ghost" type="button" @click="form.site.about.bio.push('')">+ Add paragraph</button>
                </header>
                <div v-for="(_, i) in form.site.about.bio" :key="i" class="admin__row">
                    <textarea v-model="form.site.about.bio[i]" rows="3" placeholder="Paragraph text…"></textarea>
                    <button class="danger" type="button" @click="form.site.about.bio.splice(i, 1)">✕</button>
                </div>
            </section>

            <!-- ── EDUCATION ───────────────────────────────────────────── -->
            <section v-show="tab === 'education'" class="admin__card">
                <header class="admin__cardhead">
                    <h2>Education</h2>
                    <button class="ghost" type="button" @click="addEducation">+ Add school</button>
                </header>
                <div v-for="(e, i) in form.site.about.education" :key="i" class="admin__milestone">
                    <label>Title (school)<input v-model="e.title"></label>
                    <label>Where (location)<input v-model="e.org"></label>
                    <label>Dates       <input v-model="e.when"></label>
                    <label>Badge text  <input v-model="e.badge" placeholder="e.g. Completed / Graduated / Best Student"></label>
                    <label class="admin__checkbox">
                        <input type="checkbox" v-model="e.gold">
                        Highlight with gold badge style
                    </label>
                    <button class="danger" type="button" @click="form.site.about.education.splice(i, 1)">Remove</button>
                </div>
            </section>

            <!-- ── TECH STACK ──────────────────────────────────────────── -->
            <section v-show="tab === 'stack'" class="admin__card">
                <h2>Tech Stack page</h2>
                <p class="admin__hint">Use <code>{brand}</code> in the tagline. Icons reference files in <code>src/assets/img/</code> (or external https:// URLs).</p>
                <label>Tagline
                    <textarea v-model="form.site.stack.title" rows="3"></textarea>
                </label>

                <header class="admin__cardhead">
                    <h3 style="margin-top:8px">Skills list</h3>
                    <button class="ghost" type="button" @click="addStackItem">+ Add skill</button>
                </header>
                <div v-for="(s, i) in form.site.stack.items" :key="i" class="admin__row admin__row--3">
                    <input v-model="s.name"             placeholder="Name (e.g. Vue)">
                    <input v-model="s.icon"             placeholder="Icon filename (e.g. vue.png)">
                    <input v-model.number="s.percent"   type="number" min="0" max="100" placeholder="%">
                    <button class="danger" type="button" @click="form.site.stack.items.splice(i, 1)">✕</button>
                </div>
            </section>

            <!-- ── HOME TECH GRID ──────────────────────────────────────── -->
            <section v-show="tab === 'stack'" class="admin__card">
                <header class="admin__cardhead">
                    <h2>Home page tech grid</h2>
                    <button class="ghost" type="button" @click="form.site.homeTech.push({ name: '', icon: '' })">+ Add tile</button>
                </header>
                <div v-for="(s, i) in form.site.homeTech" :key="i" class="admin__row">
                    <input v-model="s.name" placeholder="Name (e.g. Vue)">
                    <input v-model="s.icon" placeholder="Icon filename (e.g. vue.png)">
                    <button class="danger" type="button" @click="form.site.homeTech.splice(i, 1)">✕</button>
                </div>
            </section>

            <!-- ── PROJECTS ────────────────────────────────────────────── -->
            <section v-show="tab === 'projects'" class="admin__card">
                <header class="admin__cardhead">
                    <h2>Projects</h2>
                    <button class="ghost" type="button" @click="addProject">+ Add project</button>
                </header>
                <div v-for="(p, i) in form.site.projects" :key="i" class="admin__milestone">
                    <label>Title       <input v-model="p.title"></label>
                    <label>Description<textarea v-model="p.desc" rows="3"></textarea></label>
                    <label>Tech stack <input v-model="p.tech" placeholder="HTML, CSS, Vue, …"></label>
                    <label>Image      <input v-model="p.image" placeholder="filename in src/assets/img/ OR https://…"></label>
                    <label>Live URL   <input v-model="p.liveUrl"  placeholder="https://…"></label>
                    <label>Code URL   <input v-model="p.codeUrl"  placeholder="https://github.com/…"></label>
                    <label>Telegram   <input v-model="p.telegram" placeholder="https://t.me/…"></label>
                    <div class="admin__rowbtns">
                        <button class="ghost"  type="button" @click="moveProject(i, -1)" :disabled="i === 0">↑</button>
                        <button class="ghost"  type="button" @click="moveProject(i,  1)" :disabled="i === form.site.projects.length - 1">↓</button>
                        <button class="danger" type="button" @click="form.site.projects.splice(i, 1)">Remove</button>
                    </div>
                </div>
            </section>

            <!-- ── ACHIEVEMENTS ────────────────────────────────────────── -->
            <section v-show="tab === 'achievements'" class="admin__card">
                <h2>IELTS</h2>
                <label>Overall band
                    <input type="number" step="0.5" min="0" max="9" v-model.number="form.ach.ielts.overall">
                </label>
                <div class="admin__grid">
                    <label v-for="(s, i) in form.ach.ielts.sections" :key="i">
                        {{ s.label }}
                        <input type="number" step="0.5" min="0" max="9" v-model.number="s.score">
                    </label>
                </div>
            </section>

            <section v-show="tab === 'achievements'" class="admin__card">
                <h2>GPA</h2>
                <label>Value   <input v-model="form.ach.gpa.value"></label>
                <label>Out of  <input v-model="form.ach.gpa.scale"></label>
                <label>Caption <input v-model="form.ach.gpa.note"></label>
            </section>

            <section v-show="tab === 'achievements'" class="admin__card">
                <h2>SAT</h2>
                <label>Status  <input v-model="form.ach.sat.status"></label>
                <label>Caption <input v-model="form.ach.sat.note"></label>
            </section>

            <section v-show="tab === 'achievements'" class="admin__card">
                <header class="admin__cardhead">
                    <h2>Achievements milestones</h2>
                    <button class="ghost" type="button" @click="addMilestone">+ Add</button>
                </header>
                <div v-for="(m, i) in form.ach.milestones" :key="i" class="admin__milestone">
                    <label>Title       <input v-model="m.title"></label>
                    <label>Where       <input v-model="m.org"></label>
                    <label>When        <input v-model="m.when"></label>
                    <label>Description <textarea v-model="m.desc" rows="2"></textarea></label>
                    <label>Badges (one per line)
                        <textarea
                            :value="(m.badges || []).join('\n')"
                            @input="m.badges = $event.target.value.split('\n').map(s => s.trim()).filter(Boolean)"
                            rows="3"
                            placeholder="🏆 Best Student 2024–2025"></textarea>
                    </label>
                    <button class="danger" type="button" @click="form.ach.milestones.splice(i, 1)">Remove</button>
                </div>
            </section>

            <!-- Sticky save bar -->
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
import { ref, reactive } from 'vue';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, db, firebaseReady } from '@/firebase';
import { defaultAchievements, defaultSite } from '@/data/defaults';

// ── Tabs ──────────────────────────────────────────────────────────────
const tabs = [
    { id: 'profile',      label: 'Profile' },
    { id: 'home',         label: 'Home'    },
    { id: 'about',        label: 'About'   },
    { id: 'education',    label: 'Education' },
    { id: 'stack',        label: 'Tech Stack' },
    { id: 'projects',     label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
];
const tab = ref('profile');

// ── Auth state ────────────────────────────────────────────────────────
const user           = ref(null);
const loginEmail     = ref('');
const loginPassword  = ref('');
const loginError     = ref('');
const busy           = ref(false);
const status         = ref('');
const statusType     = ref('ok');

// ── Form state (both Firestore docs in one reactive blob) ─────────────
const blank = () => ({
    site: structuredClone(defaultSite),
    ach:  structuredClone(defaultAchievements),
});
let original = JSON.stringify(blank());
const form = reactive(blank());

function flash(msg, type = 'ok') {
    status.value = msg; statusType.value = type;
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
        const [siteSnap, achSnap] = await Promise.all([
            getDoc(doc(db, 'content', 'site')),
            getDoc(doc(db, 'content', 'achievements')),
        ]);
        const site = siteSnap.exists() ? siteSnap.data() : defaultSite;
        const ach  = achSnap.exists()  ? achSnap.data()  : defaultAchievements;
        // Deep-merge so missing keys fall back to defaults
        form.site = mergeDeep(structuredClone(defaultSite),         site);
        form.ach  = mergeDeep(structuredClone(defaultAchievements), ach);
        original  = JSON.stringify({ site: form.site, ach: form.ach });
    } catch (e) {
        flash('Could not load: ' + e.message, 'err');
    }
}

function mergeDeep(base, over) {
    if (Array.isArray(over)) return over;       // arrays REPLACE, not merge
    if (typeof over !== 'object' || over === null) return over;
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = mergeDeep(base?.[k], over[k]);
    return out;
}

async function signIn() {
    if (!firebaseReady) return;
    busy.value = true; loginError.value = '';
    try {
        await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    } catch (e) {
        loginError.value = e.code === 'auth/invalid-credential' ? 'Wrong email or password.' : e.message;
    } finally { busy.value = false; }
}

async function signOutNow() { await signOut(auth); }

async function saveAll() {
    busy.value = true;
    try {
        await Promise.all([
            setDoc(doc(db, 'content', 'site'),         JSON.parse(JSON.stringify(form.site))),
            setDoc(doc(db, 'content', 'achievements'), JSON.parse(JSON.stringify(form.ach))),
        ]);
        original = JSON.stringify({ site: form.site, ach: form.ach });
        flash('Saved! Your portfolio will update within a few seconds.');
    } catch (e) {
        flash('Save failed: ' + e.message, 'err');
    } finally { busy.value = false; }
}

function resetForm() {
    const orig = JSON.parse(original);
    Object.assign(form, orig);
    flash('Discarded unsaved changes.');
}

// ── Add / move helpers ────────────────────────────────────────────────
function addMilestone()  { form.ach.milestones.push({ title: 'New milestone', org: '', when: '', desc: '', badges: [] }); }
function addEducation()  { form.site.about.education.push({ title: 'New school', org: 'Tashkent, Uzbekistan', when: '', badge: 'Completed', gold: false }); }
function addStackItem()  { form.site.stack.items.push({ name: 'New skill', icon: '', percent: 50 }); }
function addProject() {
    form.site.projects.push({
        title: 'New project', desc: '', tech: '', image: '',
        liveUrl: '', codeUrl: '', telegram: '',
    });
}
function moveProject(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= form.site.projects.length) return;
    const arr = form.site.projects;
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
</script>

<style lang="scss" scoped>
.admin {
    max-width: 820px;
    margin: 60px auto;
    padding: 0 20px;
    color: var(--text-1);
    font-family: Poppins, system-ui, sans-serif;
}
h1 { font-size: 32px; margin: 0 0 6px; color: var(--text-1); }
h2 { font-size: 22px; margin: 0 0 14px; color: var(--text-1); }
h3 { font-size: 17px; margin: 0 0 8px; color: var(--text-2); }

.admin__hint  { color: var(--text-mute); margin: 0 0 18px; font-size: 14px; }
.admin__hint code { background: var(--bg-0); padding: 2px 6px; border-radius: 4px; color: var(--text-1); }
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
    padding: 10px 16px; font-weight: 600; cursor: pointer;
    font: inherit; transition: opacity .2s;
}
button:disabled { opacity: .5; cursor: not-allowed; }
button.ghost  { background: var(--bg-2); }
button.danger { background: var(--err-bg); color: var(--err-fg); }

.admin__error { color: var(--err-fg); margin: 0; font-size: 14px; }
.admin__status {
    padding: 10px 14px; border-radius: 8px; margin: 0 0 18px;
    font-size: 14px;
}
.admin__status.ok  { background: var(--ok-bg);  color: var(--ok-fg); }
.admin__status.err { background: var(--err-bg); color: var(--err-fg); }

.admin__top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 16px; }

.admin__tabs {
    display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 22px;
    border-bottom: 1px solid var(--border); padding-bottom: 10px;
}
.admin__tabs button {
    background: transparent; color: var(--text-mute);
    padding: 8px 14px; border-radius: 8px; font-weight: 500; font-size: 14px;
}
.admin__tabs button:hover  { background: var(--bg-1); color: var(--text-1); }
.admin__tabs button.active { background: var(--bg-1); color: var(--text-1); box-shadow: inset 0 -2px 0 var(--brand-from); }

.admin__card {
    background: var(--bg-1); border-radius: 14px; padding: 22px;
    margin-bottom: 18px; display: flex; flex-direction: column; gap: 12px;
}
.admin__cardhead { display: flex; justify-content: space-between; align-items: center; }
.admin__grid     { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.admin__card label {
    display: flex; flex-direction: column; gap: 6px;
    font-size: 13px; color: var(--text-mute);
}
.admin__checkbox { flex-direction: row !important; align-items: center; gap: 10px; }
.admin__checkbox input { width: auto; }

.admin__milestone {
    background: var(--bg-0); border-radius: 10px; padding: 14px;
    display: flex; flex-direction: column; gap: 8px;
}
.admin__row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 8px; align-items: stretch; }
.admin__row--3 { grid-template-columns: 2fr 2fr 1fr auto; }
.admin__row button { padding: 8px 12px; }
.admin__rowbtns { display: flex; gap: 8px; margin-top: 8px; }
.admin__rowbtns button { padding: 6px 12px; }

.admin__save {
    display: flex; gap: 10px; margin-top: 12px;
    position: sticky; bottom: 16px;
    background: var(--bg-0); padding: 12px; border-radius: 12px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
}
.admin__save button { flex: 1; padding: 14px; font-size: 15px; }

@media (max-width: 640px) {
    .admin__grid    { grid-template-columns: 1fr; }
    .admin__top     { flex-direction: column; }
    .admin__row     { grid-template-columns: 1fr; }
    .admin__row--3  { grid-template-columns: 1fr; }
    .admin__save    { flex-direction: column; }
    .admin__save button { width: 100%; }
}
</style>
