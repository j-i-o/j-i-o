<script setup lang="ts">
import { useHomeStore } from '@/stores/home'

const homeStore = useHomeStore()
const techs = [
  {
    title: 'VUE 3',
    url: 'https://vuejs.org/'
  },
  {
    title: 'VITE',
    url: 'https://vitejs.dev/'
  },
  {
    title: 'Pinia',
    url: 'https://pinia.vuejs.org/'
  },
  {
    title: 'Vuetify',
    url: 'https://vuetifyjs.com/en/'
  },
  {
    title: 'Typescript',
    url: 'https://www.typescriptlang.org/'
  }
]
const links = [
  {
    text: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/juan-ignacio-ordoqui-9a36a619a'
  },
  {
    text: 'GitHub',
    icon: 'mdi-github',
    url: 'https://github.com/j-i-o'
  }
]
</script>

<template>
  <v-overlay v-model="homeStore.popup" class="align-center justify-center">
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title class="bg-grey-darken-1 text-white">
            <h1>Welcome!</h1>
          </v-card-title>
          <v-card-text class="mt-3">
            <p>
              This app was made by
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <span class="rounded-lg bg-grey px-2" v-bind="props">Juan I. Ordoqui</span>
                </template>
                <v-list class="text-center">
                  <v-list-item v-for="(item, index) in links" :key="index">
                    <v-list-item-title>
                      <a :href="item.url" target="_blank">
                        {{ item.text }}
                        <v-icon color="yellow-darken-3" :icon="item.icon"
                      /></a>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              in order to test VUE 3 and other tools/frameworks. Everything shown here is merely a
              mockup and the items and actions presented have no impact in the real world.
            </p>
            <p>This app was made with the following tools:</p>
            <li v-for="tech in techs" :key="tech.title" class="ml-5">
              <a :href="tech.url ?? ''" target="_blank"> {{ tech.title }}</a>
            </li>
            <p>
              It feeds on data provided by
              <a href="https://fakestoreapi.com/" target="_blank">"Fake Store API"</a>.
            </p>
            <p>Thanks for visiting!</p>
          </v-card-text>
          <v-card-actions>
            <v-row justify="end">
              <v-col cols="auto">
                <v-btn
                  variant="flat"
                  color="yellow-darken-3 text-white"
                  @click="homeStore.popup = false"
                  >I understand!</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-overlay>
</template>
