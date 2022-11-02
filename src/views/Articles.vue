<script setup lang="ts">
import ArticleTitle from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import ShortDescription from "../components/ShortDescription.vue";
import DateTime from "../components/DateTime.vue";
</script>

<template>
  <article>
    <Breadcrumb path="Home/Articles/Cette Article"></Breadcrumb>

    <div class="tags">
      <Tag>MAJUSCULE</Tag>
    </div>

    <ArticleTitle>Titre de l'article</ArticleTitle>

    <ShortDescription>
      This is a short description of this article. It can have multiple lines
    </ShortDescription>

    <DateTime date="01/01/2001 00:01"></DateTime>
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
