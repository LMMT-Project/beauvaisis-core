<script setup lang="ts">
import NavBarItem from "./NavBarItem.vue";
</script>

<template>
  <div class="navbar">
    <img src="../assets/LogoAgglo.png" alt="Logo agglomération Beauvaisis" />
    <nav>
      <NavBarItem text="L'agglo" href="/"></NavBarItem>
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
}

img {
  margin: 0 60px 0 68px;
}

nav {
}
</style>
