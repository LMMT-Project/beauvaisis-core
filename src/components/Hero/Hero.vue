<script setup lang="ts">
import HeroSearchBar from "./Items/HeroSearchBar.vue";
import HeroWaves     from "@/components/Hero/HeroWaves.vue";
</script>

<template>
  <section class="hero-container">
    <div class="hero-content">
      <div class="hero-title">
        <h1>Communauté d'agglomération du Beauvaisis</h1>
      </div>
      <HeroSearchBar />

    </div>


    <HeroWaves />
  </section>

</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: calc(95vh - var(--navBar-height) - var(--topBar-height));
  background-image: url("../../assets/images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;

  overflow: auto;
}

.hero-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    78deg,
    rgba(66, 51, 51, 0.6) -14%,
    rgba(88, 71, 71, 0.3) 86%
  );

  z-index: 10;
}

.hero-content {
  position: relative;
  z-index: 20;
}

.hero-title {
  margin: 130px auto auto;
}

h1 {
  color: var(--white);
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}

h1::after {
  content: "";
  display: block;
  margin: 24px auto auto;
  width: 312px;
  border-bottom: 4px solid var(--light-blue);
  border-radius: 4px;
}

@media screen and (max-height: 750px) {
  .hero-container {
    height: min(100vh, 100%);
    padding: 2rem 0;
  }
}

@media screen and (max-height: 850px) {
  .hero-title {
    width: 100%;
  }
}
</style>
