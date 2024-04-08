import axios, { type AxiosResponse } from 'axios'

export interface HttpOption {
    url: string,
    data?: any,
    method: string,
    headers?: any
}

export interface Response<T = any> {
    data: T,
    msg?: string,
    code: number,
}

const request = axios.create({
    timeout: 6000,
})

request.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error.response)
    }
)

request.interceptors.response.use(
    (responce: AxiosResponse): AxiosResponse => {
        const { data, status } = responce
        if (status === 200) {
            return data
        }
        throw new Error(status.toString())
    },
    (error) => {
        // TODO: 处理网络错误
        return Promise.reject(error)
    }
)

function http<T = any>(
    { url, data, method, headers }: HttpOption
): Promise<T> {
    if (!method) {
        throw new Error('method 不存在')
    }

    const params = Object.assign(typeof data === 'function' ? data() : data ?? {}, {})

    return method === 'GET'
        ? request.get(url, { params })
        : request.post(url, params, { headers })
}

export function get<T = any>(
    { url, data, method = 'GET'}: HttpOption
): Promise<T> {
    return http<T>({
        url,
        method,
        data
    })
}

export function post<T = any>(
    { url, data, method = 'POST', headers }: HttpOption
): Promise<T> {
    return http<T>({
        url,
        method,
        data,
        headers
    })
}
