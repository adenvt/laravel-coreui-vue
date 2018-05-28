// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)

window.Vue = new Vue({
  el        : '#app',
  router,
  store,
  template  : '<App/>',
  components: {
    App,
  },
})
