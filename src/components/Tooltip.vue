<script lang="ts" setup>
import { ref, type Ref } from "vue";
import ArrowIcon from "../assets/pixelarticons_arrow-left.svg?component";

const props: { readonly text: string; readonly position: string; } = defineProps({
    text: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const isVisible: Ref<boolean, boolean> = ref(false);

let timer: ReturnType<typeof setTimeout> | null = null;

function startTimer(): void {
    if (timer) clearTimeout(timer);
    timer = setTimeout((): void => {
        isVisible.value = true;
    }, 1000);
}

function clearTimer(): void {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    isVisible.value = false;
}
</script>

<template>
    <div class="tooltip-wrapper" @mouseenter="startTimer" @mouseleave="clearTimer">
        <slot />
        <Transition name="fade">
            <div v-if="isVisible" class="tooltip-container">
                <div v-if="props.position === 'top'">
                    <ArrowIcon class="arrow icon-arrow arrow-top" />
                    <div class="tooltip-box tooltip-top">
                        {{ text }}
                    </div>
                </div>
                <div v-if="props.position === 'left'">
                    <ArrowIcon class="arrow icon-arrow arrow-left" />
                    <div class="tooltip-box tooltip-left">
                        {{ text }}
                    </div>
                </div>
                <div v-if="props.position === 'bottom'">
                    <ArrowIcon class="arrow icon-arrow arrow-bottom" />
                    <div class="tooltip-box tooltip-bottom">
                        {{ text }}
                    </div>
                </div>
                <div v-if="props.position === 'right'">
                    <ArrowIcon class="arrow icon-arrow arrow-right" />
                    <div class="tooltip-box tooltip-right">
                        {{ text }}
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.tooltip-wrapper {
    position: relative;
    display: inline-block;
}

.tooltip-box {
    position: absolute;
    padding: 6px 15px;
    background-color: var(--panel-background-color);
    color: var(--text-and-icon-color);
    font-size: 9pt;
    font-weight: bold;
    white-space: nowrap;
    border-radius: 3px;
    z-index: 10;
    pointer-events: none;
    border: 1px solid var(--main-border-color);
    user-select: none;
}

.arrow {
    z-index: 10;
}

/* Верхнее положение */
.tooltip-top {
    top: 0;
    left: 50%;
    margin-top: -25px;
    transform: translateX(-50%) translateY(-100%);
}

.arrow-top {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-100%) rotate(270deg);
}

/* Правое положение */
.tooltip-right {
    position: absolute;
    left: 100%;
    top: 50%;
    margin-left: 25px;
    transform: translateY(-50%);
}

.arrow-right {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
}

/* Нижнее положение */
.tooltip-bottom {
    bottom: 0;
    left: 50%;
    margin-bottom: -25px;
    transform: translateX(-50%) translateY(100%);
}

.arrow-bottom {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) translateY(100%) rotate(90deg);
}

/* Левое положение */
.tooltip-left {
    position: absolute;
    right: 100%;
    top: 50%;
    margin-right: 25px;
    transform: translateY(-50%);
}

.arrow-left {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
}

/* Плавное появление и исчезновение */
.fade-enter-active, .fade-leave-active {
    transition: opacity 300ms ease, transform 300ms ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>