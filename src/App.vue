<script setup lang="ts">
import { RouterView } from "vue-router";
import TopPage from "./components/Navigation/TopPage.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>


  <div v-if="this.$route.name !== 'PageNotFound'">
    <TopPage />
  </div>

  <RouterView />

  <div v-if="this.$route.name !== 'PageNotFound'">
    <Footer />
  </div>
</template>

<style scoped></style>
