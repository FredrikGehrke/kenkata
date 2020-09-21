import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Products from "../views/Products.vue";
import NotFound from "../views/NotFound.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import contactUs from '../views/contactUs.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'Products id',
    component: Products,
    props: true
  },
  {
    path: '/contact',
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
