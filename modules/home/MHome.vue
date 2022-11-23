<script setup lang="ts">
import { useStore } from "./store";

const store = useStore();
</script>
<template>
  <div>Home: {{ store.app.name }}</div>
</template>
