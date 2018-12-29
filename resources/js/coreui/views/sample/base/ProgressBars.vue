<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Bootstrap Progress</strong>
          <div class="card-actions">
            <a
              href="https://bootstrap-vue.js.org/docs/components/progress"
              target="_blank"
            >
              <small class="text-muted">
                docs
              </small>
            </a>
          </div>
        </div>
        <div>
          <b-progress
            :value="counter"
            :max="max"
            show-progress
            animated
          />
          <b-progress
            :max="max"
            class="mt-1"
            show-value
          >
            <b-progress-bar
              :value="counter*(6/10)"
              variant="success"
            />
            <b-progress-bar
              :value="counter*(2.5/10)"
              variant="warning"
            />
            <b-progress-bar
              :value="counter*(1.5/10)"
              variant="danger"
            />
          </b-progress>
          <b-btn
            class="mt-4"
            @click="clicked"
          >
            Click me
          </b-btn>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>labels</small>
        </div>
        <div>
          <h5>No label</h5>
          <b-progress
            :value="value"
            :max="max2"
            class="mb-3"
          />
          <h5>Value label</h5>
          <b-progress
            :value="value"
            :max="max2"
            show-value
            class="mb-3"
          />
          <h5>Progress label</h5>
          <b-progress
            :value="value"
            :max="max2"
            show-progress
            class="mb-3"
          />
          <h5>Value label with precision</h5>
          <b-progress
            :value="value"
            :max="max2"
            :precision="2"
            show-value
            class="mb-3"
          />
          <h5>Progress label with precision</h5>
          <b-progress
            :value="value"
            :max="max2"
            :precision="2"
            show-progress
            class="mb-3"
          />
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>width</small>
        </div>
        <div>
          <h5>Default width</h5>
          <b-progress
            :value="value3"
            class="mb-3"
          />
          <h5>Custom widths</h5>
          <b-progress
            :value="value3"
            class="w-75 mb-2"
          />
          <b-progress
            :value="value3"
            class="w-50 mb-2"
          />
          <b-progress
            :value="value3"
            class="w-25"
          />
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>height</small>
        </div>
        <div>
          <h5>Default height</h5>
          <b-progress
            :value="value3"
            show-progress
            class="mb-3"
          />
          <h5>Custom heights</h5>
          <b-progress
            :value="value3"
            height="2rem"
            show-progress
            class="mb-2"
          />
          <b-progress
            :value="value3"
            height="20px"
            show-progress
            class="mb-2"
          />
          <b-progress
            :value="value3"
            height="2px"
          />
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>variants</small>
        </div>
        <div>
          <div
            v-for="(bar, index) in bars"
            :key="index"
            class="row mb-1"
          >
            <div class="col-sm-2">
              {{ bar.variant }}:
            </div>
            <div class="col-sm-10 pt-1">
              <b-progress
                :key="bar.variant"
                :value="bar.value"
                :variant="bar.variant"
              />
            </div>
          </div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>striped</small>
        </div>
        <div>
          <b-progress
            :value="25"
            :striped="striped"
            variant="success"
            class="mb-2"
          />
          <b-progress
            :value="50"
            :striped="striped"
            variant="info"
            class="mb-2"
          />
          <b-progress
            :value="75"
            :striped="striped"
            variant="warning"
            class="mb-2"
          />
          <b-progress
            :value="100"
            :striped="striped"
            variant="danger"
            class="mb-2"
          />
          <b-button
            variant="secondary"
            @click="striped = !striped"
          >
            {{ striped ? 'Remove' : 'Add' }} Striped
          </b-button>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>animated</small>
        </div>
        <div>
          <b-progress
            :value="25"
            :animated="animate"
            variant="success"
            striped
            class="mb-2"
          />
          <b-progress
            :value="50"
            :animated="animate"
            variant="info"
            striped
            class="mb-2"
          />
          <b-progress
            :value="75"
            :animated="animate"
            variant="warning"
            striped
            class="mb-2"
          />
          <b-progress
            :value="100"
            :animated="animate"
            variant="danger"
            class="mb-3"
          />
          <b-button
            variant="secondary"
            @click="animate = !animate"
          >
            {{ animate ? 'Stop' : 'Start' }} Animation
          </b-button>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /> <strong>Progress</strong> <small>multiple bars</small>
        </div>
        <div>
          <b-progress
            :max="max3"
            class="mb-3"
          >
            <b-progress-bar
              :value="values[0]"
              variant="primary"
            />
            <b-progress-bar
              :value="values[1]"
              variant="success"
            />
            <b-progress-bar
              :value="values[2]"
              variant="info"
            />
          </b-progress>
          <b-progress
            :max="max3"
            show-progress
            class="mb-3"
          >
            <b-progress-bar
              :value="values[0]"
              variant="primary"
            />
            <b-progress-bar
              :value="values[1]"
              variant="success"
            />
            <b-progress-bar
              :value="values[2]"
              variant="info"
            />
          </b-progress>
          <b-progress
            :max="max3"
            show-value
            striped
            class="mb-3"
          >
            <b-progress-bar
              :value="values[0]"
              variant="primary"
            />
            <b-progress-bar
              :value="values[1]"
              variant="success"
            />
            <b-progress-bar
              :value="values[2]"
              variant="info"
            />
          </b-progress>
          <b-progress
            :max="max3"
            class="mb-3"
          >
            <b-progress-bar
              :value="values[0]"
              variant="primary"
              show-progress
            />
            <b-progress-bar
              :value="values[1]"
              variant="success"
              animated
              show-progress
            />
            <b-progress-bar
              :value="values[2]"
              variant="info"
              striped
              show-progress
            />
          </b-progress>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBars',
  data () {
    return {
      counter: 45,
      max    : 100,
      max2   : 50,
      value  : 33.333333333,
      value3 : 75,
      bars   : [
        { variant: 'success', value: 75 },
        { variant: 'info', value: 75 },
        { variant: 'warning', value: 75 },
        { variant: 'danger', value: 75 },
        { variant: 'primary', value: 75 },
        { variant: 'secondary', value: 75 },
        { variant: 'dark', value: 75 },
      ],
      timer  : null,
      striped: true,
      animate: true,
      max3   : 100,
      values : [
        15,
        30,
        20,
      ],
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => {
        bar.value = 25 + (Math.random() * 75)
      })
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
    },
  },
}
</script>

<style scoped>

</style>
