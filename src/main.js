// Environment configuration
if (process.env.NODE_ENV === "production") {
  window.endpoint = "https://miningbutikken.netlify.io";
} else {
  window.endpoint = "http://localhost:3000";
}

// Global variables
window.moment = require("moment");
window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Product from './components/Product.vue'
import CartSummary from './components/CartSummary.vue'

Vue.use(VueRouter);

// Register routes
const routes = [
  { name: "home", path: "/", component: Product }
];

const router = new VueRouter({routes});

Vue.component("cart-summary", CartSummary);

new Vue({
  router,
  el: '#app',
  data() {
    return {};
  },
  render: h => h(App)
})
