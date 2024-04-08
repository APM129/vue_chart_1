import { get } from '@/utils/request';

export interface ResultIP1 {
    location: string,
    ip: string,
    success: boolean,
}

export interface ResultIP2 {
    // IP address
    query: string,
    // 城市名   
    country: string,
    //  value: success
    status: string,
}

export function inquireIP() {
    return get<ResultIP2>({
        url: import.meta.env.VITE_TB_GET_IP_2,
        method: 'GET',
    })
}
