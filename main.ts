import { createApp as createVueApp, h } from "vue";
import { createPinia } from "pinia";

import {
  RouterView,
  createRouter,
  createWebHistory,
  type Router,
} from "vue-router";

interface RouteRegister {
  default?: (router: Router) => void;
}

const moduleRoutes = import.meta.glob<RouteRegister>("./modules/**/router.ts", {
  eager: true,
});

function createApp() {
  const app = createVueApp(RouterView);

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
  });

  Object.keys(moduleRoutes).forEach((key) => {
    const register = moduleRoutes[key].default;

    if (register) {
      register(router);
    }
  });

  app.use(createPinia());
  app.use(router);

  app.mount("#app");
}

createApp();
