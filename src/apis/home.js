import httpInstance from "@/utils/http"

// 获取banner数据
export function getBannerApi(){
    return httpInstance({
        url:"/home/banner"
    })
}

// 获取新鲜好物数据
export function getNewApi(){
    return httpInstance({
        url:"/home/new"
    })
}