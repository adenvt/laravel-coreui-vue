// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)

window.Vue = new Vue({
  el        : '#app',
  router,
  template  : '<App/>',
  components: {
    App,
  },
})
