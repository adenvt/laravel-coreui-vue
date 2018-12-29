// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'
import Notifications from 'vue-notification'
import Sweetalert from 'vue-sweetalert2'
import Vuelidate from 'vuelidate'
import Loading from './components/Loading'
import Select2 from './components/Select'
import App from './App'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(Sweetalert)
Vue.use(Vuelidate)

Vue.filter('state', (value, dirtyOnly = true) => {
  if (dirtyOnly) {
    if (!value.$dirty)
      return null
  }

  return !value.$invalid ? 'valid' : 'invalid'
})

Vue.component('b-loading', Loading)
Vue.component('b-select-2', Select2)
Vue.component('b-datepicker', {
  extends: Datepicker,
  props  : {
    bootstrapStyling: {
      type   : Boolean,
      default: true,
    },
    language: {
      type   : Object,
      default: () => id,
    },
  },
})

export default new Vue({
  el        : '#app',
  router    : router,
  store     : store,
  template  : '<App/>',
  components: { App },
})
