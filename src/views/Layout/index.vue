<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
import LayoutFixedHeader from '@/views/Layout/components/LayoutFixedHeader.vue'

</script>

<template>
    <LayoutFixedHeader/>
    <LayoutNav></LayoutNav>

    <LayoutHeader></LayoutHeader>

    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>