<template>

  <div class="news-item">

    <div class="news-img"></div>

    <div class="news-arrow">
      <div class="arrow-ctx">
        <p class="arrow-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>

  </div>

</template>


<style scoped>

.news-item {
  position: relative;

  height: 100%;
  width: 100%;
  background-color: var(--light-blue);
  border-radius: 6.9mm;
}

.news-img {
  background-color: coral;
  border-radius: 6.9mm 6.9mm 0 0;
  height: calc(100% - 128px);
  width: 100%;
}

.news-arrow {
  --back-arrow: 18px;
  --arrow-height: 70px;

  display: block;
  cursor: pointer;

  position: absolute;
  height: var(--arrow-height);
  width: calc(var(--back-arrow) + 16px);
  background-color: var(--dark-blue);
  bottom: 94px;
  left: calc(-1 * var(--back-arrow));

  transition: all 0.25s ease-out;
}

.news-arrow:hover {
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

.news-arrow:hover .arrow-text {
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
  border-color: transparent transparent var(--light-blue) transparent;

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

  border-width: calc(var(--arrow-height) / 2) 0 calc(var(--arrow-height) / 2) var(--arrow-size);
  border-color: transparent transparent transparent var(--dark-blue);
}

</style>