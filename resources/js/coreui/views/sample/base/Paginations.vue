<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"/> <strong>Bootstrap Pagination</strong>
          <div class="card-actions">
            <a
              href="https://bootstrap-vue.js.org/docs/components/pagination"
              target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <div>
          <h6>Default</h6>
          <b-pagination
            :total-rows="100"
            v-model="currentPage"
            :per-page="10"
            size="md"/>
          <br>

          <h6>Small</h6>
          <b-pagination
            :total-rows="100"
            v-model="currentPage"
            :per-page="10"
            size="sm"/>
          <br>

          <div class="d-sm-down-none">
            <h6>Large</h6>
            <b-pagination
              :total-rows="100"
              v-model="currentPage"
              :per-page="10"
              size="lg"/>
            <br>
          </div>

          <div>currentPage: {{ currentPage }}</div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"/> <strong>Pagination</strong>
          <small>alignment</small>
        </div>
        <div>
          <h6>Left alignment (default)</h6>
          <b-pagination
            :total-rows="100"
            v-model="currentPage"
            :per-page="10"/>
          <br>

          <h6>Center alignment</h6>
          <b-pagination
            :total-rows="100"
            v-model="currentPage"
            :per-page="10"
            align="center"/>
          <br>

          <h6>Right (end) alignment</h6>
          <b-pagination
            :total-rows="100"
            v-model="currentPage"
            :per-page="10"
            align="right"/>
          <br>

          <div>currentPage: {{ currentPage }}</div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"/> <strong>Pagination</strong>
          <small>navigation</small>
          <div class="card-actions">
            <a
              href="https://bootstrap-vue.js.org/docs/components/pagination"
              target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <div>
          <h6>Default</h6>
          <b-pagination-nav
            :number-of-pages="10"
            v-model="currentPage"
            base-url="#"/>

          <h6 class="mt-4">With link generator function</h6>
          <b-pagination-nav
            :link-gen="linkGen"
            :number-of-pages="10"
            v-model="currentPage"/>
          <br>

          <div class="mt-4">currentPage: {{ currentPage }}</div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paginations',
  data () {
    return { currentPage: 3 }
  },
  methods: {
    linkGen (pageNum) {
      return `#page/${pageNum}/foobar`
    },
  },
}
</script>

<style scoped>

</style>
