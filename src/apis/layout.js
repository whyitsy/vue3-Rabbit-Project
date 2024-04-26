import httpInstance from "@/utils/http";

// 导出获取分类的方法
export function getCategoryApi(){
    return httpInstance({
        url:'home/category/head'
    })
}