<template>
    <div class="about">
        <h1 class="about__title">I am a
            <span>Junior </span>
            web developer studying in the <span>Vue</span> ecosystem
            and shipping projects with <span>Claude AI</span>.</h1>
        <img src="@/assets/img/me2.png" alt="" class="about__img">
    </div>
    <div class="aboutp">
        <h2 class="aboutp__title">About Me</h2>
        <p class="aboutp__desc">
            I'm a front-end developer focused on Vue 3, SCSS and clean component design.
            Lately I've been using Claude AI as a coding partner — "vibe coding" full
            projects end-to-end, from the first idea to a deployed product. My latest
            example is ScamGuard Bot: a Telegram bot that flags suspicious accounts and
            scans every link or file for malware, built and shipped to Railway in a
            couple of evenings.
        </p>

        <h2 class="aboutp__title">Education</h2>
        <div class="aboutp__info">
            <div class="aboutp__info_top">
                <h3 class="info__top_title">Proweb Modern Professions Courses</h3>
                <button class="info__top_btn">Graduated</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item">
                    <img src="../assets/img/lern.svg" alt="">
                    <p>Proweb Learning Center</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/location.svg" alt="">
                    <p>Tashkent</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/calendar.png" alt="">
                    <p>16.03.2023 – 16.01.2024</p>
                </div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Self-study with Claude AI</h3>
                <button class="info__top_btn">Ongoing</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item">
                    <img src="../assets/img/lern.svg" alt="">
                    <p>Vibe-coding full projects end-to-end</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/location.svg" alt="">
                    <p>Remote</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/calendar.png" alt="">
                    <p>2025 – present</p>
                </div>
            </div>
            <div class="line"></div>
        </div>

        <p class="aboutp__cta">
            See my exam scores and study milestones on the
            <router-link to="/achievements">Achievements page →</router-link>
        </p>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped>
.aboutp__cta {
    color: #a7a7a7;
    font-family: Poppins;
    font-size: 18px;
    margin-top: 30px;
    text-align: center;
}
.aboutp__cta a {
    background: var(--brand-grad-h);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
}
</style>
