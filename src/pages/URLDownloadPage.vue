<script setup lang="ts">
import Copyright from "../components/Copyright.vue";
import Header from "../components/Header.vue";
import MainContent from "../components/MainContent.vue";
import BlockContent from "../components/BlockContent.vue";
</script>

<template>
    <Header />
    <MainContent>
        <BlockContent>
            <div class="content-url-loader">
                <p class="header-block-content">Загрузка аудио-файлов через URL</p>
            </div>
        </BlockContent>
    </MainContent>
    <Copyright />
</template>

<style scoped>
.content-url-loader {
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.header-block-content {
    font-size: 14pt;
    font-weight: bold;
    margin: 0;
}
</style>