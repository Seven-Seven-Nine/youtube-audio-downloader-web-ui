<script lang="ts" setup>
import LogoIcon from "../assets/pixel_youtube.svg?component";
</script>

<template>
    <div class="header-block">
        <div class="logo">
            <LogoIcon class="icon" />
            <h1>YouTube Audio Downloader</h1>
        </div>
    </div>
</template>

<style scoped>
.header-block {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;
}
.logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.logo h1 {
    font-size: 16pt;
    font-weight: bold;
    margin-left: 8px;
}
</style>