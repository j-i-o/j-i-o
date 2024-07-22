import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const loading = ref(false)

  function setLoader() {
    loading.value = true
  }

  function removeLoader() {
    loading.value = false
  }

  return {
    loading,
    setLoader,
    removeLoader
  }
})
