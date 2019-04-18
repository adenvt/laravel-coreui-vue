<template>
  <select>
    <slot />
  </select>
</template>

<script>
import { isArray } from 'bootstrap-vue/es/utils/array'
import { keys } from 'bootstrap-vue/es//utils/object'

function isObject (object) {
  return object && ({}).toString.call(object) === '[object Object]'
}

export default {
  name : 'Select2',
  props: {
    value      : {},
    placeholder: String,
    options    : {
      type: [Array, Object],
      default () {
        return []
      },
    },
    valueField: {
      type   : String,
      default: 'value',
    },
    textField: {
      type   : String,
      default: 'text',
    },
    disabledField: {
      type   : String,
      default: 'disabled',
    },
  },
  data () {
    return { localValue: this.value }
  },
  computed: {
    formOptions () {
      const options = this.options

      const valueField    = this.valueField
      const textField     = this.textField
      const disabledField = this.disabledField

      if (isArray(options)) {
        // Normalize flat-ish arrays to Array of Objects
        return options.map((option) => {
          if (isObject(option)) {
            return {
              id      : option[valueField],
              text    : String(option[textField]),
              disabled: option[disabledField] || false,
            }
          }
          return {
            id      : option,
            text    : String(option),
            disabled: false,
          }
        })
      } else {
        // options is Object
        // Normalize Objects to Array of Objects
        return keys(options).map((key) => {
          const option = options[key] || {}
          if (isObject(option)) {
            const value = option[valueField]
            const text  = option[textField]
            return {
              id      : typeof value === 'undefined' ? key : value,
              text    : typeof text === 'undefined' ? key : String(text),
              disabled: option[disabledField] || false,
            }
          }
          return {
            id      : key,
            text    : String(option),
            disabled: false,
          }
        })
      }
    },
  },
  watch: {
    value (value) {
      $(this.$el)
        .val(value)
        .trigger('change.select2')
    },
    options () {
      $(this.$el)
        .empty()
        .select2({
          data       : this.formOptions,
          placeholder: this.placeholder,
        })
        .val(this.value)
        .trigger('change.select2')
    },
  },
  mounted () {
    this.createSelect()
  },
  destroyed () {
    $(this.$el).off().select2('destroy')
  },
  methods: {
    createSelect () {
      const vm = this

      $(this.$el)
        .prepend('<option><option/>')
        .select2({
          data       : this.formOptions,
          placeholder: this.placeholder,
        })
        .val(this.value)
        .trigger('change.select2')
        .on('change', function (event_) {
          vm.localValue = this.value
          vm.$emit('input', vm.localValue)
        })
    },
  },
}
</script>
