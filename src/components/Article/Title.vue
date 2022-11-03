<template>
  <h1><slot></slot></h1>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 48px;
}
h1::after {
  content: "";
  display: block;
  margin: 12px auto auto;
  width: 256px;
  border-bottom: 4px solid var(--light-blue);
}
</style>
