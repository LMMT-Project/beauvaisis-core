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
      <li v-for="item in path.split('/')" :key="item">
        <a href="#">{{ item }}</a>
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
  color: var(--dark-blue);
  list-style-type: none;
}
li::after {
  color: var(--dark-blue);
  content: ">";
  margin: 0 20px;
}
li:last-child::after {
  content: "";
}
a {
  color: var(--dark-blue);
  text-decoration: none;
  text-transform: capitalize;
}
</style>
