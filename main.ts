import { createApp as createVueApp } from "vue";
import { createPinia } from "pinia";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as vuetifyComponents from "vuetify/components";
import * as directives from "vuetify/directives";

import { createRouter, createWebHistory, type Router } from "vue-router";

import App from "./app.vue";

interface RouteRegister {
  default?: (router: Router) => void;
}

const moduleRoutes = import.meta.glob<RouteRegister>("./modules/**/router.ts", {
  eager: true,
});

const components = import.meta.glob<any>("./components/*.vue", {
  eager: true,
});

function createApp() {
  const app = createVueApp(App);

  // router
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

  app.use(router);

  // vuetify
  const vuetify = createVuetify({
    components: vuetifyComponents,
    directives,
  });

  app.use(vuetify);

  // pinia
  app.use(createPinia());

  // components
  Object.keys(components).forEach((key) => {
    const component = components[key].default;
    const name = key.replace("./components/", "").replace(".vue", "");

    app.component(name, component);
  });

  app.mount("#app");
}

createApp();
