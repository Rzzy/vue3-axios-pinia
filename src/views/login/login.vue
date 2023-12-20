<template>
  <div>
    登录
  </div>
</template>

<script setup lang="ts">
import axios from '@/utils/axios.ts';
const res = await axios.get('/user');
console.log(res)
</script>

<style scoped>

</style>