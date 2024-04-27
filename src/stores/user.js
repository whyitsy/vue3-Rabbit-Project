// 管理用户数据

import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";


export const useUserStore = defineStore(
    "user", () => {
        // 1. 管理用户的state
        const userInfo = ref({})

        // 2.1. 获取state的action
        const getUserInfo = async (user) => {
            const res = await loginApi(user)
            userInfo.value = res.data.result
        }

        // 2.2. 退出时删除(清空)用户信息
        const clearUserInfo = () => {
            userInfo.value = {}
        }

        // 3. 以对象的形式将state和action返回出去
        return {
            userInfo,
            getUserInfo,
            clearUserInfo,
        }
    },
    {
        persist: true,
    }
)