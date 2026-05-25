import { ref, onMounted, onUnmounted } from 'vue';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, firebaseReady } from '@/firebase';
import { defaultAchievements } from '@/data/defaults';

/**
 * Reactive achievements doc. Live-updates whenever the admin saves changes
 * in Firestore. Falls back to defaults when Firebase isn't configured yet.
 */
export function useAchievements() {
    const data    = ref(structuredClone(defaultAchievements));
    const loading = ref(firebaseReady);
    const error   = ref(null);
    let unsub = null;

    onMounted(() => {
        if (!firebaseReady) return;
        try {
            unsub = onSnapshot(
                doc(db, 'content', 'achievements'),
                (snap) => {
                    if (snap.exists()) data.value = snap.data();
                    loading.value = false;
                },
                (err) => {
                    error.value = err;
                    loading.value = false;
                    console.warn('[useAchievements] Firestore error, using defaults:', err.message);
                }
            );
        } catch (err) {
            error.value = err;
            loading.value = false;
        }
    });

    onUnmounted(() => { if (unsub) unsub(); });

    return { data, loading, error };
}
