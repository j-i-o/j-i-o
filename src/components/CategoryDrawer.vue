<template>
  <v-navigation-drawer v-model="homeStore.drawer" temporary>
    <v-list-item @click="changeCategory()" class="bg-grey" appendIcon="mdi-home">HOME</v-list-item>
    <v-list-item
      v-for="cat in homeStore.categories"
      :class="homeStore.currentCategory === cat ? 'bg-grey-lighten-2' : ''"
      :key="cat"
      @click.prevent="changeCategory(cat)"
      appendIcon="mdi-arrow-right"
      >{{ cat.toUpperCase() }}</v-list-item
    >
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/stores/home'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const router = useRouter()

onMounted(async () => {
  await homeStore.getCategories()
})

const changeCategory = async (cat: string | null = null) => {
  homeStore.drawer = false
  if (cat) {
    await homeStore.changeCategory(cat)
  } else {
    await homeStore.getProducts()
  }
  router.push({ name: 'home' })
}
</script>
<style>
.v-list-item__append .v-icon {
  color: #f5b246;
}
</style>
