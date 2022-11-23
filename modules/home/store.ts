import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("home", () => {
  const app = ref({
    name: "Home store name",
    description: "Home store description",
  });

  return {
    app,
  };
});
