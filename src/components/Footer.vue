<template>
    <div class="footer">
        <div class="footer__items">
            <div class="footer__items_left">
                <router-link to="/" class="nav__brand">
                    <span class="nav__brand_first">Rustam</span>
                    <span class="nav__brand_last">Isroilov</span>
                </router-link>
            </div>
            <div class="footer__items_midle">
                <p>+998 93 845 55 65</p>
                <p>isroilovr10@gmail.com</p>
            </div>
            <div class="footer__items_right">
                <a href="https://github.com/RustamIsroilov" target="_blank" rel="noopener">
                    <img src="@/assets/img/github.svg" alt="GitHub">
                </a>
                <a href="https://twitter.com/RustambekI39739" target="_blank" rel="noopener">
                    <img src="@/assets/img/twitter.svg" alt="Twitter">
                </a>
                <a href="https://www.instagram.com/rustambek7875/" target="_blank" rel="noopener">
                    <img src="@/assets/img/insta.svg" alt="Instagram">
                </a>
            </div>
        </div>

        <div class="footer__line"></div>

        <div class="footer__nav">
            <div class="footer__nav_right">
                <router-link to="/about"   class="footer__nav_right-item">About</router-link>
                <router-link to="/stack"   class="footer__nav_right-item">Technologies</router-link>
                <router-link to="/project" class="footer__nav_right-item">Projects</router-link>
                <router-link to="/contact" class="footer__nav_right-item">Contact</router-link>
            </div>
            <div class="footer__nav_left">
                <p class="footer__nav_left-item">
                    Built by <span>Rustam Isroilov</span> with <span>Vue</span> &amp; <span>Claude AI</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
