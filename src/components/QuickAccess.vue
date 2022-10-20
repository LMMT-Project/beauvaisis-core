<script setup lang="ts">
import QuickAccessButton from "./QuickAccessButton.vue";
import SectionTitle from "./SectionTitle.vue"
</script>

<template>
  <div class="quickaccess-container">
    <SectionTitle class="quickaccess-title">Accès Rapide</SectionTitle>
    <div class="quickaccess-buttons">
      <QuickAccessButton></QuickAccessButton>
      <QuickAccessButton></QuickAccessButton>
      <QuickAccessButton></QuickAccessButton>
      <QuickAccessButton></QuickAccessButton>
    </div>
  </div>

</template>

<style scoped>
  .quickaccess-title {
    margin-top: 50px;
  }
</style>
