// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import './no-ssr'
import '@/plugins/animate'
import '@/plugins/axios'
import '@/plugins/bootstrap'
import '@/plugins/datepicker'
import '@/plugins/loading'
import '@/plugins/notification'
import '@/plugins/pwa'
import '@/plugins/select-2'
import '@/plugins/swal'
import '@/plugins/validation'

export default new Vue({
  router: router,
  store : store,
  render: (h) => h('router-view'),
})
