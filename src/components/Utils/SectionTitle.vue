<template>
  <h2><slot /></h2>
</template>

<style scoped>
h2 {
  background-color: transparent;
  text-align: center;
  font-size: 2rem;
}
h2::after {
  content: "";
  display: block;
  margin: 12px auto auto;
  width: 154px;
  border-bottom: 4px solid var(--light-blue);
}
</style>
