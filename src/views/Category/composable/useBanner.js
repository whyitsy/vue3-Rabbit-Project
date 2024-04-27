import { ref, onMounted } from 'vue';

// 轮播图api
import { getBannerApi } from '@/apis/home';


export function useBanner() {
    // 获取banner
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerApi({
            'distributionSite': '2'
        })
        // console.log(res);
        bannerList.value = res.data.result
    }
    
    onMounted(()=>{
        getBanner()
    })

    return{
        bannerList
    }
}


