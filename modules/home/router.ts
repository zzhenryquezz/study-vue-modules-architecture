import type { Router } from "vue-router";

export default function (router: Router) {
  router.addRoute({
    path: "/",
    component: () => import("./MHome.vue"),
    meta: {
      title: "Home page",
    },
  });
}
