import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:()=> import("@/views/Layout/index.vue"),
      children:[
        {
          // 空表示二级默认路由
          path:"",
          name:"home.home",
          component:()=>import("@/views/Home/index.vue")
        },
        {
          // 分类区域根据分类id路由到对应的页面
          path:'category/:id',
          name:'home.category',
          component:()=>import("@/views/Category/index.vue")
        }
      ]
    },
    {
      path:"/Login",
      name:"login",
      component:()=> import("@/views/Login/index.vue")
    }

  ]
})

export default router
