<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useFavStore } from '@/stores/favs'
import { useHomeStore } from '@/stores/home'

const home = useHomeStore()
const favs = useFavStore()
const cart = useCartStore()
let showSearchBox = ref(true)
let search = ref('')
</script>

<template>
  <v-app-bar fixed color="yellow-darken-3">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        color="white"
        icon="mdi-menu"
        @click.prevent="home.drawer = !home.drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><span class="text-uppercase">E-commerce</span></v-app-bar-title>
    <!-- <v-row justify="end">
      <v-col cols="10" md="4">
        <v-text-field
          v-if="!showSearchBox"
          v-model="search"
          center-affix
          density="compact"
          rounded
          single-line
          variant="outlined"
          placeholder="Search"
          hide-details
        >
          <template v-slot:append-inner>
            <v-btn
              icon="mdi-magnify"
              color="grey-lighten-1"
              @click="showSearchBox = !showSearchBox"
            >
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row> -->

    <template v-slot:append>
      <!-- <v-btn
        class="bg-grey-lighten-1 text-white"
        v-if="showSearchBox"
        icon="mdi-magnify"
        @click="showSearchBox = !showSearchBox"
      >
      </v-btn> -->
      <v-badge
        :model-value="!!favs.totalItems"
        dot
        location="top right"
        offset-x="11"
        offset-y="13"
        color="red"
      >
        <v-btn :disabled="!favs.totalItems" icon="mdi-heart" @click.prevent="favs.drawer = true">
          <v-icon color="white" icon="mdi-heart"></v-icon>
        </v-btn>
      </v-badge>
      <v-badge
        :model-value="!!cart.totalCount"
        :content="cart.totalCount"
        location="top right"
        offset-x="10"
        offset-y="12"
      >
        <v-btn
          :disabled="!cart.totalCount"
          icon="mdi-shopping"
          :to="{
            name: 'cart'
          }"
        >
          <v-icon color="white" icon="mdi-shopping"></v-icon>
        </v-btn>
      </v-badge>
      <v-btn icon="mdi-account-circle">
        <v-icon color="white" icon="mdi-account-circle"></v-icon
      ></v-btn>
    </template>
  </v-app-bar>
</template>
<style>
.v-field__field {
  align-self: center !important;
}
</style>
