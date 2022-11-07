<script setup lang="ts">
defineProps<{
  label: {
    type: string;
    value: "";
  };
  name: {
    type: string;
    value: "";
  };
  placeholder: {
    type: string;
    value: "";
  };
  inputid: string;
}>();
</script>

<template>
  <div class="contact-input">
    <label :for="inputid">{{ label }}</label>
    <textarea :id="inputid" :name="name" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
.contact-input {
  display: flex;
  flex-flow: column nowrap;
  font-size: 18px;
}

textarea {
  height: 200px;
  font-family: Arial, serif;
  font-size: 14px;
  padding: 5px;
  border: 2px solid var(--dark-blue);
  border-radius: 10px;
}
</style>
