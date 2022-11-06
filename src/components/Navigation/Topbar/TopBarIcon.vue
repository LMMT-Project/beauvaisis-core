<script setup lang="ts">
  defineProps<{
    href: string;
  }>();
</script>

<template>
  <a class="content" :href="href"><slot class="icon"></slot></a>
</template>

<style scoped>
.content {
  display: block;
  position: relative;
  width: 44px;
  height: 44px;
  background-color: var(--light-blue);
  border-radius: 50%;
  margin-left: 22px;
}
</style>
