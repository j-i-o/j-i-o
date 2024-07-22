<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
// import { VNumberInput } from 'vuetify/labs/VNumberInput'

const cart = useCartStore()
const { products } = useCartStore()
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <div v-if="products.length">
          <v-card v-for="prod in products" :key="prod.id" class="mb-2" max-height="20vh">
            <v-card-text class="mx-2">
              <v-row class="text-h6 d-inline-block text-truncate">{{ prod.title }}</v-row>
              <v-row align="center" justify="space-between">
                <v-col cols="4"
                  ><v-img :src="prod.image" aspect-ratio="1/1" height="10vh"></v-img
                ></v-col>
                <v-col cols="6">
                  <v-row justify="center">
                    <v-col align-self="center">
                      <span>{{ prod.cant }} x U$D {{ (prod.cant * prod.price).toFixed(2) }}</span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-row justify="end">
            <v-col cols="9" md="auto">
              <v-card rounded="xl" class="bg-grey-lighten-2">
                <v-card-text>
                  <v-row class="px-5" justify="space-around">
                    <v-col cols="auto">
                      <v-row> TOTAL </v-row>
                      <v-row>
                        <span class="font-weight-bold text-h4">
                          ${{ cart.totalPrice.toFixed(2) }}</span
                        >
                      </v-row>
                    </v-col>
                    <v-col cols="auto" class="ml-3">
                      <v-btn
                        size="large"
                        prepend-icon="mdi-cart"
                        class="bg-yellow-darken-3 text-white"
                        >PAY</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
