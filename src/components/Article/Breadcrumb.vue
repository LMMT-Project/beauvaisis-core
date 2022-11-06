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
  padding-inline-start: 0;
  width: max-content;
  background-color: var(--light-blue);
  border-radius: 0 100px 100px 0;
  padding: 20px 50px;
}
li {
  color: var(--white);
  list-style-type: none;
}
li::after {
  color: var(--white);
  content: ">";
  margin: 0 20px;
}
li:last-child::after {
  content: "";
  display: none;
}
a {
  color: var(--white);
  text-decoration: none;
  text-transform: capitalize;
}
</style>
