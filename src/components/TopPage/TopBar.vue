<script setup lang="ts">
import IconMail from "../icons/IconMail.vue";
import IconPhone from "../icons/IconPhone.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import TopBarIcon from "./TopBarIcon.vue";
</script>

<template>
  <div class="top-bar">
    <div class="icons-container">
      <TopBarIcon><IconMail class="icon"></IconMail></TopBarIcon>
      <TopBarIcon><IconPhone class="icon"></IconPhone></TopBarIcon>
      <TopBarIcon><IconFacebook class="icon"></IconFacebook></TopBarIcon>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  width: 100%;
  height: 64px;
  background-color: var(--dark-blue);
  align-items: center;
  justify-content: end;
}

.icons-container {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 86px;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
