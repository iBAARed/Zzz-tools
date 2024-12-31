<script setup lang="ts">
import LeftSelectOption from '@renderer/components/LeftSelectOption/LeftSelectOption.vue'

</script>

<template>
    <div class="zzz-auto-util-main">
        <div class="zzz-auto-util-left">
            <LeftSelectOption />
        </div>

        <main class="zzz-auto-util-right">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.zzz-auto-util-main {
    display: flex;
    height: 100%;
    width: 100%;
}
.zzz-auto-util-right{
    flex: 1;
}
</style>