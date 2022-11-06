<script setup lang="ts">
import HeroWave     from "../components/Hero/HeroWaves.vue";
import ArticleTitle from "../components/Article/Title.vue";
import Tag          from "../components/Article/Tag.vue";
import Breadcrumb   from "../components/Article/Breadcrumb.vue";
import DateTime     from "../components/Article/DateTime.vue";
import { ref, type Ref }      from "vue";

let title = ref(""),
    slug = ref(""),
    content = ref(""),
    tags: Ref<string[]> = ref([]);

slug.value =  location.href.split("/")[location.href.split("/").length - 1];

let pathv = `Home/${tags.value[0]}/${title.value}`

console.log(slug);


fetch(`http://127.0.0.1:3333/news/${slug.value}`)
  .then(res => res.json())
  .then(res => {
    title.value = res.title;
    slug.value = res.slug;
    content.value = res.content;

    for(const tag of res.tags) {
      tags.value = [...tags.value, tag.name];
    }
  });

</script>

<template>
  <article>
    <div class="article-header-container">
      <div class="article-header-content">
        <div class="article-header-top">
          <div class="article-breadcrumb">
            <Breadcrumb :path="pathv" />
          </div>
          <div class="article-datetime">
            <DateTime date="01/01/2001 00:01" />
          </div>
        </div>

        <div class="article-header-bot">
          <div class="article-header-tags-title">
            <div class="article-tags">
              <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
            </div>
            <div class="article-title">
              <ArticleTitle>{{title}}</ArticleTitle>
            </div>
          </div>
        </div>
      </div>
      <HeroWave />
    </div>

    <div class="article-body" v-html="content">
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
  margin: 50px auto auto;
  font-size: 24px;
}

.article-body p {
  margin-bottom: 50px;
  text-align: justify;
}

@media screen and (max-height: 750px) {
  .article-header-container {
    height: min(100vh, 100%);
    padding: 4rem 0;
  }

  .article-tags {
    margin: 2rem;
  }
}

@media screen and (max-height: 850px) {
  .article-title {
    width: 100%;
  }

}

@media screen and (max-width: 800px) {
  .article-header-top {
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
  }

  .article-breadcrumb,
  .article-datetime {
    width: max-content;
    margin: auto;
    height: 40px;
  }
}
</style>
