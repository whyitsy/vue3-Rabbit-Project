import httpInstance from "@/utils/http"

// 获取banner数据, 参数为确定是不同的页面，如首页，分类页等
export function getBannerApi(params = {}) {
    // 首页默认为'1'
    const {distributionSite='1'} = params
    return httpInstance({
        url: "/home/banner",
        params:{
            distributionSite
        }
    })
}

// 获取新鲜好物数据
export function getNewApi() {
    return httpInstance({
        url: "/home/new"
    })
}

// 获取热门好物数据
export function getHotApi() {
    return httpInstance({
        url: "/home/hot"
    })
}

// 获取产品列表数据
export function getGoodsApi() {
    return httpInstance({
        url: "/home/goods"
    })
}