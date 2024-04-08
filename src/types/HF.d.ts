declare namespace HFQuery {
    interface HFQueryCity {
        // 需要查询地区的名字，支持文字、以逗号分隔的坐标、LocationID
        location: string,
        key: string,
        // 城市的上级区划，可设定只在某个行政区划范围内进行搜索，用于排除重名城市或对结果进行过滤
        adm?: string,
        // 搜索范围，可设定只在某个国家或地区范围内进行搜索，国家和地区名称需使用ISO 3166 所定义的国家代码
        range?: string,
        // 返回结果数量 默认10 取值范围 1～20
        number?: number,
    }

    interface HFQueryWeather {
        location: string,
    }
}

declare namespace HFResult {
    interface HFResultGeo {
        code: string,
        location: HFResultArea[],
    }

    interface HFResultArea {
        name: string,
        id: string,
        lat: string,
        lon: string,
        adm2: string,
        adm1: string,
        country: string,
        type: string,
    }

    interface HFResultWeather {
        code: string,
    }

    interface HFResultWeatherNow extends HFResultWeather {
        now: HFWeather.WeatherNow
    }

    interface HFResultWeatherDaily extends HFResultWeather {
        daily: WeatherDaily[]
    }

    interface HFResultWeatherHourly extends HFResultWeather {
        hourly: WeatherHourly[]
    }
}

declare namespace HFWeather {
    interface WeatherNow {
        // 数据观测时间
        obsTime: string,
        // 温度 默认单位 摄氏度
        temp: string,
        // 体感温度 默认单位 摄氏度
        fellsLike: string,
        // 天气状况图标
        icon: string,
        // 天气状况文字描述
        text: string,
        // 风向
        windDir: string,
        // 风向 360 度角
        wind360: string,
        // 风力等级
        windScale: string,
        // 相对湿度 百分比数值
        humidity: string,
        // 当前小时累计降水量
        precip: string,
        // 大气压强 默认单位 百帕
        pressure: string,
        // 能见度 默认单位 公里
        vis: string,
        // 云量 百分比数值 可能为空
        cloud?: string
    }

    interface WeatherDaily {
        // 预报日期
        fxDate: string,
        // 预报当天最高温度
        tempMax: string,
        // 预报当天最低温度
        tempMin: string,
        // 白天天气状态图标
        iconDay: string,
        // 白天天气状态文字
        textDay: string,
        // 夜晚天气状态图标
        iconNight: string,
        // 夜晚天气状态文字
        textNight: string,
        // 预报当天总降水量
        precip: string,
    }

    interface WeatherHourly {
        // 预报时间
        fxTime: string,
        // 温度
        temp: string,
        // 天气状态图标代码
        icon: string,
        // 天气状态文字描述
        text: string,
        // 风向 360 度角
        wind360: string,
        // 风向
        windDir: string,
        // 风力等级
        windScale: string,
        // 风速 公里/小时
        windSpeed: string,
        // 相对湿度 百分比数值
        humidity: string,
        // 当前小时累计降水量
        precip: string,
        // 逐小时预报降水概率 百分比数值 可能为空
        pop?: string,
        // 大气压强
        pressure: string,
        // 云量 百分比数值 可能为空
        cloud?: string,
    }

    interface WeatherData {
        // TODO: 用于 ref 的天气数据结构
        now?: WeatherNow,
        daily?: WeatherDaily[],
        hourly?: WeatherHourly[],
    }
}