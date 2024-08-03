<script setup>
import { ref } from 'vue'

// 获取全局属性
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()?.appContext.config.globalProperties; // 获取全局属性

defineProps({
  msg: String,
})

const count = ref(0)

function showToast () {
  instance?.$toast({
    message: '显示toast插件',
    duration: 1000,
    isShow: true
  });
}
</script>

<template>

  <button @click="showToast">自定义toast插件</button>

</template>

<style scoped>

</style>
