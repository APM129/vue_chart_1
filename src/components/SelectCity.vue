<template>
    <div class="con">
        <div class="input-container">
            <input class="input" />
            <button class="navigate-button">
                <img src="@/assets/navigate.svg" width="20px" height="20px" alt="定位" />
            </button>
        </div>
        <div class="option-list"></div>
    </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'
const currCityId = defineModel<string>({ required: true })
const currCityName = defineModel<string>({ required: true })

</script>

<style scoped>
</style>
