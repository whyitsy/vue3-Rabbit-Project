<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <HomePanel title="新鲜好物" sub-Title="新鲜好物2">
    <div>
      新鲜好物的内容
    </div>
  </HomePanel>
  
  <HomePanel title="人气好物" sub-Title="人气好物2">
    <div>
      人气好物的内容
    </div>
  </HomePanel>
</template>