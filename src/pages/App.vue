<script setup lang="ts">
import { ref, watch } from 'vue'
import Weather from '@/components/Weather/index.vue';
import { inquireIP } from '@/api/ip'
import { getCityId } from '@/api/geo'
import { getWeatherNow, getWeatherDaily, getWeatherHourly } from '@/api/HF.ts'

const HFKey = import.meta.env.VITE_HF_KEY

const weatherData = ref<HFWeather.WeatherData>({});
const currCityId = ref<string>('');
const currCityName = ref<string>('');
const isUserSelectCity = ref<boolean>(false);

inquireIP().then(async (res) => {
  if (res.status !== '1') {
    // TODO: 查询失败
  } else if (!isUserSelectCity.value) {
    const { city, province } = res
    const data  = await getCityId({ location: city , key: HFKey, range: province })
    if (!!data) {
      currCityId.value = data.id
      currCityName.value = data.name
    }
  }
})

const getH5Geo = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position: GeolocationPosition) => {
      const { coords: { latitude, longitude } } = position
      const data = await getCityId({ location: `${latitude.toFixed(2)},${longitude.toFixed(2)}`, key: HFKey })
      if (!!data) {
        currCityId.value = data.id
        currCityName.value = data.name
        isUserSelectCity.value = true
      }
      // TODO: 错误处理 这里不应该请求不到城市数据
    })
  }
}


watch(currCityId, async newValue => {
  const data  = await getCityId({ location: newValue , key: HFKey})
  if (!!data) {
    const now = await getWeatherNow({ location: currCityId.value })
    weatherData.value.now = now

    const hourly = await getWeatherHourly({ location: currCityId.value })
    weatherData.value.hourly = hourly

    const daily = await getWeatherDaily({ location: currCityId.value })
    weatherData.value.daily = daily
  }
  // TODO: 错误处理 这里不应该请求不到数据
})

</script>

<template>
  <Weather :openH5GeoAlert="getH5Geo" :weatherData="weatherData" :currCityName="currCityName" :currCityId="currCityId" :isUserSelectCity="isUserSelectCity" />
</template>

<style>
@import url('@/styles/layout.css');
</style>

<style scoped>
</style>
