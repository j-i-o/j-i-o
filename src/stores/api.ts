import { defineStore } from 'pinia'
import axios from 'axios'
import type { Product } from '@/types/Product'
import { useLoaderStore } from './loader'

export const useApiStore = defineStore('api', () => {
  const { setLoader, removeLoader } = useLoaderStore()
  async function fetchProduct(productId: number) {
    setLoader()
    try {
      const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`)
      return response.data as Product
    } catch (error) {
      console.error('Error fetching product', error)
    } finally {
      removeLoader()
    }
  }

  async function fetchProducts(currentCategory: string | null = null) {
    setLoader()
    try {
      const url = `https://fakestoreapi.com/products/${currentCategory ? `/category/${currentCategory}` : `?limit=8`}`
      const response = await axios.get<Product[]>(url)
      return response.data as Product[]
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      removeLoader()
    }
  }

  async function fetchCategories() {
    setLoader()
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/categories`)
      return response.data as string[]
    } catch (error) {
      console.error('Error fetching categories', error)
    } finally {
      removeLoader()
    }
  }
  return {
    fetchProduct,
    fetchProducts,
    fetchCategories
  }
})
