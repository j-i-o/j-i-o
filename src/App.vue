<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
import CategoryDrawer from './components/CategoryDrawer.vue'
import Loader from './components/Loader.vue'
import IntroPopup from './components/IntroPopup.vue'
import FavDrawer from './components/FavDrawer.vue'
</script>

<template>
  <v-app>
    <IntroPopup />
    <Loader />
    <CategoryDrawer />
    <FavDrawer />
    <AppBar />
    <Footer />
    <v-main>
      <v-container fluid>
        <RouterView :key="$route.fullPath" />
      </v-container>
    </v-main>
  </v-app>
</template>
