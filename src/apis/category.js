import httpInstance from '@/utils/http'


// 根据id获取不同分类的数据
export function getCategoryContentApi(id){
    return httpInstance({
        url:"/category",
        params:{
            id
        }
    })
}

// 获取二级分类导航的数据
export function getCategoryFilterApi(id){
    return httpInstance({
        url:'category/sub/filter',
        params:{
            id
        }
    })
}

// 获取二级分类的产品数据
/**
 * @param {
 * categoryId,
 * page,
 * pageSize,
 * sortField: "publishTime" | "orderNum" | "evaluateNum"
 * } data 
 * 
 */
export function getSubCategoryApi(data){
    return httpInstance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}