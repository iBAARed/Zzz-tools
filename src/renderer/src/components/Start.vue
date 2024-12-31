<template>
  <div class="zzz-start-container background-plate">
    <el-button @click="getImage">获取图片</el-button>
  </div>
</template>

<script setup lang="ts">
// console.log('start1',window)

const getImage = () => {
  let dirInfo = window.startFunction.invoke('getStartImagePath')
  console.log(dirInfo,'dir')
}
</script>

<style>

</style>