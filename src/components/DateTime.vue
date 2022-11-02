<script setup lang="ts">
import IconDateTime from "./icons/IconDateTime.vue";

defineProps<{
  date: Date;
}>();

</script>

<template>
  <div class="datetime">
    <IconDateTime></IconDateTime>
    <p>{{ date }}</p>
  </div>
</template>

<style scoped>
.datetime {
  margin-top: 100px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  width: 150px;
}
</style>
