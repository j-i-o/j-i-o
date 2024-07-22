<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps(['products'])
</script>
<template>
  <v-carousel
    v-if="props.products.length"
    height="200"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    color="black"
  >
    <v-carousel-item v-for="(prod, i) in props.products" :key="i">
      <v-row justify="center">
        <v-col cols="10">
          <v-card class="mb-5">
            <v-card-text>
              <v-row class="px-4" justify="end">
                <v-col cols="5" align-self="center">
                  <v-row class="text-h4">
                    <v-col class="pb-0">
                      <b>ON SALE</b>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn color="yellow-darken-3 text-white">Buy now</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="7" align-self="center">
                  <v-img :src="prod.image" aspect-ratio="1/1" height="120"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
