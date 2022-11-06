<script setup lang="ts">
import IconDateTime from "../icons/IconDateTime.vue";

defineProps<{
  date: Date;
}>();
</script>

<template>
  <div class="datetime">
    <IconDateTime class="icon-datetime" />
    <p>{{ date }}</p>
  </div>
</template>

<style scoped>
.datetime {
  position: relative;
  display: flex;
  gap: 10px;
  background-color: var(--light-blue);
  border-radius: 20px 0 0 20px;
  height: 100%;
}

.icon-datetime {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.datetime p {
  margin: auto 5px auto 40px;
}
</style>
