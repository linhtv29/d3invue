import { createRouter, createWebHistory } from "vue-router";

import { publicRoutes } from "./public";

const routes = [...publicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
