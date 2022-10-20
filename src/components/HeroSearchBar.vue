<script setup lang="ts">
import IconSearch from "./icons/IconSearch.vue";
</script>

<template>
  <div class="searchbar-container">
    <input type="text" placeholder="Rechercher..." />
    <button><IconSearch></IconSearch></button>
  </div>
</template>

<style scoped>
.searchbar-container {
  margin: 124px auto auto;
  width: 67%;
  max-width: 550px;
  height: 64px;
}

input {
  display: inline-block;
  width: calc(95% - 64px);
  padding: 0;
  height: 64px;
  border: 0;
  border-radius: 16px 0 0 16px;
  opacity: 0.6;
  vertical-align: top;
}

input::placeholder {
  text-align: center;
}

button {
  width: 64px;
  height: 64px;
  background-color: var(--light-blue);
  border: 0;
  border-radius: 0 16px 16px 0;
}

button:hover {
  cursor: pointer;
}
</style>
