<template>
    <div class="con main-container-auto-width">
        <div class="city-name">{{ cityName }}</div>
        <div class="description">{{ descriptionText }}</div>
        <!-- TODO: 经纬度 -->
    </div>
</template>

<script setup lang="ts">
import dayjs from '@/utils/day'
import lunisolar from '@/utils/lunisolar';

defineProps<{
    cityName: string;
}>()

const descriptionText = `${dayjs(new Date()).format('YYYY-MM-DD dddd')}  ${lunisolar(new Date()).format('lMlD cY年 cZ')}`

</script>

<style scoped>
.con {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 40px;
}

.city-name {
    margin-right: 22px;
    font-size: 22px;
    line-height: 24px;
    font-weight: normal;
    color: #000000;
}

.description{
    font-size: 12px;
    line-height: 14px;
    color: rgba(0,0,0,0.5);
}

</style>
