<script setup lang="ts">
import SectionTitle from "../Utils/SectionTitle.vue";
import NewsItem     from "./Items/NewsItem.vue";
</script>

<template>
  <section class="news-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill-opacity="1"
        d="M0,96L30,96C60,96,120,96,180,106.7C240,117,300,139,360,144C420,149,480,139,540,154.7C600,171,660,213,720,224C780,235,840,213,900,208C960,203,1020,213,1080,213.3C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>

    <div class="news-context">
      <SectionTitle class="quickaccess-title"
      >Dernières Actualités
      </SectionTitle
      >

      <div class="actus">
        <div class="first-actu">
          <news-item link="https://plui.beauvaisis.fr/"
                     img-link="url(https://plui.beauvaisis.fr/wp-content/uploads/2022/05/tille-slider.jpg)"
                     text="La communauté d’agglomération du Beauvaisis s’est engagée dans l’élaboration du Plan Local d’Urbanisme Intercommunal valant Habitat et Mobilités." />
        </div>
        <div class="second-actu">
          <news-item link="https://www.beauvaisisnotreterritoire.fr/"
                     img-link="url(https://www.beauvaisisnotreterritoire.fr/templates/yootheme/cache/2210-bnt-5e563f10.jpeg)"
                     text="Découvrez le magazine de l'agglomération !" />
        </div>
        <div class="third-actu">
          <news-item link="https://limesurvey.beauvaisis.fr/index.php/656818?lang=fr"
                     img-link="url(http://www.beauvaisis.fr/images/actus/2210-affiche-enquete-alimentaire.jpg)"
                     text="Projet alimentaire territorial : répondez à l’enquête !" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
svg {
  display: block;
}

svg path {
  fill: var(--light-blue);
}

.news-container {
  position: relative;
}

.news-context {
  background-color: var(--light-blue);
}

.first-actu {
  grid-area: f;
  width: 100%;
  height: 80vh;
}

.second-actu {
  grid-area: s;
  height: 40vh;
}

.third-actu {
  grid-area: t;
  height: 40vh;

}

.actus {
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  display: grid;
  grid-template-areas: "f f f f s s" "f f f f t t";
  gap: 32px 64px;
}

@media screen and (max-width: 950px) {

  .actus {
    width: 80vw;
    grid-template-areas: "f" "s" "t";
  }

  .actus div {
    width: 100%;
    height: 80vh;
  }

}
</style>
