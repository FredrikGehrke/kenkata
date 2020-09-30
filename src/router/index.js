import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import contactUs from '../views/contactUs.vue'
import MyAccount from '../views/MyAccount.vue'
import aboutUs from '../views/aboutUs'


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
    path: "/product/:id",
    name: "product",
    component: Product,
    props: true
  },
  // {
  //   path: '/product/:id',
  //   name: 'productId',
  //   component: Product,
  //   props: true
  // },
  {
    path: '/contact',
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '/my-account',
    name: 'My Account',
    component: MyAccount
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
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: aboutUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
