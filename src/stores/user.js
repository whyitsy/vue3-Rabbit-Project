// 管理用户数据

import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";


export const useUserStore = defineStore("user",()=>{
    // 1. 定义管理用户的state
    const userInfo = ref({})

    // 2. 定义获取state的action
    const getUserInfo = async (user)=>{
        const res = await loginApi(user)
        userInfo.value = res.data.result
    }

    // 3. 以对象的形式将state和action返回出去
    return{
        userInfo,
        getUserInfo
    }

})