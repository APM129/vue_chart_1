<template>
    <div class="main-container-auto-width con">
        <div class="title">逐小时预报</div>
        <!-- XXX: 正常情况下 这里应该使用伪随机数做 id -->
        <div id="chart-line-bar" ref="chartEl" style="height: 150px;" />
        <!-- 模拟 xAxisLabel 因为 xAxis.axisLabel.rich 的实现成本高于自行模拟 还有就是 WeatherIcon 组件的备用加载链接依赖 error event 无法在 rich 中配置 -->
        <div class="list">
            <div class="item" v-for="item in hourlyList">
                <div class="item-icon"><WeatherIcon :icon="item.icon" width="28px" height="28px" /></div>
                <div class="item-wind"><img src="@/assets/wind_360.svg" alt="wind 360 icon" width="20px" height="20px" :style="`transform: rotate(${convertWindValue(item.wind360)}deg)`" /></div>
                <div class="item-time">{{ formatFxTime(item.fxTime) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, watch, onUnmounted, shallowRef } from 'vue'
import { watchDebounced } from '@vueuse/core'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
dayjs.locale('en')
import { useBasicLayout } from '@/hooks/useBasicLayout'
import echarts from '@/utils/echarts'
import { deepCopy } from '@/utils/deepCopy'
import WeatherIcon from '@/components/WeatherIcon.vue'

interface Props {
    weatherHourly: HFWeather.WeatherHourly[]
}
const props = defineProps<Props>();
const chartEl = shallowRef(null)
const myChart = shallowRef<echarts.ECharts | null>(null)
const resizeCount = ref<number>(0)
const hourlyList = ref<HFWeather.WeatherHourly[]>(props.weatherHourly)
const yDataList = hourlyList.value.map(item => Number.parseInt(item.temp)) as number[]

const resizeObserver = new ResizeObserver(entries => {
    for(const {} of entries) {
        if (myChart.value) {
            resizeCount.value += 1
        }
    }
})


function calculateBarCount() {
    const { isGreater768 } = useBasicLayout()
    const showMobileXAxisLabelCount = 12
    hourlyList.value = isGreater768.value ? props.weatherHourly : props.weatherHourly.slice(0, showMobileXAxisLabelCount - 1)
}

function formatFxTime (fixTime: string) {
    return dayjs(fixTime).format('ha')
}
const xDataList = deepCopy(hourlyList.value).map(item => {
    return {
        ...item,
        value: formatFxTime(item.fxTime)
    }
})


function initChart() {
    myChart.value = echarts.init(chartEl.value);
    myChart.value.setOption({
        xAxis: {
            type: 'category',
            data: xDataList,
            show: false,
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [{
            type: 'bar',
            data: yDataList,
            label: {
                show: true,
                position: 'top',
                formatter: '{c}°',
                fontWeight: 'bold',
                fontSize: 16,
            },
            barWidth: 6,
            itemStyle: {
                borderRadius: 3,
            },
        }],
        color: ['#3970ff'],
        grid: {
            left: 0,
            top: 20,
            right: 0,
            bottom: 20,
        },
    })
}

function updateChartByXData() {
    if (myChart.value) {
        myChart.value.setOption({
            xAxis: {
                data: hourlyList.value
            }
        }, {})
    }
}

function convertWindValue (wind360: string): number | null {
    const windNum = Number.parseInt(wind360)
    // XXX: 这里用 loadsh 的 isNaN 会更好
    if (!windNum && windNum !== 0) {
        return null
    }
    return (windNum + 375) % 360
}

watchDebounced(resizeCount, () => {
    if (myChart.value) {
        myChart.value.resize()
    }
    calculateBarCount()
    resizeCount.value = 0
}, { debounce: 500, maxWait: 2000 })

watch(hourlyList, () => {
    updateChartByXData()
})

onMounted(() => {
    initChart()
    calculateBarCount()
    if (chartEl.value) {
        resizeObserver.observe(chartEl.value)
    }
})

onUnmounted(() => {
    if (chartEl.value) {
        resizeObserver.unobserve(chartEl.value)
    }
})

</script>

<style scoped>
.con {
    padding: 30px 0 24px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: rgb(247, 248, 249);
    border: 1px solid rgb(242, 244, 250)
}

.title {
    margin-bottom: 10px;
    align-items: center;
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
}

.list {
    display: flex;
    justify-content: space-around;
}

.item-wind-360 {
    font-size: 12px;
    line-height: 12px;
    font-weight: 900;
    color: rgba(0,0,0,0.45);
}

.item-time {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
}
</style>
