<template>
  <div>
    <Navbar/>
    <Header v-if="Home || About" />
    <RouterView/>

  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<style lang="scss" scoped>

</style>