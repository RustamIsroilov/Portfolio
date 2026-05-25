<template>
    <div class="about">
        <h1 class="about__title">I am a
            <span>Junior </span>
            web developer studying in the <span>Vue</span> ecosystem
            and shipping projects with <span>Claude AI</span>.</h1>
        <img src="@/assets/img/me-portrait.jpg" alt="Rustam Isroilov" class="about__img">
    </div>

    <div class="aboutp">
        <h2 class="aboutp__title">About Me</h2>

        <div class="aboutp__bio">
            <p>
                I'm Rustam Isroilov — born on <strong>17 April 2010 in Samarkand</strong>,
                the firstborn of a bankers' family. My mother taught art at a school and my
                father worked in banking. When I was one year old, my parents moved with me
                to <strong>Tashkent</strong>, where I've lived ever since. I don't remember
                Samarkand at all — Tashkent is the only home I know.
            </p>

            <p>
                From <strong>age 6 to about 10–11, I was a chess player</strong>. I trained
                seriously, climbed the rankings and earned the <em>1st sports category</em>
                title. My proudest result was finishing <strong>17th at the Sochi
                International Tournament 2019</strong>, out of thousands of participants.
                Then COVID-19 hit and everything stopped — no classes, no tournaments.
                After a long break my sharpness was gone, and I decided to close that
                chapter rather than chase a faded peak.
            </p>

            <p>
                In <strong>7th grade I discovered programming</strong> and enrolled at the
                Proweb Front-End course. Something clicked: building things became the
                way I think — projects turned into my <em>kind of art</em>. Every new
                idea felt like a small canvas: pick the layout, choose the palette, ship
                the result.
            </p>

            <p>
                In <strong>9th grade I decided I want to study abroad</strong> and use what
                I learn to build a life that helps real people. My goal isn't just "ship
                code" — it's to make tools and sites that <em>quietly make millions of
                small daily things easier</em>. ScamGuard Bot, the Telegram safety bot
                listed in my Projects page, is a first step toward that.
            </p>

            <p>
                Most recently I started <strong>using Claude AI as a coding partner</strong>
                — "vibe-coding" full projects end-to-end, from the first idea to a deployed
                product. Claude doesn't write my apps for me; it helps me move from
                concept to working software at the speed I always wished I could.
            </p>
        </div>

        <h2 class="aboutp__title">Education</h2>
        <div class="aboutp__info">
            <div class="aboutp__info_top">
                <h3 class="info__top_title">Public School #178</h3>
                <button class="info__top_btn">Completed</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>Tashkent, Uzbekistan</p></div>
                <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>Tashkent</p></div>
                <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>September 2016 – May 2019</p></div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Wisdom Private School</h3>
                <button class="info__top_btn">Completed</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>Tashkent, Uzbekistan</p></div>
                <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>Tashkent</p></div>
                <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>September 2019 – March 2020</p></div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Iste'dodli Kelajak Yoshlari — Private School</h3>
                <button class="info__top_btn info__top_btn--gold">Best Student ×3</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>Tashkent, Uzbekistan</p></div>
                <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>Tashkent</p></div>
                <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>March 2020 – May 2026</p></div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Proweb Learning Center — Web Development</h3>
                <button class="info__top_btn">Graduated</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>Proweb Learning Center</p></div>
                <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>Tashkent</p></div>
                <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>16.03.2023 – 16.01.2024</p></div>
            </div>
            <div class="line"></div>

            <div class="aboutp__info_top">
                <h3 class="info__top_title">Self-study with Claude AI</h3>
                <button class="info__top_btn">Ongoing</button>
            </div>
            <div class="aboutp__info_down">
                <div class="info__down_item"><img src="../assets/img/lern.svg" alt=""><p>Vibe-coding full projects end-to-end</p></div>
                <div class="info__down_item"><img src="../assets/img/location.svg" alt=""><p>Remote</p></div>
                <div class="info__down_item"><img src="../assets/img/calendar.png" alt=""><p>2025 – present</p></div>
            </div>
            <div class="line"></div>
        </div>

        <p class="aboutp__cta">
            See my exam scores and the full list of milestones on the
            <router-link to="/achievements">Achievements page →</router-link>
        </p>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
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
.aboutp__bio p {
    margin: 0 0 16px;
}
.aboutp__bio strong {
    color: var(--text-1);
    font-weight: 600;
}
.aboutp__bio em {
    color: var(--brand-from);
    font-style: normal;
    font-weight: 500;
}

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
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
}

@media (max-width: 640px) {
    .aboutp__bio { font-size: 16px; line-height: 1.65; padding: 0 4px; }
}
</style>
