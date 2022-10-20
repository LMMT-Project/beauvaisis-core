<script setup lang="ts">
import TopBar from "./TopBar.vue";
import NavBar from "./NavBar.vue";
</script>

<template>
  <TopBar class="topbar"></TopBar>
  <NavBar class="navbar"></NavBar>
</template>

<style scoped>
.topbar {
  position: relative;
  z-index: 10;
}
</style>
