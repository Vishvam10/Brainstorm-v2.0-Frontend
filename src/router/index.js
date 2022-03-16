import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.ENV.BASE_URL),
  routes,
});

export default router;
