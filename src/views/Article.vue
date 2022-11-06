<script setup lang="ts">
import ArticleTitle from "../components/Article/Title.vue";
import Tag from "../components/Article/Tag.vue";
import Breadcrumb from "../components/Article/Breadcrumb.vue";
import ShortDescription from "../components/Article/ShortDescription.vue";
import DateTime from "../components/Article/DateTime.vue";
</script>

<template>
  <article>
    <Breadcrumb path="Home/Articles/Cette Article" />

<!--    bg image de l'image de présentation (comme le hero)-->
    <div class="article-header-container">
      <div class="article-header-content">
        <div class="article-tags">
          <Tag>tags</Tag>
          <Tag>MAJUSCULE</Tag>
        </div>
        <div class="article-title">
          <ArticleTitle>Titre de l'article</ArticleTitle>
        </div>
        <div class="article-description">
          <ShortDescription class="article-description">
            This is a short description of this article. It can have multiple lines
          </ShortDescription>
        </div>
      </div>
    </div>


    <DateTime date="01/01/2001 00:01" />
    <!--
      Breadcrumb
      Tags
      Titre
      Courte description
      Date
      Article body
      Footer
    -->
  </article>
</template>

<style scoped>
article {
  margin-top: 50px;
}
.article-header-container {
  position: relative;
  width: 100%;
  height: calc(95vh - var(--navBar-height) - var(--topBar-height));
  background-image: url("../assets/images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
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
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}
.article-tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.article-title {
  color: var(--white);
}
.article-description {
  color: var(--white);
}
</style>
