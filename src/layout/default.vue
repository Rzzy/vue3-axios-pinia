<template>
  <div class="container">
    <div class="row">
    <div class="side-nav col-3">
      <side-bar-nav :menu="store.menus"></side-bar-nav>
    </div>
    <div class="cont-wrap col-9">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import SideBarNav from '@/components/SideBarNav.vue';
import { useMenuStore } from '@/store/menu';
const store = useMenuStore();
</script>

<style scoped>

</style>