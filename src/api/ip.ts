import { get } from '@/utils/request';

export interface ResultIP {
    // 返回结果状态值  1: 成功   0: 失败
    status: string;
    // 返回状态说明   status 为 1 则返回 OK   status 为 0 则返回错误原因
    info: string;
    // 状态码 10000 代表正确
    infocode: string;
    // 省份名称
    province: string;
    // 城市名称
    city: string;
    // 城市的 adcode 编码
    adcode: string;
}

export function inquireIP() {
    return get<ResultIP>({
        url: `${import.meta.env.VITE_AMAP_IP_NAV_URL}?key=${import.meta.env.VITE_AMAP_IP_KEY}`,
        method: 'GET',
    })
}
