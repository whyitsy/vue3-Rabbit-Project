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

// 获取二级分类的数据
export function getCategoryFilterApi(id){
    return httpInstance({
        url:'category/sub/filter',
        params:{
            id
        }
    })
}