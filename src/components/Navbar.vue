<template>
    <nav class="nav">
        <div class="nav__logo">
            <router-link to="/" @click="open = false">
                <img class="nav__logo_img" src="@/assets/img/logo.png" alt="Logo">
            </router-link>
        </div>

        <button
            class="nav__burger"
            :aria-expanded="open"
            aria-label="Toggle menu"
            @click="open = !open"
        >
            <span></span><span></span><span></span>
        </button>

        <div class="nav__items" :class="{ 'is-open': open }">
            <router-link to="/"        class="nav__items_desc" @click="open = false">Home</router-link>
            <router-link to="/about"   class="nav__items_desc" @click="open = false">About</router-link>
            <router-link to="/stack"   class="nav__items_desc" @click="open = false">Tech Stack</router-link>
            <router-link to="/project"      class="nav__items_desc" @click="open = false">Projects</router-link>
            <router-link to="/achievements" class="nav__items_desc" @click="open = false">Achievements</router-link>
            <router-link to="/contact"      class="nav__items_desc" @click="open = false">Contact</router-link>
        </div>

        <div class="nav__contacts">
            <a href="https://github.com/RustamIsroilov" target="_blank" rel="noopener">
                <img src="@/assets/img/github.svg" alt="GitHub" class="nav__contacts_img">
            </a>
            <a href="https://twitter.com/RustambekI39739" target="_blank" rel="noopener">
                <img src="@/assets/img/twitter.svg" alt="Twitter" class="nav__contacts_img">
            </a>
            <a href="https://www.instagram.com/rustambek7875/" target="_blank" rel="noopener">
                <img src="@/assets/img/insta.svg" alt="Instagram" class="nav__contacts_img">
            </a>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>

<style lang="scss" scoped></style>
