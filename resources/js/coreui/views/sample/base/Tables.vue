<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="6">
        <c-table caption="<i class='fa fa-align-justify'></i> Simple Table" />
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table
          striped
          caption="<i class='fa fa-align-justify'></i> Striped Table"
        />
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col lg="6">
        <c-table
          small
          caption="<i class='fa fa-align-justify'></i> Condensed Table"
        />
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table
          fixed
          bordered
          caption="<i class='fa fa-align-justify'></i> Bordered Table"
        />
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="12">
        <c-table
          hover
          striped
          bordered
          small
          fixed
          caption="<i class='fa fa-align-justify'></i> Combined All Table"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import cTable from './Table.vue'

export default {
  name      : 'Tables',
  components: { cTable },
}
</script>
