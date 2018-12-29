<template>
  <label :class="classList">
    <input
      :value="value"
      :checked="isChecked"
      type="checkbox"
      class="switch-input"
      @change="handleChange"
    >
    <template v-if="isOn">
      <span
        :data-on="on"
        :data-off="off"
        class="switch-label"
      />
    </template>
    <template v-else>
      <span class="switch-label" />
    </template>
    <span class="switch-handle" />
  </label>
</template>

<script>
export default {
  model: {
    prop : 'checked',
    event: 'change',
  },
  props: {
    value         : { default: true },
    uncheckedValue: { default: false },
    checked       : { default: false },
    type          : {
      type   : String,
      default: 'default',
    },
    variant: {
      type   : String,
      default: '',
    },
    pill: {
      type   : Boolean,
      default: false,
    },
    on: {
      type   : String,
      default: null,
    },
    off: {
      type   : String,
      default: null,
    },
    size: {
      type   : String,
      default: null,
    },
  },
  computed: {
    classList () {
      return [
        'switch',
        this.switchType,
        this.switchVariant,
        this.switchPill,
        this.switchSize,
      ]
    },
    switchType () {
      return this.type ? `switch-${this.type}` : `switch-default`
    },
    switchVariant () {
      return this.variant ? `switch-${this.variant}` : `switch-secondary`
    },
    switchPill () {
      return !this.pill ? null : `switch-pill`
    },
    switchSize () {
      return this.size ? `switch-${this.size}` : ''
    },
    isChecked () {
      return this.checked === this.value
    },
    isOn () {
      return !this.on ? null : true
    },
  },
  methods: {
    handleChange ({ target: { checked } }) {
      this.$emit('change', checked ? this.value : this.uncheckedValue)
    },
  },
}
</script>
