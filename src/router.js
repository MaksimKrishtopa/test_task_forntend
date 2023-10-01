import { createRouter, createWebHistory } from 'vue-router';
import Catalog from "@/components/Catalog.vue";
import Orders from "@/components/Orders.vue";

const routes = [
  {
    path: '/',
    component: Catalog,
  },
  {
    path: '/orders',
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;