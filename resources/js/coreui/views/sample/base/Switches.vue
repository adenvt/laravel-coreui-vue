<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card header="3d Switch">
          <c-switch
            :checked="true"
            type="3d"
            variant="primary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="3d"
            variant="secondary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="3d"
            variant="success"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="3d"
            variant="warning"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="3d"
            variant="info"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="3d"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch default">
          <c-switch
            :checked="true"
            type="default"
            variant="primary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="secondary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="success"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="warning"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="info"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch default - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="primary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="secondary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="success"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="warning"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="info"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch outline">
          <c-switch
            :checked="true"
            type="default"
            variant="primary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="secondary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="success-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="warning-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="info-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="danger-outline"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch outline - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="primary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="secondary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="success-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="warning-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="info-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="danger-outline"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch outline alternative">
          <c-switch
            :checked="true"
            type="default"
            variant="primary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="secondary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="success-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="warning-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="info-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="default"
            variant="danger-outline-alt"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch outline alternative - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="primary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="secondary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="success-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="warning-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="info-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="default"
            variant="danger-outline-alt"
          />
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card header="Switch with text">
          <c-switch
            :checked="true"
            type="text"
            variant="primary"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="secondary"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="success"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="warning"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="info"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="danger"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with text - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="primary"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="secondary"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="success"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="warning"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="info"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="danger"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with text outline">
          <c-switch
            :checked="true"
            type="text"
            variant="primary-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="secondary-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="success-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="warning-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="info-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="danger-outline"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with text outline - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="primary-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="secondary-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="success-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="warning-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="info-outline"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="danger-outline"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with text outline alternative">
          <c-switch
            :checked="true"
            type="text"
            variant="primary-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="secondary-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="success-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="warning-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="info-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :checked="true"
            type="text"
            variant="danger-outline-alt"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with text outline alternative - pills">
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="primary-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="secondary-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="success-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="warning-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="info-outline-alt"
            on="On"
            off="Off"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            :pill="true"
            :checked="true"
            type="text"
            variant="danger-outline-alt"
            on="On"
            off="Off"
          />
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card header="Switch with icon">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="primary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="secondary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="success"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="warning"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="info"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with icon - pills">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="primary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="secondary"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="success"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="warning"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="info"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with icon outline">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="primary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="secondary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="success-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="warning-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="info-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="danger-outline"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with icon outline - pills">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="primary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="secondary-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="success-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="warning-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="info-outline"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="danger-outline"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with icon outline alternative">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="primary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="secondary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="success-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="warning-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="info-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :checked="true"
            type="icon"
            variant="danger-outline-alt"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Switch with icon outline alternative - pills">
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="primary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="secondary-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="success-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="warning-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="info-outline-alt"
          />
          &nbsp;&nbsp;&nbsp;
          <c-switch
            v-bind="{on: '\uf00c', off: '\uf00d'}"
            :pill="true"
            :checked="true"
            type="icon"
            variant="danger-outline-alt"
          />
        </b-card>
      </b-col>

      <b-col md="12">
        <b-card no-body>
          <div slot="header">
            Sizes
          </div>
          <b-card-body class="p-0">
            <b-table
              :items="items"
              :fields="fields"
              hover
              striped
              responsive="sm"
              class="table-align-middle mb-0"
            >
              <template
                slot="example"
                slot-scope="data"
              >
                <c-switch
                  :type="data.value.type"
                  :variant="data.value.variant"
                  :size="data.value.size"
                  :checked="data.value.checked"
                />
              </template>
            </b-table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import cSwitch from '@/components/Switch'

export default {
  name      : 'Switches',
  components: { cSwitch },
  data      : () => {
    return {
      fields: [
        { key: 'size' },
        { key: 'example' },
        { key: 'css_class', label: 'CSS Class' },
      ],
      items: [
        {
          size   : 'Large',
          example: {
            type   : '3d', variant: 'primary', size   : 'lg', checked: true,
          },
          css_class: 'Add following code <code>size="lg"</code>',
        },
        {
          size   : 'Normal',
          example: {
            type   : '3d', variant: 'primary', size   : '', checked: true,
          },
          css_class: '-',
        },
        {
          size   : 'Small',
          example: {
            type   : '3d', variant: 'primary', size   : 'sm', checked: true,
          },
          css_class: 'Add following code <code>size="sm"</code>',
        },
        {
          size   : 'Extra small',
          example: {
            type   : '3d', variant: 'primary', size   : 'xs', checked: true,
          },
          css_class: 'Add following code <code>size="xs"</code>',
        },
      ],
    }
  },
  computed: {
    icon (icon) {
      return icon
    },
  },
}
</script>
