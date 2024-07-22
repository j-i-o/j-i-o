import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from './api'
import type { Product } from '@/types/Product'

export const useHomeStore = defineStore('home', () => {
  const api = useApiStore()
  const drawer = ref(false)
  const currentCategory = ref('')
  const products = ref<Product[]>([])
  const popup = ref(true)
  const categories = ref<string[]>([])

  async function getProducts(category: string = '') {
    const data = await api.fetchProducts(category)
    if (data) {
      products.value = data
      if (category) {
        currentCategory.value = category
      } else {
        currentCategory.value = ''
      }
    }
  }

  async function changeCategory(category: string) {
    currentCategory.value = category
    const data = await api.fetchProducts(currentCategory.value)
    if (data) {
      products.value = data
    }
  }

  async function getCategories() {
    if (!categories.value) {
      const data = await api.fetchCategories()
      if (data) {
        categories.value = data
      }
    }
  }

  return {
    popup,
    drawer,
    categories,
    currentCategory,
    products,
    getProducts,
    getCategories,
    changeCategory
  }
})
