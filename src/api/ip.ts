import { get } from '@/utils/request';

export interface ResultIP1 {
    location: string,
    ip: string,
    success: boolean,
}

export function inquireIP() {
    return get<ResultIP1>({
        url: import.meta.env.VITE_TB_GET_IP_1,
        method: 'GET',
    })
}
