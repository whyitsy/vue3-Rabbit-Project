import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/element/index.scss'

// 引入自定义初始化样式
import '@/styles/common.scss'

// 导入判断是否进入视口的函数
import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')


// 定义全局自定义指令
app.directive("img-lazy", {
    mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binging.value 绑定到表达式的值=>这里是图片url
        // console.log(el,binding.value);

        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
               // isIntersecting :bool, 是否进入视口区域
               if(isIntersecting){
                // 将Url赋值给src后就会自动的去请求该url, 注意需要将原来的src删除
                el.src = binding.value
               }
            },
        )
    }
})