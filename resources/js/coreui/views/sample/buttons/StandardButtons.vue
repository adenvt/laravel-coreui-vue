<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Options</strong>
          </div>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <b-button variant="primary">
            Primary
          </b-button>
          <!-- Secondary, outline button -->
          <b-button variant="secondary">
            Secondary
          </b-button>
          <!-- Indicates a successful or positive action -->
          <b-button variant="success">
            Success
          </b-button>
          <!-- Indicates caution should be taken with this action -->
          <b-button variant="warning">
            Warning
          </b-button>
          <!-- Indicates a dangerous or potentially negative action -->
          <b-button variant="danger">
            Danger
          </b-button>
          <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
          <b-button variant="link">
            Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>With Icons</strong>
          </div>
          <b-button variant="primary">
            <i class="fa fa-star" />&nbsp; Primary
          </b-button>
          <b-button variant="secondary">
            <i class="fa fa-lightbulb-o" />&nbsp; Secondary
          </b-button>
          <b-button variant="success">
            <i class="fa fa-magic" />&nbsp; Success
          </b-button>
          <b-button variant="warning">
            <i class="fa fa-map-marker" />&nbsp; Warning
          </b-button>
          <b-button variant="danger">
            <i class="fa fa-rss" />&nbsp; Danger
          </b-button>
          <b-button variant="link">
            <i class="fa fa-link" />&nbsp; Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
          </div>
          <b-button
            size="lg"
            variant="primary"
          >
            Primary
          </b-button>
          <b-button
            size="lg"
            variant="secondary"
          >
            Secondary
          </b-button>
          <b-button
            size="lg"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            size="lg"
            variant="info"
          >
            Info
          </b-button>
          <b-button
            size="lg"
            variant="warning"
          >
            Warning
          </b-button>
          <b-button
            size="lg"
            variant="danger"
          >
            Danger
          </b-button>
          <b-button
            size="lg"
            variant="link"
          >
            Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
          </div>
          <b-button
            size="sm"
            variant="primary"
          >
            Primary
          </b-button>
          <b-button
            size="sm"
            variant="secondary"
          >
            Secondary
          </b-button>
          <b-button
            size="sm"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            size="sm"
            variant="info"
          >
            Info
          </b-button>
          <b-button
            size="sm"
            variant="warning"
          >
            Warning
          </b-button>
          <b-button
            size="sm"
            variant="danger"
          >
            Danger
          </b-button>
          <b-button
            size="sm"
            variant="link"
          >
            Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
          </div>
          <b-button
            :disabled="true"
            size="lg"
            variant="primary"
          >
            Primary
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="secondary"
          >
            Secondary
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="info"
          >
            Info
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="warning"
          >
            Warning
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="danger"
          >
            Danger
          </b-button>
          <b-button
            :disabled="true"
            size="lg"
            variant="link"
          >
            Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
          </div>
          <b-button
            :active="true"
            variant="primary"
          >
            Primary
          </b-button>
          <b-button
            :active="true"
            variant="secondary"
          >
            Secondary
          </b-button>
          <b-button
            :active="true"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            :active="true"
            variant="info"
          >
            Info
          </b-button>
          <b-button
            :active="true"
            variant="warning"
          >
            Warning
          </b-button>
          <b-button
            :active="true"
            variant="danger"
          >
            Danger
          </b-button>
          <b-button
            :active="true"
            variant="link"
          >
            Link
          </b-button>
        </b-card>
        <b-card header-tag="header">
          <div slot="header">
            <strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
          </div>
          <b-button
            :pressed="true"
            variant="primary"
          >
            Primary
          </b-button>
          <b-button
            :pressed="true"
            variant="secondary"
          >
            Secondary
          </b-button>
          <b-button
            :pressed="true"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            :pressed="true"
            variant="info"
          >
            Info
          </b-button>
          <b-button
            :pressed="true"
            variant="warning"
          >
            Warning
          </b-button>
          <b-button
            :pressed="true"
            variant="danger"
          >
            Danger
          </b-button>
          <b-button
            :pressed="true"
            variant="link"
          >
            Link
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Toggle pressed state</strong>
          </div>
          <b-button
            :pressed.sync="myToggle"
            variant="primary"
          >
            Primary {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="secondary"
          >
            Secondary {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="success"
          >
            Success {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="info"
          >
            Info {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="warning"
          >
            Warning {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="danger"
          >
            Danger {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
        </b-card>

        <b-card>
          <div slot="header">
            <strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
          </div>
          <b-button
            :block="true"
            size="lg"
            variant="secondary"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="primary"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="success"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="info"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="warning"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="danger"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="link"
          >
            Block level button
          </b-button>
        </b-card>
      </b-col><!--/.col-->
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Options</strong>
          </div>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <b-button variant="outline-primary">
            Primary
          </b-button>
          <!-- Secondary, outline button -->
          <b-button variant="outline-secondary">
            Secondary
          </b-button>
          <!-- Indicates a successful or positive action -->
          <b-button variant="outline-success">
            Success
          </b-button>
          <!-- Indicates caution should be taken with this action -->
          <b-button variant="outline-warning">
            Warning
          </b-button>
          <!-- Indicates a dangerous or potentially negative action -->
          <b-button variant="outline-danger">
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>With Icons</strong>
          </div>
          <b-button variant="outline-primary">
            <i class="fa fa-star" />&nbsp; Primary
          </b-button>
          <b-button variant="outline-secondary">
            <i class="fa fa-lightbulb-o" />&nbsp; Secondary
          </b-button>
          <b-button variant="outline-success">
            <i class="fa fa-magic" />&nbsp; Success
          </b-button>
          <b-button variant="outline-warning">
            <i class="fa fa-map-marker" />&nbsp; Warning
          </b-button>
          <b-button variant="outline-danger">
            <i class="fa fa-rss" />&nbsp; Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
          </div>
          <b-button
            size="lg"
            variant="outline-primary"
          >
            Primary
          </b-button>
          <b-button
            size="lg"
            variant="outline-secondary"
          >
            Secondary
          </b-button>
          <b-button
            size="lg"
            variant="outline-success"
          >
            Success
          </b-button>
          <b-button
            size="lg"
            variant="outline-info"
          >
            Info
          </b-button>
          <b-button
            size="lg"
            variant="outline-warning"
          >
            Warning
          </b-button>
          <b-button
            size="lg"
            variant="outline-danger"
          >
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
          </div>
          <b-button
            size="sm"
            variant="outline-primary"
          >
            Primary
          </b-button>
          <b-button
            size="sm"
            variant="outline-secondary"
          >
            Secondary
          </b-button>
          <b-button
            size="sm"
            variant="outline-success"
          >
            Success
          </b-button>
          <b-button
            size="sm"
            variant="outline-info"
          >
            Info
          </b-button>
          <b-button
            size="sm"
            variant="outline-warning"
          >
            Warning
          </b-button>
          <b-button
            size="sm"
            variant="outline-danger"
          >
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
          </div>
          <b-button
            :disabled="true"
            variant="outline-primary"
          >
            Primary
          </b-button>
          <b-button
            :disabled="true"
            variant="outline-secondary"
          >
            Secondary
          </b-button>
          <b-button
            :disabled="true"
            variant="success"
          >
            Success
          </b-button>
          <b-button
            :disabled="true"
            variant="outline-info"
          >
            Info
          </b-button>
          <b-button
            :disabled="true"
            variant="outline-warning"
          >
            Warning
          </b-button>
          <b-button
            :disabled="true"
            variant="outline-danger"
          >
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
          </div>
          <b-button
            :active="true"
            variant="outline-primary"
          >
            Primary
          </b-button>
          <b-button
            :active="true"
            variant="outline-secondary"
          >
            Secondary
          </b-button>
          <b-button
            :active="true"
            variant="outline-success"
          >
            Success
          </b-button>
          <b-button
            :active="true"
            variant="outline-info"
          >
            Info
          </b-button>
          <b-button
            :active="true"
            variant="outline-warning"
          >
            Warning
          </b-button>
          <b-button
            :active="true"
            variant="outline-danger"
          >
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
          </div>
          <b-button
            :pressed="true"
            variant="outline-primary"
          >
            Primary
          </b-button>
          <b-button
            :pressed="true"
            variant="outline-secondary"
          >
            Secondary
          </b-button>
          <b-button
            :pressed="true"
            variant="outline-success"
          >
            Success
          </b-button>
          <b-button
            :pressed="true"
            variant="outline-info"
          >
            Info
          </b-button>
          <b-button
            :pressed="true"
            variant="outline-warning"
          >
            Warning
          </b-button>
          <b-button
            :pressed="true"
            variant="outline-danger"
          >
            Danger
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Toggle pressed state</strong>
          </div>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-primary"
          >
            Primary {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-secondary"
          >
            Secondary {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-success"
          >
            Success {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-info"
          >
            Info {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-warning"
          >
            Warning {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
          <b-button
            :pressed.sync="myToggle"
            variant="outline-danger"
          >
            Danger {{ myToggle ? 'On ' : 'Off' }}
          </b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
          </div>
          <b-button
            :block="true"
            size="lg"
            variant="outline-secondary"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="outline-primary"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="outline-success"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="outline-info"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="outline-warning"
          >
            Block level button
          </b-button>
          <b-button
            :block="true"
            size="lg"
            variant="outline-danger"
          >
            Block level button
          </b-button>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'StandardButtons',
  data: () => {
    return { myToggle: false }
  },
}
</script>
