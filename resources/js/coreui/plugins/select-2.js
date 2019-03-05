import Vue from 'vue'
import Select2 from '@/components/Select'

require('select2')

$.fn.select2.defaults.set('theme', 'bootstrap4')
$.fn.select2.defaults.set('width', '100%')

Vue.component('b-select-2', Select2)
