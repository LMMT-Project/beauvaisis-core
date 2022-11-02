<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TopPage from "./components/Navigation/TopPage.vue";
</script>

<template>
  <div v-if="this.$route.name !== 'PageNotFound'">
    <TopPage></TopPage>
  </div>

  <RouterView />
</template>

<style scoped></style>
