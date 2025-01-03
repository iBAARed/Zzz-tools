<template>
  <div class="zzz-start-container background-plate">
    <el-carousel :interval="3000" type="card" height="350px">
      <el-carousel-item v-for="(image, index) in startImageList" :key="index">
        <el-image style="width: 100%; height: 100%" :src="image" fit="cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const startImageList = ref<string[]>([]);

const getStartImageList = async () => {
  const images = await window.startFunction.invoke('getStartImagePath');
  startImageList.value = images;
}

getStartImageList();
</script>