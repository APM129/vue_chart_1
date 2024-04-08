<template>
    <img :src=weatherIconUrl alt="QWeather Icons" :width="width" :height="height" @error="handleError">
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'

interface Props {
    icon: string;
    width: string;
    height: string;
}

const props = defineProps<Props>();
const useHFWeatherIcon = ref<boolean>(true)

const weatherIconUrl = computed(() => {
    return useHFWeatherIcon.value ?  `https://a.hecdn.net/img/common/icon/202106d/${props.icon}.png` : `https://cdn.jsdelivr.net/npm/qweather-icons@1.6.0/icons/${props.icon}.svg`
})

function handleError() {
    if (useHFWeatherIcon.value) {
        useHFWeatherIcon.value = false
    }
}
</script>

<style module>
</style>
