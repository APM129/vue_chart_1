import { get } from '@/utils/request';

export async function  getWeatherNow({ location }: HFQuery.HFQueryWeather) {
    const data = await get<HFResult.HFResultWeatherNow>({
        url: `${import.meta.env.VITE_HF_API_URL}\/${import.meta.env.VITE_HF_QUERY_NOW}?location=${location}&key=${import.meta.env.VITE_HF_KEY}`,
        method: 'GET',
    })
    const { code, now } = data
    if (code === '200') {
        return now
    } else {
        // TODO: 异常处理 需定义 HFCode
        throw new Error(code)
    }
}

export async function getWeatherDaily({ location }: HFQuery.HFQueryWeather) {
    const data = await get<HFResult.HFResultWeatherDaily>({
        url: `${import.meta.env.VITE_HF_API_URL}\/${import.meta.env.VITE_HF_QUERY_7D}?location=${location}&key=${import.meta.env.VITE_HF_KEY}`,
        method: 'GET',
    })
    const { code, daily } = data
    if (code === '200') {
        return daily
    } else {
        // TODO: 异常处理 需定义 HFCode
        throw new Error(code)
    }
}

export async function getWeatherHourly({ location }: HFQuery.HFQueryWeather) {
    const data = await get<HFResult.HFResultWeatherHourly>({
        url: `${import.meta.env.VITE_HF_API_URL}\/${import.meta.env.VITE_HF_QUERY_24H}?location=${location}&key=${import.meta.env.VITE_HF_KEY}`,
        method: 'GET',
    })
    const { code, hourly } = data
    if (code === '200') {
        return hourly
    } else {
        // TODO: 异常处理 需定义 HFCode
        throw new Error(code)
    }
}