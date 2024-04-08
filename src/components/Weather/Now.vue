<template>
    <div class="main-container-auto-width con">
        <div class="obs-time">{{ dayjs(weatherNow.obsTime).format('YYYY-MM-DD HH:mm') }}</div>
        <!-- TODO: 是否接入 AQI 数据？ -->
        <!-- <div class="aqi">{{ weatherNow. }}</div> -->
        <div class="center-con">
            <div class="icon">
                <!-- <img :src=weatherIconUrl alt="QWeather Icons" width="80" height="80" @error="handleError"> -->
                <WeatherIcon :icon="weatherNow.icon" :width="`80px`" :height="`80px`" />
            </div>
            <div class="right-text">
                <div class="temp">{{ weatherNow.temp }}°</div>
                <div class="text">{{ weatherNow.text }}</div>
            </div>
        </div>
        <div class="info-list">
            <div class="info-item">
                <div class="info-item-value">{{ weatherNow.windScale }}级</div>
                <div class="info-item-name">{{ weatherNow.windDir }}</div>
            </div>
            <div class="info-item">
                <div class="info-item-value">{{ weatherNow.humidity }}%</div>
                <div class="info-item-name">相对湿度</div>
            </div>
            <div class="info-item info-item-none">
                <div class="info-item-value">{{ weatherNow.vis }}km</div>
                <div class="info-item-name">能见度</div>
            </div>
            <div class="info-item">
                <div class="info-item-value">{{ weatherNow.precip }}mm</div>
                <div class="info-item-name">降水量</div>
            </div>
            <div class="info-item info-item-none">
                <div class="info-item-value">{{ weatherNow.pressure }}hPa</div>
                <div class="info-item-name">大气压</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import dayjs from '@/utils/day';
import WeatherIcon from '@/components/WeatherIcon.vue'

interface Props {
    weatherNow: HFWeather.WeatherNow;
}

const props = defineProps<Props>();

</script>

<style scoped>
.con{
    padding: 24px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 304px;
    box-sizing: border-box;
    border-radius: 16px; 

    /* TODO: 缺少 icon 值影响的 background-color */
    background-color: #bbc5d3;

    > div {
        width: 100%;
    }
}

.obs-time {
    align-items: flex-end;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0,0,0,0.5);
    text-align: right;
}

.center-con {
    display: flex;
}

.icon {
    padding-right: 10px;
    flex-grow: 1;
    text-align: right;
}

.right-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
}

.temp {
    font-size: 52px;
    line-height: 52px;
    color: black;
    font-weight: 400;
}

.text {
    font-size: 22px;
    line-height: 22px;
    color: black;
    font-weight: 500;
}

.info-list {
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.03);
    height: 70px;
    border-radius: 12px;
}

.info-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-item-none {
    /* FIXME: 目前的 css 中 media 的参数不允许使用变量 哪怕是 css变量 也不行 可以考虑用 vue-use 判断是否为 mobile */
    @media (max-width: 740px){
        display: none;
    }
}

.info-item-value {
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: black;
}
.info-item-name {
    margin-top: 7px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.5);
}
</style>
