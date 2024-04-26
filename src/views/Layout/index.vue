<script setup>

</script>

<template>
<h1>我是首页</h1>
<RouterLink to="/Login">登录页</RouterLink><br>
<RouterLink to="/Category">分类页</RouterLink>
<!-- RouterView组件就是其子组件需要在当前组件的什么地方进行渲染-->
<RouterView></RouterView>
</template>

<style scoped>

</style>