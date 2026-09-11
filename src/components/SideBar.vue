<script lang="ts" setup>
import Tooltip from "./Tooltip.vue";
import LinkIcon from "../assets/pixelarticons_link.svg?component";
import MultiLoadingIcon from "../assets/pixelarticons_text-wrap.svg?component";
import SortIcon from "../assets/pixelarticons_sort-horizontal.svg?component";
import SettingIcon from "../assets/pixelarticons_settings-2.svg?component";
import LightThemeIcon from "../assets/pixelarticons_sun-solid.svg?component";
import DarkThemeIcon from "../assets/dinkie-icons_crescent-moon-filled.svg?component";

import { useRoute, type RouteLocationNormalizedGeneric } from "vue-router";
import { computed, type ComputedRef } from "vue";
import { useTheme } from "../composables/useTheme.ts";

const route: RouteLocationNormalizedGeneric = useRoute();
const currentPath: ComputedRef<string> = computed((): string => route.path);

const { theme, nextTheme } = useTheme();
</script>

<template>
    <div class="sidebar-block">
        <Tooltip text="Перейти на страницу загрузки аудио через URL" position="left">
            <RouterLink to="/url-loading" class="icon-box" :class="{ 'activate-icon-box': currentPath === '/' || currentPath === '/url-loading' }">
                <LinkIcon class="icon" />
            </RouterLink>
        </Tooltip>
        <Tooltip text="Перейти на страницу множественной загрузки аудио через URL" position="left">
            <RouterLink to="/multi-loading" class="icon-box" :class="{ 'activate-icon-box': currentPath === '/multi-loading' }">
                <MultiLoadingIcon class="icon" />
            </RouterLink>
        </Tooltip>
        <Tooltip text="Перейти на страницу сортировки аудио-файлов" position="left">
            <RouterLink to="/sort-audio" class="icon-box" :class="{ 'activate-icon-box': currentPath === '/sort-audio' }">
                <SortIcon class="icon" />
            </RouterLink>
        </Tooltip>
        <Tooltip text="Перейти на страницу настроек веб-приложения" position="left">
            <RouterLink to="/settings" class="icon-box" :class="{ 'activate-icon-box': currentPath === '/settings' }">
                <SettingIcon class="icon" />
            </RouterLink>
        </Tooltip>
        <Tooltip text="Переключить цветовую схему" position="left">
            <div @click="nextTheme()" class="icon-box">
                <LightThemeIcon v-if="theme === 'dark'" class="icon" />
                <DarkThemeIcon v-if="theme === 'light'" class="icon" />
            </div>
        </Tooltip>
    </div>
</template>

<style scoped>
.sidebar-block {
    background-color: var(--panel-background-color);
    border: 1px solid var(--main-border-color);
    border-radius: 10px;
    box-sizing: border-box;
    width: 60px;
    min-height: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>