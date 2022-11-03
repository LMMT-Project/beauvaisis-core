<script setup lang="ts">
import NavBarItem from "./NavBarItem.vue";
import NavBarHamburger from "./NavBarHamburger.vue";
</script>

<template>
  <div class="navbar">
    <img
      src="../../../assets/images/LogoAgglo.png"
      alt="Logo agglomération Beauvaisis"
    />

    <NavBarHamburger />

    <nav>
      <NavBarItem text="L'agglo" href="/" isActive="true"></NavBarItem>
      <NavBarItem text="Text" href="#"></NavBarItem>
      <NavBarItem text="Text" href="#"></NavBarItem>
      <NavBarItem text="Text" href="#"></NavBarItem>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background-color: var(--white);
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--navBar-height);
  line-height: 96px;
}

img {
  margin: 0 60px 0 68px;
  height: 100%;
  width: auto;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}
</style>
