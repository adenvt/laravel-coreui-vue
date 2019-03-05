import Vue from 'vue'
import Datepicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'

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
