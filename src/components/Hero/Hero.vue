<script setup lang="ts">
import HeroSearchBar from "./HeroSearchBar.vue";
</script>

<template>
  <div class="hero-container">
    <div class="hero-container-shadow">
      <div class="hero-title">
        <h1>Communauté d'agglomération du Beauvaisis</h1>
      </div>
      <HeroSearchBar></HeroSearchBar>
      <!-- <div class="hero-cut"></div> -->
      <!-- TODO: Quick access element -->
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  width: 100%;
  height: 95vh;
  background-image: url("../../assets/images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-container-shadow {
  display: inline-block;
  width: 100%;
  height: 95vh;
  background: linear-gradient(
    78.71deg,
    rgba(66, 51, 51, 0.61) -14.18%,
    rgba(88, 71, 71, 0.3111) 86.63%
  );
}

.hero-cut {
  position: absolute;
  top: calc(95vh - 40px);
  display: inline-block;
  height: 0;
  width: 0;
  border-bottom: 5vh solid var(--white);
  border-left: 100vw solid transparent;
}

.hero-title {
  width: 60vw;
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
  margin: auto;
  margin-top: 24px;
  width: 312px;
  border-bottom: 4px solid var(--light-blue);
  border-radius: 4px;
}
</style>
