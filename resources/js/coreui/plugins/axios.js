import Vue from 'vue'
import axios from 'axios'
import config from '@/config/axios'

const instance = axios.create(config)

if (typeof config.onCreate === 'function')
  config.onCreate.call(instance)

Vue.prototype.$axios = instance

export default instance
