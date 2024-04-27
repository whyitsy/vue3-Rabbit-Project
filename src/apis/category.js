import httpInstance from '@/utils/http'


// 根据id获取不同分类栏的数据
export function getCategoryContentApi(id){
    return httpInstance({
        url:"/category",
        params:{
            id
        }
    })
}