<script setup lang="ts">
import IconMail     from "../icons/IconMail.vue";
import IconPhone    from "../icons/IconPhone.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import TopBarIcon   from "../Navigation/Topbar/TopBarIcon.vue";
</script>

<template>
  <div class="footer">
    <div class="footer-top">
      <div class="icons-container">
        <TopBarIcon href="/contact"
        >
          <IconMail class="icon"></IconMail
          >
        </TopBarIcon>
        <TopBarIcon href="tel:0344156800"
        >
          <IconPhone class="icon"></IconPhone
          >
        </TopBarIcon>
        <TopBarIcon href="https://www.facebook.com/beauvaisis"
        >
          <IconFacebook class="icon"></IconFacebook
          >
        </TopBarIcon>
      </div>
      <div class="navitems-container">
        <span><a href="/">Accueil</a></span>
        <span><a href="/news/presentation-generale">Présentation</a></span>
        <span><a href="/news">Actualité</a></span>
        <span><a href="/news/tourisme">Tourisme</a></span>
        <span><a href="/contact">Contact</a></span>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Ce site a été réalisé dans le cadre d'un projet éducatif. Il est a été conçu seulement dans le but d'améliorer
        le site existant visuellement. <br> Le site de base est accessible via ce lien web : <a
          href="http://www.beauvaisis.fr/"> http://www.beauvaisis.fr/ </a></p>
    </div>
  </div>
</template>

<style scoped>
.footer-top {
  height: 172px;
  background-color: var(--dark-blue);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}

.icons-container {
  display: flex;
  justify-content: center;
}

.navitems-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}

.navitems-container span {
  display: inline-block;
  position: relative;
}

.navitems-container a {
  color: var(--white);
  text-decoration: none;
  font-size: 18px;
}

.navitems-container a:hover {
  text-decoration: underline;
}

.navitems-container span::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -24px;
  border-bottom: 2px solid var(--active);
  width: 16px;
}

.navitems-container span:last-child::after {
  content: "";
  display: none;
}

.footer-bottom {
  height: 100%;
  background-color: var(--light-blue);
  text-align: center;
  line-height: 24px;
  padding: .7rem 0;
}
</style>
