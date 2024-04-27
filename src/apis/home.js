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

// 获取热门好物数据
export function getHotApi(){
    return httpInstance({
        url:"/home/hot"
    })
}

// 获取产品列表数据
export function getGoodsApi(){
    return httpInstance({
        url:"/home/goods"
    })
}