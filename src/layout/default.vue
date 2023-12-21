<template>
  <div class="container">
    <div class="row">
    <div class="side-nav col-3">
      <nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled">Disabled</a>
      </nav>
    </div>
    <div class="cont-wrap col-9">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>