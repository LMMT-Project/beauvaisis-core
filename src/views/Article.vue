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

    <div class="tags">
      <Tag>tags</Tag>
      <Tag>MAJUSCULE</Tag>
    </div>

    <ArticleTitle>Titre de l'article</ArticleTitle>

    <ShortDescription>
      This is a short description of this article. It can have multiple lines
    </ShortDescription>

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

.tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
