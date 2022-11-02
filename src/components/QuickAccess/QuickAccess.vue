<script setup lang="ts">
import QuickAccessButton from "./QuickAccessButton.vue";
import SectionTitle      from "../Utils/SectionTitle.vue";
</script>

<template>
  <section class="quickaccess-container">
    <SectionTitle class="quickaccess-title">Accès Rapide</SectionTitle>
    <div class="quickaccess-buttons">
      <QuickAccessButton> Text</QuickAccessButton>
      <QuickAccessButton> Text</QuickAccessButton>
      <QuickAccessButton> Text</QuickAccessButton>
      <QuickAccessButton> Text</QuickAccessButton>
    </div>
  </section>
</template>

<style scoped>

.quickaccess-container {
  width: 80vw;
  margin: .6rem auto .6rem;
}

.quickaccess-title {
  margin-top: 50px;
}

.quickaccess-buttons {
  margin: 64px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px 116px;
  flex-wrap: wrap;
}

@media screen and (max-width: 700px) {
  .quickaccess-buttons {
    justify-content: space-around;
  }
}

</style>
