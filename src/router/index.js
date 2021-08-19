import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/units",
    name: "Units",
    component: () =>
      import(/* webpackChunkName: "units" */ "../views/Units.vue"),
  },
  {
    path: "/units/:unit_id",
    name: "Unit Detail",
    component: () =>
      import(/* webpackChunkName: "unit detail" */ "../views/UnitDetails.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "_404",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/_404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
