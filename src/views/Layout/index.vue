<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';

</script>

<template>
<LayoutHeader></LayoutHeader>
<LayoutNav></LayoutNav>
<RouterView></RouterView>
<LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>