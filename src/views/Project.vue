<template>
    <div>

    </div>
    <div class="works">
        <h2 class="card__title">Projects</h2>
        <p class="works__desc">Things I’ve built so far</p>
        <div class="works__cards">
            <div class="project__card">
                <img src="@/assets/img/card_1.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">Notes</div>
                    <div class="card__text">Notes is my debut project in Vue.js ! This unique service provides an intuitive
                        note-taking experience. Create, edit and organize them with ease, enjoying synchronization across
                        all devices and multi-functionality for effective note management.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="">View Code</a>
                        </div>
                        

                    </div>

                </div>
            </div>
            <div class="project__card">

                <div class="card__desc">
                    <div class="card__title">dBurger</div>
                    <div class="card__text">Welcome to the world of taste with dBurger - my first JS project! Discover
                        mouth-watering burgers, order online, and enjoy fast delivery. Unique design and user-friendly
                        interface for your gastronomic pleasures.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/dBurger/">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/dBurger">View Code</a>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/card_2.png" alt="" class="card__img">
            </div>
            <div class="project__card">
                <img src="@/assets/img/card_6.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">CinePhile</div>
                    <div class="card__text">Welcome to a cinematic journey with CinePhile, my top Vue.js project! Explore
                        a variety of movies, conveniently book tickets online, enjoy modern design and unique user
                        experience.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://fakhad.github.io/movie-app">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__card">

                <div class="card__desc">
                    <div class="card__title">Totembo</div>
                    <div class="card__text">Welcome to the world of elegant temporary accessories with Totembo, my favorite
                        HTML and CSS project! Explore a collection of stylish watches, conveniently choose and order online,
                        enjoying an intuitive interface and impeccable service.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/Totembo/">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/Totembo">View Code</a>
                        </div>
                    </div>
                </div>
                
                <img src="@/assets/img/card_7.jpg" alt="" class="card__img">
            </div>
            <div class="project__card">
                <img src="@/assets/img/card_4.png" alt="" class="card__img">
                <div class="card__desc">
                    <div class="card__title">Aprature</div>
                    <div class="card__text">Welcome to my best website written in HTML and CSS Apprature - your virtual
                        studio assistant! Order unique photographs created by professionals. Use the intuitive interface to
                        easily place an order and enjoy a personalized approach to each photo.
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/document/">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/document">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__card">

                <div class="card__desc">
                    <div class="card__title">Vue Cinema</div>
                    <div class="card__text">
                        Welcome to the website of my cinema - my most significant project in HTML and CSS! Here you can
                        easily find information about films, schedules and purchase tickets online.   Thank you for choosing our virtual cinema!
                    </div>
                    <div class="card__btns">
                        <div class="card__btns_btn">
                            <img src="@/assets/img/link.png" alt="">
                            <a href="https://rustamisroilov.github.io/VueCinema/">View Site</a>
                        </div>
                        <div class="card__btns_btn">
                            <img src="@/assets/img/github.svg" alt="">
                            <a href="https://github.com/RustamIsroilov/VueCinema">View Code</a>
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
.works{
align-items: center;

    &_cards{
        display: flex;
        justify-content: center;
    }
}
.project__card {
    display: flex;
    gap: 120px;
    justify-content: center;
    align-items: center;
    margin: 50px auto;

}

.card__img {
    border-radius: 10px;
    height: 400px;
    width: 700px;
}

.card__desc {
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-height: 400;
    height: 100%;
    gap: 20px;


}

.card__btns {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 50px;

    &_btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        background-color: #252323;
        border-radius: 5px;
        transition: 0.4s;

        & img {
            height: 30px;
            width: 30px;
        }

        & a {
            background: var(--Gradient-Heading, linear-gradient(#13B0F5 -2.06%, #E70FAA 100%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 300;

            letter-spacing: -1px;

        }


    }

    &_btn:hover {
        background: linear-gradient(90deg, rgb(50, 114, 87), rgb(81, 255, 217));
        border-radius: 10px;
        cursor: pointer;


    }
}

.card__title {
    background: var(--Gradient-Heading, linear-gradient(#13B0F5 -2.06%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: center;
}

.card__text {
    color: var(--dark-content, #666);
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    /* 81.25% */
    display: flex;
    align-items: center;
    width: 600px;
    text-align: center;


}
</style>