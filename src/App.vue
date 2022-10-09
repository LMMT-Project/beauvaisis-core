<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <TopBar></TopBar>
  <NavBar></NavBar>

  <RouterView />
</template>

<style scoped></style>
