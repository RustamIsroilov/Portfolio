<template>
    <div class="about">
        <h1 class="about__title">
            <template v-for="(p, i) in parts" :key="i">
                <span v-if="p.brand">{{ p.text }}</span>
                <template v-else>{{ p.text }}</template>
            </template>
        </h1>
        <img src="@/assets/img/me-viewpoint.jpg" alt="Rustam Isroilov" class="about__img about__img--landscape">
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';
import { parseBrandText } from '@/composables/useBrandText';

const { data: site } = useSiteContent();
const parts = computed(() => parseBrandText(site.value.home.title));
</script>

<style lang="scss" scoped></style>
