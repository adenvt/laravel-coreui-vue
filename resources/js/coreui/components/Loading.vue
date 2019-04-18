<template>
  <div :class="['spinner-container', { 'full-width': fullWidth || cover, 'full-height': fullHeight || cover}]">
    <component
      :is="cVariant"
      :size="cSize"
    />
    <div class="spinner-body">
      <slot />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import * as Spinner from 'vue-loading-spinner'

function pascalCase (string) {
  return _.upperFirst(_.camelCase(string))
}

export const COMPONENTS = _.mapKeys(Spinner, (value, key) => `Spinner${key}`)

export default {
  name      : 'LoadingSpinner',
  components: { ...COMPONENTS },
  props     : {
    variant: {
      type     : String,
      default  : 'rotate-square',
      validator: function (value) {
        return _.keys(Spinner).includes(_.pascalCase(value))
      },
    },
    size: {
      type   : Number,
      default: 40,
    },
    fullWidth : Boolean,
    fullHeight: Boolean,
    cover     : Boolean,
  },
  computed: {
    cVariant () {
      return `Spinner${pascalCase(this.variant)}`
    },
    cSize () {
      return `${this.size}px`
    },
  },
}
</script>
