<script setup lang="ts">
  defineProps<{
    text: {
      type: string,
      default: "Text",
    },
    href: string,
}>();
</script>

<template>
  <a :href="href">
    {{ text }}
  </a>
</template>

<style scoped>
a {
  height: 100%;
  margin-left: 40px;
  padding: 0 36px;
  color: var(--dark-blue);
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

a:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: var(--light-blue);
  height: 8px;
  transition-property: right;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
a:hover:before,
a:focus:before,
a:active:before {
  right: 0;
}
</style>
