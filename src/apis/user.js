// 封装所有和用户相关的api

import httpInstance from "@/utils/http";

// 这里使用解构赋值，传入参数的时候直接传form对象即可
export const loginApi = ({account, password})=>{
    return httpInstance({
        url:"/login",
        method:"POST",
        // post请求得到body部分使用data
        data:{
            account,
            password
        }
    })
}