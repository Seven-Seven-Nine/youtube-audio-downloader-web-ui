<script lang="ts" setup>
import IconUpperLeftCorner from "../assets/icon-upper-left-corner.svg?component";
import IconUpperRightCorner from "../assets/icon-upper-right-corner.svg?component";
import IconBottomLeftCorner from "../assets/icon-bottom-left-corner.svg?component";
import IconBottomRightCorner from "../assets/icon-bottom-right-corner.svg?component";
</script>

<template>
    <div class="block-content">
        <div class="block-border-icons">
            <IconUpperLeftCorner class="icon-corner upper-left-corner" />
            <IconUpperRightCorner class="icon-corner upper-right-corner" />
            <IconBottomLeftCorner class="icon-corner bottom-left-corner" />
            <IconBottomRightCorner class="icon-corner bottom-right-corner" />
        </div>
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
@keyframes appearance-block-content {
    0% {
        opacity: 0.1;
        transform: scale(0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.block-content {
    background-color: var(--panel-background-color);
    border-radius: 10px;
    border: 1px solid var(--main-border-color);
    padding: 0;
    position: relative;
    min-width: 500px;
    min-height: 300px;
    transition: background-color 100ms;
    animation: appearance-block-content 200ms ease;
}

.block-border-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.upper-left-corner {
    position: absolute;
    top: 4px;
    left: 4px;
}

.upper-right-corner {
    position: absolute;
    top: 4px;
    right: 4px;
}

.bottom-left-corner {
    position: absolute;
    bottom: 4px;
    left: 4px;
}

.bottom-right-corner {
    position: absolute;
    bottom: 4px;
    right: 4px;
}

.main-content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 10px;
    box-sizing: border-box;
}
</style>