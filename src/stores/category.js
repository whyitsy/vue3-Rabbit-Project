import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/testApi'


export const useCategoryStore = defineStore('category', () => {

    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航数据(修改state)的方法
    const getCategory = async ()=>{
        const res = await getCategoryApi()
        categoryList.value = res.data.result
    }
    

  return { categoryList,  getCategory}
})
