// 导入判断是否进入视口的函数
import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyImgPlugin = {
    // 这app就是注册该插件的对象，我们使用app注册该插件
    install(app) {
        // 实现懒加载逻辑
        // 定义全局自定义指令
        app.directive("img-lazy", {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binging.value 绑定到表达式的值=>这里是图片url
                // console.log(el,binding.value);

                // stop函数用于停止监视是否进入视口函数
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // isIntersecting :bool, 是否进入视口区域
                        if (isIntersecting) {
                            // 将Url赋值给src后就会自动的去请求该url, 注意需要将原来的src删除
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}