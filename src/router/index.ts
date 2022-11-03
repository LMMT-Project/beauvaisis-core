import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Article.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Article",
      name: "Article",
      component: Articles,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
