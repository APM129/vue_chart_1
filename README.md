# Vue 3 + Vite + AntV

用  Vue 和 AntV 搭建一个数据可视化项目，特点是大干快上，你可以在这里找到 AntV 的用法，但这个项目为了节约开发时间，不会全程遵循最佳实践。

## 项目结构说明

src  
|-- api 请求   
|-- assets css image 等资源  
|-- components 组件  
|-- pages 页面  
|-- utils 工具      

## 开发任务拆解

- [ ] 起步
  - [x] 整理 src/ 的目录结构
  - [x] 编写 REAMDE
  - [x] 配置 resolve.alias
- [ ] 基础功能开发
  - [ ] 引入和风天气API，开发阶段使用mock的天气数据，防止免费接口使用次数过高
  - [ ] 引入 vue-router 根据用户设备UA，展示 desktop/mobile 内容
  - [ ] 地理位置获取
    - [ ] 默认使用基于 IP 的定位，获取用户公网 IP 有公共的 API
    - [ ] 优先使用 Navigator.geolocation 实现，可以封装一个类似 TencentMap 的 componentGeolocation 的组件
  - [ ] 页面内容包含
    - [ ] header 当前城市地区 城市搜索 经纬度 日期星期时间 Github地址
    - [ ] 天气详情（温度 适度 请求时间 AQI 紫外线 风力 降水指数 等）
    - [ ] 24小时预报
    - [ ] 未来7天预报
    - [ ] 空气质量具体参数
    - [ ] 日出日落
    - [ ] 生活指数
    - [ ] footer [注明来源](https://dev.qweather.com/docs/terms/attribution/) Github地址
- [ ] 进阶功能开发
  - [ ] 记录cookie，防止同一浏览器恶意频繁刷新
