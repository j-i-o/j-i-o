import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApiStore } from './api'
import type { Product } from '@/types/Product'
import type { ProductWithQuantity } from '@/types/ProductWithQuantity'

export const useCartStore = defineStore('cart', () => {
  const api = useApiStore()
  const product = ref<Product | null>(null)
  const products = ref<ProductWithQuantity[]>([])

  const totalCount = computed(() => products.value.length)
  const totalPrice = computed(() =>
    products.value.reduce((total, prod) => total + prod.price * prod.cant, 0)
  )
  const totalItems = computed(() => products.value.reduce((total, prod) => total + prod.cant, 0))

  async function getProduct(productId: number) {
    const data = await api.fetchProduct(productId)
    if (data) {
      product.value = data
    }
  }
  function updateQuantity(product: Omit<ProductWithQuantity, 'cant'>, cant: number): void {
    const prod = products.value.find((prod) => prod.id === product.id)
    if (prod) {
      if (cant === 0) {
        products.value = products.value.filter((prod) => prod.id !== product.id)
      } else {
        prod.cant = cant
      }
    } else if (cant !== 0) {
      products.value.push({ ...product, cant: 1 })
    }
  }
  function getProductQuantity(id: number): number {
    return products.value.find((prod) => prod.id === id)?.cant ?? 0
  }
  function clearCart() {
    products.value = []
  }
  return {
    product,
    products,
    totalCount,
    totalPrice,
    totalItems,
    getProduct,
    updateQuantity,
    getProductQuantity,
    clearCart
  }
})
