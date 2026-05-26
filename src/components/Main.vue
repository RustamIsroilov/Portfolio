<template>
    <section class="langs">
        <h2 class="langs__title">My Tech Stack</h2>
        <p class="langs__desc">Technologies I've been working with recently</p>

        <div class="langs__grid">
            <div class="techtile" v-for="t in techs" :key="t.name">
                <img :src="iconUrl(t.icon)" :alt="t.name" class="techtile__icon">
                <span class="techtile__name">{{ t.name }}</span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { data: site } = useSiteContent();
const techs = computed(() => site.value.homeTech || []);

// Resolve "html.svg" → bundled URL via Vite glob. Filenames must live in
// src/assets/img/. External https:// URLs pass through unchanged.
const iconMap = import.meta.glob('@/assets/img/*', { eager: true, query: '?url', import: 'default' });
function iconUrl(name) {
    if (!name) return '';
    if (name.startsWith('http')) return name;
    const key = Object.keys(iconMap).find(k => k.endsWith('/' + name));
    return key ? iconMap[key] : '';
}
</script>

<style lang="scss" scoped>
.langs {
    max-width: 1100px;
    margin: 80px auto 0;
    padding: 0 24px;
}
.langs__title { margin: 0 0 6px; }
.langs__desc  { margin: 0 0 32px; }

.langs__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 18px;
}
.techtile {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 12px; padding: 22px 14px;
    background: var(--bg-1); border: 1px solid var(--border); border-radius: 14px;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    aspect-ratio: 1 / 1;
}
.techtile:hover { transform: translateY(-3px); border-color: var(--brand-from); background: var(--bg-2); }
.techtile__icon { width: 56px; height: 56px; object-fit: contain; }
.techtile__name { color: var(--text-2); font-family: Poppins, system-ui, sans-serif; font-size: 14px; font-weight: 500; text-align: center; line-height: 1.2; }

@media (max-width: 980px) {
    .langs       { margin-top: 60px; }
    .langs__grid { grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .techtile__icon { width: 44px; height: 44px; }
}
@media (max-width: 640px) {
    .langs__grid     { grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .techtile        { padding: 16px 8px; gap: 8px; }
    .techtile__icon  { width: 36px; height: 36px; }
    .techtile__name  { font-size: 12px; }
}
</style>
