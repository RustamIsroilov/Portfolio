<template>
    <div>
        <div class="footer">
            <div class="footer__items">
                <div class="footer__items_left">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <div class="footer__items_midle">
                    <p>+998 93 845 55 65</p>
                    <p>isroilovr10@gmail.com</p>
                </div>
                <div class="footer__items_right">
                    <img src="@/assets/img/github.svg" alt="">
                    <img src="@/assets/img/twitter.svg" alt="">
                    <img src="@/assets/img/insta.svg" alt="">
                </div>
            </div>

            <div class="footer__line"></div>

            <div class="footer__nav">
                <div class="footer__nav_right">
                    <router-link to="/about" class="footer__nav_right-item">About</router-link>|
                    <router-link to="/stack" class="footer__nav_right-item">Technologies</router-link>|
                    <router-link to="/project" class="footer__nav_right-item">Projects</router-link>|
                    <router-link to="/contact" class="footer__nav_right-item">Contact</router-link>|
                </div>
                <div class="footer__nav_left">
                    <p class="footer__nav_left-item">
                        Designed by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span> 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>