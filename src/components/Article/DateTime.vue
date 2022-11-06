<script setup lang="ts">
import IconDateTime from "../icons/IconDateTime.vue";

defineProps<{
  date: Date;
}>();
</script>

<template>
  <div class="datetime">
    <div class="icon-datetime">
      <IconDateTime />
    </div>
    <p>{{ date }}</p>
  </div>
</template>

<style scoped>
.datetime {
  display: flex;
  justify-content: flex-start;
  line-height: 24px;
  background-color: var(--light-blue);
  border-radius: 0 0 0 20px;
  padding: 10px 10px 10px 20px;
}

.datetime p {
  margin-left: 10px;
}
</style>
