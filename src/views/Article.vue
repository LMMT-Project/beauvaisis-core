<script setup lang="ts">
import ArticleTitle from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
</script>

<template>
  <article>
    <Breadcrumb path="Articles/Mon Article"></Breadcrumb>

    <!--Tags comme props et faire un for ?-->
    <div class="tags">
      <Tag>MAJUSCULE</Tag>
    </div>

    <ArticleTitle>Titre de l'article</ArticleTitle>
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
  margin-top: 100px;
}

.tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
