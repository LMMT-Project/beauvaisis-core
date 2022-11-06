<script setup lang="ts">
import HeroWave from "../components/Hero/HeroWaves.vue";
import ArticleTitle from "../components/Article/Title.vue";
import Tag from "../components/Article/Tag.vue";
import Breadcrumb from "../components/Article/Breadcrumb.vue";
import ShortDescription from "../components/Article/ShortDescription.vue";
import DateTime from "../components/Article/DateTime.vue";
</script>

<template>
  <article>
    <div class="article-header-container">
      <div class="article-header-content">
        <div class="article-header-top">
          <div class="article-breadcrumb">
            <Breadcrumb path="Home/Articles/Cet Article" />
          </div>
          <div class="article-datetime">
            <DateTime date="01/01/2001 00:01" />
          </div>
        </div>

        <div class="article-header-bot">
          <div class="article-header-tags-title">
            <div class="article-tags">
              <Tag>tags</Tag>
              <Tag>MAJUSCULE</Tag>
            </div>
            <div class="article-title">
              <ArticleTitle>Titre de l'article</ArticleTitle>
            </div>
          </div>
          <div class="article-description">
            <ShortDescription class="article-description">
              This is a short description of this article. It can have multiple
              lines Adipisci decore deseruisse viverra mollis accumsan. Non
              vituperatoribus suscipit natum pulvinar maiorum scelerisque
              referrentur.
            </ShortDescription>
          </div>
        </div>
      </div>
      <HeroWave />
    </div>

    <div class="article-body">
      <p>
        PARAGRAPHE 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum cumque deleniti dolor, est eum, harum ipsam itaque iusto laudantium
        libero maiores neque nesciunt numquam quasi quos, repellat repudiandae
        unde ut.
      </p>
      <p>
        PARAGRAPHE 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid architecto consequuntur debitis dolor error et harum ipsum
        labore libero maxime mollitia nam nemo neque nobis ratione repellendus,
        voluptate? Esse, similique.
      </p>
      <p>
        PARAGRAPHE 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Delectus doloremque esse facere id incidunt ipsa laborum magni minus
        molestias officiis perferendis, quasi quibusdam quis ratione sunt unde
        vel voluptas! Laboriosam!
      </p>
      <p>
        PARAGRAPHE 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam aspernatur, at consectetur, eaque facere fugit inventore ipsam
        labore magnam odit quae quam quis repellat sed sunt tempore voluptate.
        A, beatae?
      </p>
    </div>
  </article>
</template>

<style scoped>
.article-header-container {
  position: relative;
  background-image: url("../assets/images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(95vh - var(--navBar-height) - var(--topBar-height));
  overflow: auto;
}

.article-header-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    78deg,
    rgba(66, 51, 51, 0.6) -14%,
    rgba(88, 71, 71, 0.3) 86%
  );
  z-index: 10;
}

.article-header-content {
  position: relative;
  z-index: 20;
  height: 80%;
  color: var(--white);
}

.article-header-top {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
}
/*SALUT GERANDE DINDE*/ /* tg */
.article-header-bot {
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
.article-header-tags-title .article-title {
  margin-top: 20px;
}

.article-tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.article-body {
  width: 80%;
  margin: auto;
}

.article-body {
  margin-top: 50px;
  font-size: 24px;
}

.article-body p {
  margin-bottom: 50px;
  text-align: justify;
}
</style>
