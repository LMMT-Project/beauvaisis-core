<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <a class="content" :href="href">
    <span class="icon">
      <slot></slot>
    </span>
  </a>
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

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
