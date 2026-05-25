<template>
    <div class="works">
        <h2 class="card__title">Projects</h2>
        <p class="works__desc">Things I've built so far</p>
        <div class="works__cards">
            <!-- Featured: ScamGuard Bot -->
            <div class="project__card">
                <img src="@/assets/img/scamguard.svg" alt="ScamGuard" class="card__img">
                <div class="card__desc">
                    <div class="card__title">ScamGuard Bot</div>
                    <div class="card__text">
                        Telegram bot that flags suspicious accounts. It estimates each
                        sender's account age, looks them up in a shared scammer database,
                        cross-checks them against the CAS anti-spam list, and scans every
                        URL and file in their messages with VirusTotal. Vibe-coded
                        end-to-end with Claude AI, hosted 24/7 on Railway.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://t.me/safityprovider_bot" target="_blank" rel="noopener">Open in Telegram</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/safitybot" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="project__card">
                <img src="@/assets/img/card_1.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">Notes</div>
                    <div class="card__text">Notes is my debut project in Vue.js. An intuitive note-taking experience
                        — create, edit and organize notes with ease, sync across devices and manage them with
                        multi-functional shortcuts.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://smirfayoz.github.io/todo-list/" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/Notes" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="project__card">
                <div class="card__desc">
                    <div class="card__title">dBurger</div>
                    <div class="card__text">Welcome to the world of taste with dBurger — my first JS project.
                        Discover mouth-watering burgers, order online, and enjoy a unique design and
                        user-friendly interface.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/dBurger/" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/dBurger" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/card_2.png" alt="" class="card__img">
            </div>

            <div class="project__card">
                <img src="@/assets/img/card_6.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">CinePhile</div>
                    <div class="card__text">A cinematic journey, my top Vue.js project. Explore a variety of
                        movies, conveniently book tickets online, and enjoy a modern design and unique user
                        experience.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://fakhad.github.io/movie-app" target="_blank" rel="noopener">View Site</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="project__card">
                <div class="card__desc">
                    <div class="card__title">Totembo</div>
                    <div class="card__text">My favorite HTML and CSS project — a collection of stylish watches.
                        Conveniently choose and order online with an intuitive interface and impeccable service.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/Totembo/" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/Totembo" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/card_7.jpg" alt="" class="card__img">
            </div>

            <div class="project__card">
                <img src="@/assets/img/card_4.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">Apreture</div>
                    <div class="card__text">My best website written in HTML and CSS — your virtual studio assistant.
                        Order unique photographs created by professionals through an intuitive interface and enjoy a
                        personalized approach to each photo.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/document/" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/document" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="project__card">
                <div class="card__desc">
                    <div class="card__title">Vue Cinema</div>
                    <div class="card__text">
                        My most significant project in HTML and CSS. Find information about films, schedules
                        and purchase tickets online. Thank you for choosing our virtual cinema!
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/VueCinema/" target="_blank" rel="noopener">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/VueCinema" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/card_3.png" alt="" class="card__img">
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped>
.works {
    align-items: center;
    padding: 0 20px;
}

.project__card {
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    flex-wrap: wrap;
    max-width: 1500px;
}

.card__img {
    border-radius: 10px;
    height: 400px;
    width: 700px;
    max-width: 100%;
    object-fit: cover;
}

.card__desc {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 20px;
}

.card__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;

    &_btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        background-color: var(--bg-1);
        border-radius: 5px;
        transition: 0.4s;

        & img {
            height: 30px;
            width: 30px;
        }

        & a {
            background: var(--brand-grad);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: Poppins;
            font-size: 20px;
            font-weight: 300;
            letter-spacing: -1px;
        }
    }

    &_btn:hover {
        background: var(--bg-2);
        border-radius: 10px;
        cursor: pointer;
    }
}

.card__title {
    background: var(--brand-grad);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: center;
}

.card__text {
    color: var(--text-mute);
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    max-width: 600px;
    width: 100%;
}

/* ────── Tablet ────── */
@media (max-width: 1024px) {
    .project__card { gap: 40px; margin: 30px auto; }
    .card__img { height: 300px; width: 100%; max-width: 560px; }
    .card__title { font-size: 42px; line-height: 52px; }
    .card__text { font-size: 18px; line-height: 28px; }
}

/* ────── Mobile ────── */
@media (max-width: 640px) {
    .project__card { gap: 20px; margin: 20px auto; }
    .card__img { height: auto; max-height: 220px; width: 100%; }
    .card__title { font-size: 30px; line-height: 38px; }
    .card__text { font-size: 16px; line-height: 24px; }
    .card__btns { gap: 16px; }
    .card__btns_btn a { font-size: 16px; }
    .card__btns_btn img { height: 22px; width: 22px; }
}
</style>
