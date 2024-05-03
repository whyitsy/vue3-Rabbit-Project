import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import { useUserStore } from '@/stores/user'

const isLogin = () => {
  const userStore = useUserStore()
  if (userStore.userInfo.token) {
    return true
  }
  return false
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          // 空表示二级默认路由
          path: "",
          name: "home.home",
          component: () => import("@/views/Home/index.vue")
        },
        {
          // 分类区域根据分类id路由到对应的页面
          path: 'category/:id',
          name: 'home.category',
          component: () => import("@/views/Category/index.vue"),
        },
        {
          // 因为是整个分类页面切换，不是部分切换，所以还是设计为二级路由不是三路由
          path: 'category/sub/:id',
          name: 'home.subCategory',
          component: () => import("@/views/SubCategory/index.vue"),
        },
        {
          // 单个商品的详情页路由
          path: 'detail/:id',
          name: 'home.detail',
          component: () => import("@/views/Detail/index.vue")
        }
      ]
    },
    {
      path: "/Login",
      name: "login",
      component: () => import("@/views/Login/index.vue")
    }

  ],
  scrollBehavior() {
    return {
      // 路由切换时回到顶部
      top: 0
    }
  }
})

router.beforeEach((to, from) => {
  // 未登录就只能访问登录页
  if (!isLogin() && to.name != 'login') {
    return { name: "login" }
  }
  // 登陆了就不能访问登录页
  if (isLogin() && to.name == 'login') {
    return { name: from.name }
  }
  // 其余情况正常路由
  return true
})

export default router
