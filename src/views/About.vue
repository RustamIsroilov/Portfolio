<template>
    <div class="about">
        <h1 class="about__title">
            <template v-for="(p, i) in titleParts" :key="i">
                <span v-if="p.brand">{{ p.text }}</span>
                <template v-else>{{ p.text }}</template>
            </template>
        </h1>
        <img src="@/assets/img/me-portrait.jpg" alt="Rustam Isroilov" class="about__img">
    </div>

    <div class="aboutp">
        <h2 class="aboutp__title">About Me</h2>

        <div class="aboutp__bio">
            <p v-for="(para, i) in site.about.bio" :key="i" v-html="renderInline(para)"></p>
        </div>

        <h2 class="aboutp__title">Education</h2>
        <div class="aboutp__info">
            <template v-for="(e, i) in site.about.education" :key="i">
                <div class="aboutp__info_top">
                    <h3 class="info__top_title">{{ e.title }}</h3>
                    <button class="info__top_btn" :class="{ 'info__top_btn--gold': e.gold }">{{ e.badge || '—' }}</button>
                </div>
                <div class="aboutp__info_down">
                    <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>{{ e.org }}</p></div>
                    <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>{{ extractLocation(e.org) }}</p></div>
                    <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>{{ e.when }}</p></div>
                </div>
                <div class="line"></div>
            </template>
        </div>

        <p class="aboutp__cta">
            See my exam scores and the full list of milestones on the
            <router-link to="/achievements">Achievements page →</router-link>
        </p>
    </div>
    <Footer />
</template>

<script setup>
import { computed } from 'vue';
import Footer from '@/components/Footer.vue';
import { useSiteContent } from '@/composables/useSiteContent';
import { parseBrandText } from '@/composables/useBrandText';

const { data: site } = useSiteContent();
const titleParts = computed(() => parseBrandText(site.value.about.title));

// Minimal markdown: **bold**, *italic*. Safe — no HTML escapes beyond these.
function renderInline(text) {
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return esc(text)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function extractLocation(org) {
    // "Tashkent, Uzbekistan" → "Tashkent"; otherwise return as-is
    return (org || '').split(',')[0].trim();
}
</script>

<style lang="scss" scoped>
.aboutp__bio {
    max-width: 720px;
    margin: 0 auto 40px;
    color: var(--text-1);
    font-family: Poppins, system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.7;
}
.aboutp__bio p       { margin: 0 0 16px; }
.aboutp__bio strong  { color: var(--text-1); font-weight: 600; }
.aboutp__bio em      { color: var(--brand-from); font-style: normal; font-weight: 500; }

.info__top_btn--gold {
    background: rgba(252, 211, 77, 0.15);
    color: var(--warn-fg);
    border: 1px solid rgba(252, 211, 77, 0.4);
}

.aboutp__cta {
    color: var(--text-mute);
    font-family: Poppins;
    font-size: 18px;
    margin-top: 30px;
    text-align: center;
}
.aboutp__cta a {
    background: var(--brand-grad-h);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    font-weight: 600;
}

@media (max-width: 640px) {
    .aboutp__bio { font-size: 16px; line-height: 1.65; padding: 0 4px; }
}
</style>
