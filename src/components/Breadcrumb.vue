<script setup lang="ts">
defineProps<{
  path: {
    type: string;
    default: "";
  };
}>();
</script>

<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="item in path.split('/')">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 50px;
}
ul {
  display: flex;
}
li {
  list-style-type: none;
}
li::after {
  content: ">";
  margin: 0 20px;
}
li:last-child::after {
  content: "";
}
</style>
