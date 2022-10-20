<template>
  <h2><slot></slot></h2>
</template>

<style scoped>
  h2 {
    text-align: center;
  }
  h2::after {
    content: "";
    display: block;
    margin: 12px auto auto;
    width: 154px;
    border-bottom: 4px solid var(--light-blue);
  }
</style>