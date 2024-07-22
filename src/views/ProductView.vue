<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useHomeStore } from '@/stores/home'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import QuantityInput from '@/components/QuantityInput.vue'

const cartStore = useCartStore()
const { getProduct } = useCartStore()

const product = computed(() => cartStore.product)
const homeStore = useHomeStore()
const router = useRouter()
const props = defineProps({ productId: { type: String, required: true } })

onMounted(async () => {
  await getProduct(Number.parseInt(props.productId))
  if (product.value) {
    await homeStore.getProducts(product.value.category)
  }
})
</script>

<template>
  <v-container v-if="product">
    <v-row class="mt-2 mb-5">
      <v-chip @click="homeStore.getProducts(product.category)">
        {{ product.category.toUpperCase() }}
      </v-chip>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-row class="text-h4" justify="center">
          {{ product.title }}
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-img :src="product.image" max-height="50vh"></v-img>
          </v-col>
        </v-row>
        <v-row justify="center" class="text-subtitle-2">
          <v-col cols="8">
            {{ product.description }}
          </v-col>
          <v-col class="border-thin">
            <v-row justify="center">
              <v-col cols="12" md="6">
                <QuantityInput
                  :product="product"
                  :quantity="cartStore.getProductQuantity(Number.parseInt(props.productId))"
                ></QuantityInput>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="mt-5" v-if="homeStore.products">
          <v-row>Related products:</v-row>
          <v-row>
            <v-col
              align-self="center"
              :cols="homeStore.products.length / 12"
              v-for="(product, index) in homeStore.products"
              :key="index"
              class="cursor-pointer"
              @click.prevent="
                router.replace({ name: 'product', params: { productId: product.id } })
              "
            >
              <v-img :src="product.image"></v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>
