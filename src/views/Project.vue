<template>
    <div class="works">
        <h2 class="card__title">Projects</h2>
        <p class="works__desc">Things I've built so far</p>
        <div class="works__cards">
            <div class="project__card"
                 v-for="(p, i) in projects"
                 :key="p.title"
                 :class="{ 'project__card--reverse': i % 2 === 1 }">
                <img :src="iconUrl(p.image)" :alt="p.title" class="card__img">
                <div class="card__desc">
                    <div class="card__title">{{ p.title }}</div>
                    <div class="card__text">{{ p.desc }}</div>
                    <div class="card__btns">
                        <div class="card__btns_btn" v-if="p.telegram">
                            <img src="@/assets/img/link.png" alt="">
                            <a :href="p.telegram" target="_blank" rel="noopener">Open in Telegram</a>
                        </div>
                        <div class="card__btns_btn" v-if="p.liveUrl">
                            <img src="@/assets/img/link.png" alt="">
                            <a :href="p.liveUrl" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn" v-if="p.codeUrl">
                            <img src="@/assets/img/github.svg" alt="">
                            <a :href="p.codeUrl" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { computed } from 'vue';
import Footer from '@/components/Footer.vue';
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

<style lang="scss" scoped>
.works   { align-items: center; padding: 0 20px; }
.project__card {
    display: flex; gap: 80px; justify-content: center; align-items: center;
    margin: 50px auto; flex-wrap: wrap; max-width: 1500px;
}
.project__card--reverse { flex-direction: row-reverse; }

.card__img {
    border-radius: 10px; height: 400px; width: 700px; max-width: 100%; object-fit: cover;
}
.card__desc {
    max-width: 600px; width: 100%;
    display: flex; flex-direction: column; text-align: center; justify-content: center; gap: 20px;
}
.card__btns {
    display: flex; align-items: center; justify-content: center; gap: 50px; flex-wrap: wrap;
    &_btn {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 20px; background-color: var(--bg-1); border-radius: 5px; transition: 0.4s;
        & img { height: 30px; width: 30px; }
        & a {
            background: var(--brand-grad);
            background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            font-family: Poppins; font-size: 20px; font-weight: 300; letter-spacing: -1px;
        }
    }
    &_btn:hover { background: var(--bg-2); border-radius: 10px; cursor: pointer; }
}
.card__title {
    background: var(--brand-grad);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    font-family: Poppins; font-size: 58px; font-weight: 700; line-height: 70px; letter-spacing: -1px; text-align: center;
}
.card__text {
    color: var(--text-mute); text-align: center;
    font-family: Poppins; font-size: 22px; font-weight: 400; line-height: 32px;
    max-width: 600px; width: 100%;
}

@media (max-width: 1024px) {
    .project__card           { gap: 40px; margin: 30px auto; flex-direction: column; }
    .project__card--reverse  { flex-direction: column; }
    .card__img               { height: 300px; width: 100%; max-width: 560px; }
    .card__title             { font-size: 42px; line-height: 52px; }
    .card__text              { font-size: 18px; line-height: 28px; }
}
@media (max-width: 640px) {
    .project__card     { gap: 20px; margin: 20px auto; }
    .card__img         { height: auto; max-height: 220px; width: 100%; }
    .card__title       { font-size: 30px; line-height: 38px; }
    .card__text        { font-size: 16px; line-height: 24px; }
    .card__btns        { gap: 16px; }
    .card__btns_btn a  { font-size: 16px; }
    .card__btns_btn img{ height: 22px; width: 22px; }
}
</style>
