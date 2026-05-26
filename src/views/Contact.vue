<template>
    <div>
        <h1 class="contact__title">For any questions please mail me:
            <span>{{ site.profile.email }}</span>
        </h1>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { useSiteContent } from '@/composables/useSiteContent';
const { data: site } = useSiteContent();
</script>

<style lang="scss" scoped></style>
