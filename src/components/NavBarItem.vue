<script setup lang="ts">
defineProps<{
  text: string;
  href: string;
}>();
</script>

<template>
  <a :href="href">
    {{ text }}
  </a>
</template>

<style scoped>
a {
  margin-left: 40px;
  padding: 16px 32px;
  color: var(--dark-blue);
  font-family: Arial;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}
</style>
