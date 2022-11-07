<script setup lang="ts">
import IconMail from "../../icons/IconMail.vue";
import IconPhone from "../../icons/IconPhone.vue";
import IconFacebook from "../../icons/IconFacebook.vue";
import TopBarIcon from "./TopBarIcon.vue";
</script>

<template>
  <div class="top-bar">
    <div class="icons-container">
      <TopBarIcon href="/contact"
        ><IconMail class="icon"></IconMail
      ></TopBarIcon>
      <TopBarIcon href="tel:0344156800"
        ><IconPhone class="icon"></IconPhone
      ></TopBarIcon>
      <TopBarIcon href="https://www.facebook.com/beauvaisis"
        ><IconFacebook class="icon"></IconFacebook
      ></TopBarIcon>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  width: 100%;
  height: var(--topBar-height);
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

@media screen and (max-width: 520px) {
  .top-bar {
    justify-content: center;
  }
  .icons-container {
    margin: auto;
  }
}
</style>
