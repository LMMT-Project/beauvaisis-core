<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <input type="submit" :value="value" />
</template>

<style scoped>
  input {
    border: 2px solid var(--dark-blue);
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 20px;
  }
</style>
