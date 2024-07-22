<template>
  <v-navigation-drawer v-model="favStore.drawer" temporary location="right">
    <v-list-item class="bg-yellow-darken-3 text-white" appendIcon="mdi-heart">SAVED</v-list-item>
    <v-list-item v-for="(item, index) in favStore.products" :key="index">
      <v-card variant="outlined" density="compact">
        <v-card-text class="pb-0">
          <v-row>
            <v-col cols="3">
              <v-img :src="item.image"></v-img>
            </v-col>
            <v-col cols="9">{{ item.title }}</v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="py-0 my-0 bg-grey-lighten-2">
          <v-row justify="end" class="py-0 my-0" align="center">
            <v-col> ${{ item.price }} </v-col>
            <v-col cols="auto" class="py-0 my-0">
              <v-btn density="compact" class="text-white bg-red-lighten-2">Remove</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useFavStore } from '@/stores/favs'

const favStore = useFavStore()
</script>
