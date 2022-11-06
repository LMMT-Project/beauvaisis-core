<script setup lang="ts">
import QuickAccessButton from "./QuickAccessButton.vue";
import SectionTitle from "../Utils/SectionTitle.vue";
import IconRouage from "../icons/IconRouage.vue";
import IconKey from "../icons/IconKey.vue";
import IconPassport from "../icons/IconPassport.vue";
import IconBus from "../icons/IconBus.vue";
</script>

<template>
  <section class="quickaccess-container">
    <SectionTitle class="quickaccess-title">Accès Rapide</SectionTitle>
    <div class="quickaccess-buttons">
      <QuickAccessButton href="/news/fonctionnement-agglo">
        <template v-slot:icon><IconRouage /></template>
        <template v-slot:text>Fonctionnement de l'agglo</template>
      </QuickAccessButton>
      <QuickAccessButton href="/news/les-secteurs-cles">
        <template v-slot:icon><IconKey /></template>
        <template v-slot:text>Les secteurs clés</template>
      </QuickAccessButton>
      <QuickAccessButton href="/news/tourisme">
        <template v-slot:icon><IconPassport /></template>
        <template v-slot:text>Sites touristiques</template>
      </QuickAccessButton>
      <QuickAccessButton href="/news/transports-urbains">
        <template v-slot:icon><IconBus /></template>
        <template v-slot:text>Transports</template>
      </QuickAccessButton>
    </div>
  </section>
</template>

<style scoped>
.quickaccess-container {
  width: 80vw;
  margin: 0.6rem auto 0.6rem;
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
