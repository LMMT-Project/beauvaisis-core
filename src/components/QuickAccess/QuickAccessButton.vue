<script setup lang="ts">
import IconMessage from "../icons/IconMessage.vue";

defineProps<{
  href: string;
}>();
</script>

<template>
  <a class="QA-button" :href="href">
    <IconMessage class="QA-icon" />
    <div class="QA-arrow">
      <span class="QA-text">
        <slot />
      </span>
    </div>
  </a>
</template>

<style scoped>
.QA-icon {
  position: absolute;

  width: 60px;
  height: 60px;

  left: 50%;
  top: 16px;
  transform: translateX(-50%);
}

.QA-button {
  display: block;
  cursor: pointer;
  position: relative;
  width: 244px;
  height: 196px;
  margin: 8px -30px;
  border-radius: 16px;
  background-color: var(--dark-blue);
}

.QA-arrow {
  --back-arrow: 18px;
  --arrow-height: 70px;

  display: block;

  position: absolute;
  height: var(--arrow-height);
  width: calc(100% + var(--back-arrow) + 16px);
  background-color: var(--light-blue);
  bottom: calc(15%);
  left: calc(-1 * var(--back-arrow));
}

.QA-text {
  display: block;
  color: initial;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.QA-arrow::before {
  --triangle-size: 18px;

  position: absolute;

  content: "";

  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 var(--triangle-size) var(--triangle-size);
  border-color: transparent transparent var(--active) transparent;

  top: calc(-1 * var(--triangle-size));
}

.QA-arrow::after {
  --arrow-height: 70px;
  --front-arrow: 34px;
  --arrow-size: 16px;

  content: "";

  position: absolute;
  right: calc(-1 * var(--front-arrow) / 2 + 1px);

  width: 0;
  height: 0;
  border-style: solid;

  border-width: calc(var(--arrow-height) / 2) 0 calc(var(--arrow-height) / 2)
    var(--arrow-size);
  border-color: transparent transparent transparent var(--light-blue);
}
</style>
