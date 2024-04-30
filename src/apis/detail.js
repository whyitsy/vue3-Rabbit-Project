import httpInstance from "@/utils/http";



export const getDetailGoodsApi = (id)=>{
    return httpInstance({
        url : '/goods',
        params: {
            id
        }
    })
}