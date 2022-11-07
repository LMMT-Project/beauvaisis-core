<script setup lang="ts">
defineProps<{
  label: {
    type: string;
    value: "";
  };
  type: {
    type: string;
    value: "text";
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
    <input :id="inputid" :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
.contact-input {
  display: flex;
  flex-flow: column nowrap;
  font-size: 18px;
}
input {
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  border: 2px solid var(--dark-blue);
  padding: 20px;
}
</style>
