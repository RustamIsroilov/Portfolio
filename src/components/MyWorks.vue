<template>
    <div class="works">
        <h2 class="works__title">Projects</h2>
        <p class="works__desc">Things I've built so far</p>
        <div class="works__cards">
            <div class="works__cards_card" v-for="p in projects" :key="p.title">
                <img :src="iconUrl(p.image)" :alt="p.title" class="card__img">
                <div class="card__desc">
                    <h3 class="card__desc_title">{{ p.title }}</h3>
                    <p class="card__desc_text">{{ p.desc }}</p>
                    <p class="card__desc_info" v-if="p.tech">Tech stack : {{ p.tech }}</p>
                    <div class="card__desc_links">
                        <div class="card__desc_link" v-if="p.telegram">
                            <img src="../assets/img/link.png" alt="">
                            <a :href="p.telegram" target="_blank" rel="noopener">Open in Telegram</a>
                        </div>
                        <div class="card__desc_link" v-if="p.liveUrl">
                            <img src="../assets/img/link.png" alt="">
                            <a :href="p.liveUrl" target="_blank" rel="noopener">Live Preview</a>
                        </div>
                        <div class="card__desc_git" v-if="p.codeUrl">
                            <img src="../assets/img/github.svg" alt="">
                            <a :href="p.codeUrl" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { data: site } = useSiteContent();
const projects = computed(() => site.value.projects || []);

const iconMap = import.meta.glob('@/assets/img/*', { eager: true, query: '?url', import: 'default' });
function iconUrl(name) {
    if (!name) return '';
    if (name.startsWith('http')) return name;
    const key = Object.keys(iconMap).find(k => k.endsWith('/' + name));
    return key ? iconMap[key] : '';
}
</script>

<style lang="scss" scoped></style>
