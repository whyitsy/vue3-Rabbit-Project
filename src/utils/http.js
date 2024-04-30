// axios基础的封装
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 2000
})




// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 统一在发送的请求中携带token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    // 将token拼接后放入Authorization中
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。

  // 用户信息Store, 不能定义在函数外面，外面
  const userStore = useUserStore()

  // 统一处理错误提示
  ElMessage({
    type: "warning",
    message: error.response.data.message
  })


  // 401token失效处理
  // 1. 清除本地用户数据 2. 跳转到登录页
  if (error.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }

  return Promise.reject(error);

});



export default httpInstance