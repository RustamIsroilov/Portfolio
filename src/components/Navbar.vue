<template>
    <div>
        <nav class="nav">
            <div class="nav__logo">
                <router-link to="/">
                    <img class="nav__logo_img" src="@/assets/img/logo.png" alt="">
                </router-link>
            </div>
            <div class="nav__items">
                <router-link to="/" class="nav__items_desc">Home</router-link>
                <router-link to="/about" class="nav__items_desc">About</router-link>
                <router-link to="/stack" class="nav__items_desc">Tech Stack</router-link>
                <router-link to="/project" class="nav__items_desc">Projects</router-link>
                <router-link to="/contact" class="nav__items_desc">Contact</router-link>
            </div>
            <div class="nav__contacts">
                <a href="https://github.com/RustamIsroilov"><img src="@/assets/img/github.svg" alt="" class="nav__contacts_img"></a>
                <a href="https://twitter.com/RustambekI39739"><img src="@/assets/img/twitter.svg" alt="" class="nav__contacts_img"></a>
                <a href="https://www.instagram.com/rustambek7875/?next=%2F"><img src="@/assets/img/insta.svg" alt="" class="nav__contacts_img"></a>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>