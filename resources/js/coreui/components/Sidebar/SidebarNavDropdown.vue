<template>
  <router-link
    :to="url"
    tag="li"
    class="nav-item nav-dropdown"
    disabled
  >
    <div
      class="nav-link nav-dropdown-toggle"
      @click="handleClick"
    >
      <i :class="icon" /> {{ name }}
    </div>
    <ul class="nav-dropdown-items">
      <slot />
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type   : String,
      default: '',
    },
    url: {
      type   : String,
      default: '',
    },
    icon: {
      type   : String,
      default: '',
    },
  },
  methods: {
    handleClick (event) {
      event.preventDefault()
      event.target.parentElement.classList.toggle('open')
    },
  },
}
</script>
