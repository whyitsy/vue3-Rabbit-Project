import { getCategoryContentApi } from '@/apis/category';
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
    // 定义数据-object类型
    const CategoryContent = ref({})

    const route = useRoute()
    const getCategoryContent = async (id = route.params.id) => {
        const res = await getCategoryContentApi(id)
        CategoryContent.value = res.data.result
    }

    onMounted(() => {
        getCategoryContent()
    })

    // 在路由发生变化前会调用的AOP函数
    onBeforeRouteUpdate((to) => {
        // console.log(to);
        getCategoryContent(to.params.id)
    })


    return {
        CategoryContent
    }
}
