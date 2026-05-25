<template>
    <div class="about">
        <h1 class="about__title">I am a
            <span>Junior </span>
            web developer who codes in the <span>Vue</span> framework
            and ships full projects with <span>Claude AI</span>.</h1>
        <img src="@/assets/img/me2.png" alt="" class="about__img">
    </div>
    <div class="aboutp">
        <h2 class="aboutp__title">About Me</h2>
        <p class="aboutp__desc">
            I'm a front-end developer focused on Vue 3, SCSS and clean component design.
            Recently I've been using Claude AI as a coding partner — "vibe coding" full
            projects end-to-end, from the first idea to a deployed product. My latest
            example is ScamGuard Bot: a Telegram bot that flags suspicious accounts and
            scans every link or file for malware, built and shipped to Railway in a couple
            of evenings.
        </p>

        <h2 class="aboutp__title">Work Experience</h2>
        <div class="aboutp__info">
            <div class="aboutp__info_top">
                <h3 class="info__top_title">Junior Web Developer</h3>
                <button class="info__top_btn">Full Time</button>
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
                <h3 class="info__top_title">Photomontage Specialist</h3>
                <button class="info__top_btn">Full Time</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item">
                    <img src="../assets/img/lern.svg" alt="">
                    <p>Online</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/location.svg" alt="">
                    <p>Tashkent</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/calendar.png" alt="">
                    <p>05.07.2022 – 29.08.2023</p>
                </div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Microsoft Office Specialist</h3>
                <button class="info__top_btn">Full Time</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item">
                    <img src="../assets/img/lern.svg" alt="">
                    <p>Little Harvard</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/location.svg" alt="">
                    <p>Tashkent</p>
                </div>
                <div class="info__down_item">
                    <img src="../assets/img/calendar.png" alt="">
                    <p>25.08.2021 – 16.04.2022</p>
                </div>
            </div>
            <div class="line"></div>
        </div>

        <h2 class="aboutp__title">Education</h2>
        <div class="aboutp__info">
            <div class="aboutp__info_top">
                <h3 class="info__top_title">Proweb Modern Professions Courses</h3>
                <button class="info__top_btn">Full Time</button>
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
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped></style>
