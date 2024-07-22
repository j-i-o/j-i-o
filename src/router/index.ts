import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import { useCartStore } from '@/stores/cart'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:productId',
      name: 'product',
      component: ProductView,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

router.beforeEach((to) => {
  const cartStore = useCartStore()
  if (to.name === 'product') {
    cartStore.product = null
  }
})

export default router
