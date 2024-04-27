import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/element/index.scss'

// 引入自定义初始化样式
import '@/styles/common.scss'

// 引入懒加载插件
import { lazyImgPlugin } from '@/directives'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)


app.use(router)
app.use(ElementPlus)
app.use(lazyImgPlugin)
app.use(pinia)

app.mount('#app')


