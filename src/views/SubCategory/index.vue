<script setup>
import { useRoute } from 'vue-router';
import { getCategoryFilterApi, getSubCategoryApi } from '@/apis/category';
import { onMounted, ref } from 'vue';

import HomeGoodsItem from '@/views/Home/components/HomeGoodsItem.vue';

// 获取面包屑导航及数据
const route = useRoute()
const categoryFilterData = ref([])
const getCategoryFilter = async () => {
  const res = await getCategoryFilterApi(route.params.id)
  categoryFilterData.value = res.data.result
}

onMounted(() => {
  getCategoryFilter()
})

// 获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
  // 初始按照基础默认参数请求数据
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  // 排序是后端实现的，前端传排序方法即可
  sortFiled: 'publishTime'
})
const getSubCategory = async () => {
  const res = await getSubCategoryApi(reqData.value)
  goodList.value = res.data.result.items
}

onMounted(() => {
  getSubCategory()
})


// 当tab切换时重新拿数据
const onTabChange = ()=>{
  console.log("tab切换了");
  // 重置页数，切换筛选之后从第一页开始
  reqData.value.page = 1
  getSubCategory()
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryFilterData.parentId}` }">{{ categoryFilterData.parentName
          }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryFilterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 产品列表 -->
    <div class="sub-container">
      <el-tabs v-model="reqData.sortFiled" @tab-change="onTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <HomeGoodsItem v-for="good in goodList" :good="good" :key="good.id"></HomeGoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: #cf4444;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>