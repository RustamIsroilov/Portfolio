<template>
        <div class="about">
        <h1 class="about__title">I have studied   
            listed below languages in
            <span>Proweb</span>
            learning center 
            </h1>
        <img src="@/assets/img/me.jpg" alt="" class="about__img">
    </div>

    <div class="stack">
        <h2 class="stack__title">My Tech Stack</h2>
        <p class="stack__desc"> Technologies I’ve been working with recently</p>
        <div class="stack__items">
            <div class="stack__items_item">
                <h3 class="item__title">HTML</h3>
                <img src="../assets/img/html.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">90%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">CSS</h3>
                <img src="../assets/img/css.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">90%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">JS</h3>
                <img src="../assets/img/js.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">70%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">Vue</h3>
                <img src="../assets/img/vue.png " alt="" class="stack__items_img1">
                <div class="stack__line1"></div>
                <h3 class="item__procent">75%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">SCSS</h3>
                <img src="../assets/img/scss.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">85%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">Vite</h3>
                <img src="../assets/img/vite.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">70%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">GitHub</h3>
                <img src="../assets/img/github.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">70%</h3>
            </div>
            <div class="stack__items_item">
                <h3 class="item__title">Git</h3>
                <img src="../assets/img/git.svg" alt="" class="stack__items_img">
                <div class="stack__line"></div>
                <h3 class="item__procent">90%</h3>
            </div>

        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Footer from '@/components/Footer.vue';


</script>

<style lang="scss" scoped></style>