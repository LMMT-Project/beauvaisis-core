<script setup lang="ts">

defineProps<{

  imgLink: string;
  text: string;
  link: string;

}>();

</script>

<template>
  <a class="news-item" :href="link">
    <div class="news-img" :src="imgLink" alt="Article Beauvaisis"> </div>

    <div class="news-arrow">
      <div class="arrow-ctx">
        <p class="arrow-text">
         {{text}}
        </p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.news-item {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  background-color: var(--active);
  border-radius: 6.9mm;
  cursor: pointer;
}

.news-img {
  display: block;
  border-radius: 6.9mm 6.9mm 0 0;
  background-size: contain;
  background-position: center center;
  background-image: v-bind(imgLink);
  height: calc(100% - 128px);
  width: 100%;
}

.news-arrow {
  --back-arrow: 18px;
  --arrow-height: 70px;

  display: block;

  position: absolute;
  height: var(--arrow-height);
  width: calc(var(--back-arrow) + 16px);
  background-color: var(--dark-blue);
  bottom: 94px;
  left: calc(-1 * var(--back-arrow));

  transition: all 0.25s ease-out;
}

.news-item:hover .news-arrow {
  width: calc(100% + var(--back-arrow) + 16px);
}

.arrow-ctx {
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  font-size: 1.1rem;
}

.arrow-text {
  display: none;
  color: var(--white);
}

.news-item:hover .arrow-text {
  display: inline;
  position: absolute;
  top: 16px;
  left: 16px;
}

.news-arrow::before {
  --triangle-size: 18px;

  position: absolute;

  content: "";

  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 var(--triangle-size) var(--triangle-size);
  border-color: transparent transparent var(--active) transparent;

  top: calc(-1 * var(--triangle-size));
}

.news-arrow::after {
  --arrow-height: 70px;
  --front-arrow: 34px;
  --arrow-size: 16px;

  content: "";

  position: absolute;
  right: calc(-1 * var(--front-arrow) / 2 + 1px);

  width: 0;
  height: 0;
  border-style: solid;

  border-width: calc(var(--arrow-height) / 2) 0 calc(var(--arrow-height) / 2)
    var(--arrow-size);
  border-color: transparent transparent transparent var(--dark-blue);
}

@media screen and (max-width: 950px) {

  .news-arrow {
    width: calc(100% + var(--back-arrow) + 16px);
  }

  .arrow-text {
    display: inline;
    position: absolute;
    top: 16px;
    left: 16px;
  }

}

</style>
