<template>
    <div class="con">
        <div class="main-container-auto-width main">
            <div class="title">谢鸣</div>
            <div class="message">
                <a href="https://www.qweather.com">天气服务由和风天气驱动</a>
            </div>
            <div class="message">
                <a href="api.vvhan.com">查询本机IP地址由 api.vvhan.com 提供</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.con {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #2f2f35;
}

.main {
    padding-bottom: 20px;
}

.title {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
}

.message {
    margin-top: 10px;
    margin-left: 20px;
    text-align: left;
    > a {
        color: #fff;
    }
}
</style>
