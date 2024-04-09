# 一个使用 Vue 的天气 Demo

## 简介
使用 Vue 和 AntV 搭建天气SPA，使用 [和风天气](https://dev.qweather.com/docs/terms/attribution) 的天气数据，使用 ECharts 绘制逐小时天气预报的气温变化图

## 目的
上次使用 Vue 还是18年，彼时 Vue 还有一些地方不如 React，所以之后一直在用 React，现如今 Vue 生态愈发完善，于是学习一下最新的 Vue

## 运行

```shell
yarn install && yarn run dev
```
![运行时截图](https://github.com/APM129/assets_folder/blob/main/images/vue_chart_1_img.png?raw=true)

[Demo](https://apm129.github.io/vue_chart_1/)

## 项目使用技术栈
* 框架 Vue
* 打包 Vite
* 可视化 ECharts
* hooks VueUse
* 请求 axios
* 日期处理 dayjs + lunisolar(农历 formatter)

## 项目结构说明

src  
|-- api  
|-- assets  
|-- components  
|-- hooks  
|-- pages  
|-- styles  
|-- types  
|-- utils 工具      

## 开发任务拆解

- [x] 起步
  - [x] 整理 src/ 的目录结构
  - [x] 编写 REAMDE
  - [x] 配置 resolve.alias
- [x] 基础功能开发
  - [x] 引入和风天气API
  - [x] 地理位置获取
    - [x] 默认使用基于 IP 的定位，获取用户公网 IP 有公共的 API
    - [x] 优先使用 Navigator.geolocation 实现，可以封装一个类似 TencentMap 的 componentGeolocation 的组件
  - [ ] 页面内容包含
    - [ ] header
      - [x] 当前城市地区
      - [ ] 城市搜索
      - [ ] 经纬度
      - [x] 日期星期时间
      - [ ] Github地址
    - [x] 天气详情（温度 适度 请求时间 AQI 紫外线 风力 降水指数 等）
    - [x] 24小时预报
    - [ ] 未来7天预报
    - [ ] 空气质量具体参数
    - [ ] 日出日落
    - [ ] 生活指数
    - [x] footer [注明来源](https://dev.qweather.com/docs/terms/attribution/) Github地址
- [ ] 进阶功能开发
  - [ ] 记录cookie，防止同一浏览器恶意频繁刷新
  - [ ] 采用和风天气的加密签名方式代替key

## License
