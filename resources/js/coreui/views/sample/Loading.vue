<template>
  <div class="wrapper">
    <b-card header="Vue Loading Spinner">
      <b-row>
        <template v-for="variant in variants">
          <b-loading
            :key="variant"
            :variant="variant"
          >
            {{ variant }}
          </b-loading>
        </template>
      </b-row>
    </b-card>
    <b-card header="Cover Size Loading">
      <b-loading
        variant="RotateSquare2"
        cover
      >
        Loading
      </b-loading>
    </b-card>
  </div>
</template>

<script>
import * as Spinner from 'vue-loading-spinner'

export default {
  name: 'Loading',
  data () {
    return { variants: _.keys(Spinner) }
  },
}

</script>
