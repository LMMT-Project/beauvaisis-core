<script setup lang="ts">
const getInputValue = () => (document.getElementById("hamburger-checkbox") as HTMLInputElement)?.checked;
</script>

<template>
  <div class="hamburger-ctx">
    <input class="hamburger-checkbox" type="checkbox" id="hamburger-checkbox"
           @change="$emit('inputchecked', getInputValue())" />
    <label class="hamburger-icon" for="hamburger-checkbox">
      <span class="navicon"></span>
    </label>
  </div>
</template>


<style scoped>
.hamburger-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.navicon {
  background: var(--dark-blue);
  display: block;
  height: 4px;
  position: relative;
  transition: all 0.2s ease-out;
  width: 36px;
}

.navicon::before,
.navicon::after {
  background: var(--dark-blue);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.navicon::before {
  top: 10px;
}

.navicon::after {
  top: -10px;
}

.hamburger-checkbox {
  display: none;
}

.hamburger-checkbox:checked ~ .hamburger-icon .navicon {
  background: transparent;
}

.hamburger-checkbox:checked ~ .hamburger-icon .navicon::before {
  transform: rotate(-45deg);
  top: 0;
}

.hamburger-checkbox:checked ~ .hamburger-icon .navicon::after {
  transform: rotate(45deg);
  top: 0;
}
</style>
