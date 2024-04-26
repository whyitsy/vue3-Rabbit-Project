<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
import LayoutFixedHeader from '@/views/Layout/components/LayoutFixedHeader.vue'

// 使用pinia在这里统一调用获取Header和FinedHeader共享数据的方法，然后再需要的地方直接使用即可
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

// 调用store返回store对象进行使用
const categoryStore = useCategoryStore()
// 这里触发后，Header和FinedHeader都可以导入categoryList数据使用
onMounted(() => categoryStore.getCategory())

</script>

<template>
    <LayoutFixedHeader />
    <LayoutNav></LayoutNav>

    <LayoutHeader></LayoutHeader>

    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>