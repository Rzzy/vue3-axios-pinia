<template>
  <div>
    <nav class="nav flex-column">
      <router-link :to="{name: item.routeName }" active-class="active" v-for="(item, index) in menu" :key="index">{{ item.name }}</router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@/components/types/SideBarNav';
defineProps<{
  menu: MenuItem[]
}>()
</script>

<style scoped>

</style>