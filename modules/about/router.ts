import type { Router } from "vue-router";

export default function (router: Router) {
  router.addRoute({
    path: "/about",
    component: () => import("./MAbout.vue"),
    meta: {
      title: "About",
    },
  });
}
