<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const items = router.getRoutes();

items.sort((a, b) => a.path.length - b.path.length);

const tab = ref(0);
</script>
<template>
  <v-toolbar color="primary">
    <v-toolbar-title>Root toolbar component</v-toolbar-title>

    <template v-slot:extension>
      <v-tabs v-model="tab">
        <v-tab
          v-for="item in items"
          :value="item.path"
          :key="item.path"
          :to="item.path"
          stacked
        >
          {{ item.meta.title || item.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>
