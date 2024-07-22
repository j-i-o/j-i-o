import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types/Product'

export const useFavStore = defineStore('favs', () => {
  const products = ref<Product[]>([])
  const drawer = ref(false)
  const totalItems = computed(() => products.value.length)

  function includes(productId: number) {
    return products.value.some((prod) => prod.id === productId)
  }

  function addRemoveProduct(product: Product): void {
    const prod = products.value.find((prod) => prod.id === product.id)
    if (prod) {
      products.value = products.value.filter((prod) => prod.id !== product.id)
    } else {
      products.value.push(product)
    }
  }
  return {
    drawer,
    products,
    totalItems,
    includes,
    addRemoveProduct
  }
})
