<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="6">
        <c-table>
          <template slot="caption">
            <i class="fa fa-align-justify" /> Simple Table
          </template>
        </c-table>
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table striped>
          <template slot="caption">
            <i class="fa fa-align-justify" /> Striped Table
          </template>
        </c-table>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col lg="6">
        <c-table small>
          <template slot="caption">
            <i class="fa fa-align-justify" /> Condensed Table
          </template>
        </c-table>
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table
          fixed
          bordered
        >
          <template slot="caption">
            <i class="fa fa-align-justify" /> Bordered Table
          </template>
        </c-table>
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
        >
          <template slot="caption">
            <i class="fa fa-align-justify" /> Combined All Table
          </template>
        </c-table>
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
