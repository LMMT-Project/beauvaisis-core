<template>
  <p><slot></slot></p>
</template>

<style scoped>
p {
  display: inline-block;
  background-color: var(--light-blue);
  border-radius: 20px;
  padding: 5px 10px;
  color: var(--white);
  margin: 0 10px;
  text-transform: lowercase;
}

p::first-letter {
  text-transform: uppercase;
}
</style>
