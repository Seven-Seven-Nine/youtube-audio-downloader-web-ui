<script lang="ts" setup>
import SideBar from "../components/SideBar.vue";
</script>

<template>
    <div class="main-content">
        <div class="content-container-block">
            <slot />
        </div>
        <div class="side-bar-container-block">
            <SideBar />
        </div>
    </div>
</template>

<style scoped>
.main-content {
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.content-container-block {
    /* border: 1px solid rgba(255, 255, 255, 0.24); */
    box-sizing: border-box;
    margin-right: 5px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.side-bar-container-block {
    /* border: 1px solid rgba(255, 255, 0, 0.267); */
    box-sizing: border-box;
    height: 100%;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>