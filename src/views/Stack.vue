<template>
    <div class="about">
        <h1 class="about__title">
            <template v-for="(p, i) in titleParts" :key="i">
                <span v-if="p.brand">{{ p.text }}</span>
                <template v-else>{{ p.text }}</template>
            </template>
        </h1>
        <img src="@/assets/img/me-stack.jpg" alt="Rustam Isroilov" class="about__img about__img--landscape">
    </div>

    <div class="stack">
        <h2 class="stack__title">My Tech Stack</h2>
        <p class="stack__desc">Technologies I've been working with recently</p>
        <div class="stack__items">
            <div class="stack__items_item" v-for="t in site.stack.items" :key="t.name">
                <h3 class="item__title">{{ t.name }}</h3>
                <img :src="iconUrl(t.icon)" :alt="t.name" class="stack__items_img">
                <div class="stack__line" :style="{ background: `linear-gradient(90deg, var(--brand-from) ${t.percent}%, transparent ${t.percent + 5}%)` }"></div>
                <h3 class="item__procent">{{ t.percent }}%</h3>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { computed } from 'vue';
import Footer from '@/components/Footer.vue';
import { useSiteContent } from '@/composables/useSiteContent';
import { parseBrandText } from '@/composables/useBrandText';

const { data: site } = useSiteContent();
const titleParts = computed(() => parseBrandText(site.value.stack.title));

const iconMap = import.meta.glob('@/assets/img/*', { eager: true, query: '?url', import: 'default' });
function iconUrl(name) {
    if (!name) return '';
    if (name.startsWith('http')) return name;
    const key = Object.keys(iconMap).find(k => k.endsWith('/' + name));
    return key ? iconMap[key] : '';
}
</script>

<style lang="scss" scoped></style>
