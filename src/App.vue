<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div v-if="this.$route.name != 'PageNotFound'">
    <TopBar></TopBar>
    <NavBar></NavBar>
  </div>


  <RouterView />
</template>

<style scoped></style>
