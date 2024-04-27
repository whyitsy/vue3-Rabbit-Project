// axios基础的封装
import axios from "axios";
import { ElMessage } from "element-plus";

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 2000
})

// copy官方文档的拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
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
  // 对响应错误做点什么 

  // 统一处理错误提示
  ElMessage({
    type:"warning",
    message:error.response.data.message
  })
  return Promise.reject(error);
});



export default httpInstance