<template>
    <div class="container">
        <Header :openH5GeoAlert="openH5GeoAlert" :currCityName="currCityName" :currCityId="currCityId" :isUserSelectCity="isUserSelectCity" />
        <City :cityName="currCityName" />
        <Now v-if="!!weatherData.now" :weatherNow="weatherData.now" />
        <Hourly v-if="!!weatherData.hourly" :weatherHourly="weatherData.hourly" />
        <Daily />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import City from './City.vue'
import Now from './Now.vue'
import Daily from './Daily.vue'
import Hourly from './Hourly.vue'
import Footer from './Footer.vue'

defineProps<{
    currCityName: string;
    currCityId: string;
    openH5GeoAlert: () => void;
    weatherData: HFWeather.WeatherData;
    isUserSelectCity: boolean;
}>()
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: white;

    > div {
        margin-bottom: 20px;
    }
    > div:nth-child(1) {
        margin-bottom: 0px;
    }
    > div:nth-child(2) {
        margin-bottom: 40px;
    }
    > div:last-child {
        margin-bottom: 0;
    }
}
</style>
