import { ref, onMounted, onUnmounted } from 'vue';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, firebaseReady } from '@/firebase';
import { defaultSite } from '@/data/defaults';

/**
 * Reactive site content doc. Live-updates whenever the admin saves changes.
 * Falls back to defaults when Firebase isn't configured.
 *
 * All non-Achievements editable content lives in this one document so a
 * single Save in the admin atomically updates everything.
 */
export function useSiteContent() {
    const data    = ref(structuredClone(defaultSite));
    const loading = ref(firebaseReady);
    const error   = ref(null);
    let unsub = null;

    onMounted(() => {
        if (!firebaseReady) return;
        try {
            unsub = onSnapshot(
                doc(db, 'content', 'site'),
                (snap) => {
                    if (snap.exists()) {
                        // Shallow-merge each top-level key so a missing field
                        // in Firestore falls back to the default value.
                        const fs = snap.data();
                        data.value = {
                            ...defaultSite,
                            ...fs,
                            profile:  { ...defaultSite.profile,  ...(fs.profile  || {}) },
                            home:     { ...defaultSite.home,     ...(fs.home     || {}) },
                            about:    { ...defaultSite.about,    ...(fs.about    || {}) },
                            stack:    { ...defaultSite.stack,    ...(fs.stack    || {}) },
                        };
                    }
                    loading.value = false;
                },
                (err) => {
                    error.value   = err;
                    loading.value = false;
                    console.warn('[useSiteContent] Firestore error, using defaults:', err.message);
                }
            );
        } catch (err) {
            error.value   = err;
            loading.value = false;
        }
    });

    onUnmounted(() => { if (unsub) unsub(); });

    return { data, loading, error };
}
