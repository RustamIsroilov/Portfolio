<template>
    <div class="ach">
        <header class="ach__head">
            <h1 class="ach__title">Achievements</h1>
            <p class="ach__sub">Exam scores, milestones &amp; study highlights</p>
        </header>

        <!-- IELTS card with sub-scores -->
        <section class="ach__card ach__ielts">
            <div class="ach__card_head">
                <span class="ach__badge ach__badge--gold">IELTS</span>
                <h2 class="ach__big">{{ achievements.ielts.overall }}<small> / 9.0</small></h2>
            </div>
            <p class="ach__card_desc">Overall band — Academic</p>
            <div class="ielts__grid">
                <div class="ielts__item" v-for="s in achievements.ielts.sections" :key="s.label">
                    <span class="ielts__label">{{ s.label }}</span>
                    <span class="ielts__score">{{ s.score }}</span>
                </div>
            </div>
        </section>

        <div class="ach__row">
            <section class="ach__card">
                <span class="ach__badge ach__badge--blue">GPA</span>
                <h2 class="ach__big">{{ achievements.gpa.value }}<small> / {{ achievements.gpa.scale }}</small></h2>
                <p class="ach__card_desc">{{ achievements.gpa.note }}</p>
            </section>

            <section class="ach__card">
                <span class="ach__badge ach__badge--pink">SAT</span>
                <h2 class="ach__big ach__big--soft">{{ achievements.sat.status }}</h2>
                <p class="ach__card_desc">{{ achievements.sat.note }}</p>
            </section>
        </div>

        <h2 class="ach__section">Study &amp; Milestones</h2>
        <div class="ach__timeline">
            <article class="tl__item" v-for="m in achievements.milestones" :key="m.title">
                <div class="tl__dot"></div>
                <div class="tl__body">
                    <h3 class="tl__title">{{ m.title }}</h3>
                    <p class="tl__org">{{ m.org }}</p>
                    <p class="tl__when">{{ m.when }}</p>
                    <p class="tl__desc">{{ m.desc }}</p>
                </div>
            </article>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { useAchievements } from '@/composables/useAchievements';

const { data: achievements } = useAchievements();
</script>

<style lang="scss" scoped>
.ach {
    max-width: 1100px;
    margin: 80px auto 60px;
    padding: 0 20px;
    color: var(--text-1);
    font-family: Poppins, system-ui, sans-serif;
}

.ach__head { text-align: center; margin-bottom: 50px; }
.ach__title {
    font-size: 52px;
    line-height: 1.1;
    margin: 0 0 10px;
    background: var(--brand-grad-h);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
}
.ach__sub { color: var(--text-mute); font-size: 20px; margin: 0; }

.ach__card {
    background: var(--bg-1);
    border-radius: 18px;
    padding: 28px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

.ach__card_head { display: flex; justify-content: space-between; align-items: center; }
.ach__card_desc { color: var(--text-mute); margin: 4px 0 18px; font-size: 16px; }

.ach__big {
    font-size: 56px;
    line-height: 1;
    margin: 12px 0;
    color: var(--text-1);
    font-weight: 700;
}
.ach__big small { font-size: 22px; color: var(--text-mute); font-weight: 400; }
.ach__big--soft { font-size: 32px; }

.ach__badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.ach__badge--gold { background: #fcd34d; color: #422006; }   /* amber, calmer */
.ach__badge--blue { background: #7dd3fc; color: #0c4a6e; }   /* sky      */
.ach__badge--pink { background: #f9a8d4; color: #500724; }   /* rose, muted */

.ach__ielts { margin-bottom: 24px; }

.ielts__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 14px;
}
.ielts__item {
    background: var(--bg-0);
    border-radius: 12px;
    padding: 16px 8px;
    text-align: center;
}
.ielts__label { display: block; font-size: 13px; color: var(--text-mute); }
.ielts__score { display: block; font-size: 28px; font-weight: 700; color: var(--text-1); margin-top: 6px; }

.ach__row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }

.ach__section {
    font-size: 32px;
    margin: 30px 0 20px;
    color: var(--text-2);
    text-align: center;
}

.ach__timeline { position: relative; padding-left: 24px; }
.ach__timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(180deg, var(--brand-from), var(--brand-to));
    border-radius: 2px;
}
.tl__item { position: relative; margin: 0 0 24px; }
.tl__dot {
    position: absolute;
    left: -22px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--text-1);
    box-shadow: 0 0 0 4px var(--bg-1), 0 0 0 6px var(--brand-from);
}
.tl__body { background: var(--bg-1); border-radius: 12px; padding: 16px 20px; }
.tl__title { margin: 0 0 4px; color: var(--text-1); font-size: 20px; }
.tl__org   { margin: 0; color: var(--text-mute); font-size: 14px; }
.tl__when  { margin: 4px 0; color: var(--text-mute); font-size: 13px; }
.tl__desc  { margin: 8px 0 0; color: var(--text-1); font-size: 15px; line-height: 1.5; }

@media (max-width: 980px) {
    .ach__title { font-size: 38px; }
    .ach__row { grid-template-columns: 1fr; }
    .ielts__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
    .ach__title { font-size: 28px; }
    .ach__big   { font-size: 40px; }
    .ach__big--soft { font-size: 24px; }
    .ach__section { font-size: 24px; }
}
</style>
