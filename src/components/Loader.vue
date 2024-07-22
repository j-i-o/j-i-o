<script setup lang="ts">
import { useLoaderStore } from '@/stores/loader'

const loaderStore = useLoaderStore()
</script>

<template>
  <v-overlay v-model="loaderStore.loading" class="align-center justify-center">
    <v-progress-circular color="white" size="64" indeterminate></v-progress-circular>
  </v-overlay>
</template>
