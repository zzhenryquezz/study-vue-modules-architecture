import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("home", () => {
  const app = ref({
    name: "App name",
  });

  return {
    app,
  };
});
