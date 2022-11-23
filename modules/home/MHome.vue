<script setup lang="ts">
import { useStore } from "./store";

const store = useStore();
</script>
<template>
  <v-container>
    <v-card max-width="500" class="mx-auto">
      <v-card-title>
        {{ store.app.name }}
      </v-card-title>
      <v-card-text> {{ store.app.description }} </v-card-text>
    </v-card>
  </v-container>
</template>
