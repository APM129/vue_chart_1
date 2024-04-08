<template>
    <div class="bg">
        <div class="main-container-auto-width container">
            <!-- TODO: 添加 SelectCity -->
            <!-- <div class="city-name">当前城市：{{ currCityName }}</div>
            <div class="navigate-type-message" v-if="!isUserSelectCity">当前基于IP定位</div>
            <input class="select-city" />
            <button class="navigate-button" @click="openH5GeoAlert">调用浏览器定位</button> -->
            <!-- <SelectCity :currCityId="currCityId" :currCityName="currCityName" /> -->
            <button class="navigate-button" @click="openH5GeoAlert">
                <img src="@/assets/navigate.svg" width="20px" height="20px" alt="定位" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// import SelectCity from '@/components/SelectCity.vue'

defineProps<{
    openH5GeoAlert: () => void;
    currCityName: string;
    currCityId: string;
    isUserSelectCity: boolean;
}>()

</script>

<style scoped>
.bg {
    width: 100%;
    background-color: #f1f3f9;
    display: flex;
    justify-content: center;
}

.container {
    /* max-width: 1280px; */
    height: 40px;
    display: flex;
    justify-content: space-between;
}

.city-name {}

.navigate-button {
    width: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigate-type-message {
    color: rgba(0,0,0,0.5)
}

.select-city {}

.navigate-button {}
</style>
