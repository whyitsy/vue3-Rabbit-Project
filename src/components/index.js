// 把Components文件夹中的所有组件进行全局化注册
// 通过插件化的方式

import ImageView from'./ImageView/index.vue'
import XtxSku from'./XtxSku/index.vue'

export const componentsPlugin = {
    install(app) {
        // app.component('id',组件对象)
        app.component("XtxImageView",ImageView)
        app.component("XtxSku",XtxSku)

    }
}