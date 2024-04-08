import { get } from '@/utils/request';

export async function getCityId({ location, key }: HFQuery.HFQueryCity) {
    const { code, location: locationList } =  await get<HFResult.HFResultGeo>({
        url: `${import.meta.env.VITE_GEO_API_URL}?location=${location}&key=${key}`,
        method: 'GET',
    })
    if (code !== '200') {
        // TODO: 异常处理
    }
    if (locationList.length === 0) {
        return null
    }
    return locationList[0]
}