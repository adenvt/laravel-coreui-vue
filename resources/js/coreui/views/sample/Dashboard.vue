<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-primary"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
            >
              <template slot="button-content">
                <i class="icon-settings" />
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>
                Disabled action
              </b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">
              9.823
            </h4>
            <p>Members online</p>
          </b-card-body>
          <card-line-example1
            class="chart-wrapper px-3"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-info"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
              no-caret
            >
              <template slot="button-content">
                <i class="icon-location-pin" />
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>
                Disabled action
              </b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">
              9.823
            </h4>
            <p>Members online</p>
          </b-card-body>
          <card-line-example2
            class="chart-wrapper px-3"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-warning"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
            >
              <template slot="button-content">
                <i class="icon-settings" />
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>
                Disabled action
              </b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">
              9.823
            </h4>
            <p>Members online</p>
          </b-card-body>
          <card-line-example3
            class="chart-wrapper"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-danger"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
            >
              <template slot="button-content">
                <i class="icon-settings" />
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>
                Disabled action
              </b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">
              9.823
            </h4>
            <p>Members online</p>
          </b-card-body>
          <card-bar-chart-example
            class="chart-wrapper px-3"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
    </b-row>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4
            id="traffic"
            class="card-title mb-0"
          >
            Traffic
          </h4>
          <div class="small text-muted">
            November 2017
          </div>
        </b-col>
        <b-col
          sm="7"
          class="d-none d-md-block"
        >
          <b-button
            type="button"
            variant="primary"
            class="float-right"
          >
            <i class="icon-cloud-download" />
          </b-button>
          <b-button-toolbar
            class="float-right"
            aria-label="Toolbar with buttons group"
          >
            <b-form-radio-group
              id="radiosBtn"
              v-model="selected"
              class="mr-3"
              buttons
              button-variant="outline-secondary"
              name="radiosBtn"
            >
              <b-form-radio
                class="mx-0"
                value="Day"
              >
                Day
              </b-form-radio>
              <b-form-radio
                class="mx-0"
                value="Month"
              >
                Month
              </b-form-radio>
              <b-form-radio
                class="mx-0"
                value="Year"
              >
                Year
              </b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
      <main-chart-example
        class="chart-wrapper"
        style="height:300px;margin-top:40px;"
        height="300"
      />
      <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">
              Visits
            </div>
            <strong>29.703 Users (40%)</strong>
            <b-progress
              :precision="1"
              :value="40"
              height="{}"
              class="progress-xs mt-2"
              variant="success"
            />
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">
              Unique
            </div>
            <strong>24.093 Users (20%)</strong>
            <b-progress
              :precision="1"
              :value="20"
              height="{}"
              class="progress-xs mt-2"
              variant="info"
            />
          </li>
          <li>
            <div class="text-muted">
              Pageviews
            </div>
            <strong>78.706 Views (60%)</strong>
            <b-progress
              :precision="1"
              :value="60"
              height="{}"
              class="progress-xs mt-2"
              variant="warning"
            />
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">
              New Users
            </div>
            <strong>22.123 Users (80%)</strong>
            <b-progress
              :precision="1"
              :value="80"
              height="{}"
              class="progress-xs mt-2"
              variant="danger"
            />
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">
              Bounce Rate
            </div>
            <strong>40.15%</strong>
            <b-progress
              :precision="1"
              :value="40"
              height="{}"
              class="progress-xs mt-2"
            />
          </li>
        </ul>
      </div>
    </b-card>
    <b-row>
      <b-col
        sm="6"
        lg="3"
      >
        <div class="social-box facebook">
          <i class="fa fa-facebook" />
          <div class="chart-wrapper">
            <social-box-chart-example
              :data="[65, 59, 84, 84, 51, 55, 40]"
              height="90"
            />
          </div>
          <ul>
            <li>
              <strong>89k</strong>
              <span>friends</span>
            </li>
            <li>
              <strong>459</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <div class="social-box twitter">
          <i class="fa fa-twitter" />
          <div class="chart-wrapper">
            <social-box-chart-example
              :data="[1, 13, 9, 17, 34, 41, 38]"
              height="90"
            />
          </div>
          <ul>
            <li>
              <strong>973k</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>1.792</strong>
              <span>tweets</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <div class="social-box linkedin">
          <i class="fa fa-linkedin" />
          <div class="chart-wrapper">
            <social-box-chart-example
              :data="[78, 81, 80, 45, 34, 12, 40]"
              height="90"
            />
          </div>
          <ul>
            <li>
              <strong>500+</strong>
              <span>contacts</span>
            </li>
            <li>
              <strong>292</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <div class="social-box google-plus">
          <i class="fa fa-google-plus" />
          <div class="chart-wrapper">
            <social-box-chart-example
              :data="[35, 23, 56, 22, 97, 23, 64]"
              height="90"
            />
          </div>
          <ul>
            <li>
              <strong>894</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>92</strong>
              <span>circles</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Traffic &amp; Sales">
          <b-row>
            <b-col
              sm="12"
              lg="4"
            >
              <b-row>
                <b-col sm="6">
                  <callout variant="info">
                    <small class="text-muted">
                      New Clients
                    </small><br>
                    <strong class="h4">
                      9,123
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="#20a8d8"
                        width="80"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
                <b-col sm="6">
                  <callout variant="danger">
                    <small class="text-muted">
                      Recurring Clients
                    </small><br>
                    <strong class="h4">
                      22,643
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#f86c6b"
                        width="80"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars">
                <li>
                  <div class="title">
                    Monday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="34"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="78"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Tuesday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="56"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="94"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Wednesday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="12"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="67"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Thursday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="43"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="91"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Friday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="22"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="73"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Saturday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="53"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="82"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li>
                  <div class="title">
                    Sunday
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="9"
                      height="{}"
                      class="progress-xs"
                      variant="info"
                    />
                    <b-progress
                      :value="69"
                      height="{}"
                      class="progress-xs"
                      variant="danger"
                    />
                  </div>
                </li>
                <li class="legend">
                  <b-badge
                    pill
                    variant="info"
                  /> <small>New clients</small> &nbsp; <b-badge
                    pill
                    variant="danger"
                  /> <small>Recurring clients</small>
                </li>
              </ul>
            </b-col>
            <b-col
              sm="6"
              lg="4"
            >
              <b-row>
                <b-col sm="6">
                  <callout variant="warning">
                    <small class="text-muted">
                      Pageviews
                    </small><br>
                    <strong class="h4">
                      78,623
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="#f8cb00"
                        width="80"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
                <b-col sm="6">
                  <callout variant="success">
                    <small class="text-muted">
                      Organic
                    </small><br>
                    <strong class="h4">
                      49,123
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#4dbd74"
                        width="80px"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <li>
                  <i class="icon-user" />
                  <span class="title">
                    Male
                  </span>
                  <span class="value">
                    43%
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="43"
                      height="{}"
                      class="progress-xs"
                      variant="warning"
                    />
                  </div>
                </li>
                <li>
                  <i class="icon-user-female" />
                  <span class="title">
                    Female
                  </span>
                  <span class="value">
                    37%
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="37"
                      height="{}"
                      class="progress-xs"
                      variant="warning"
                    />
                  </div>
                </li>
                <li class="divider" />
                <li>
                  <i class="icon-globe" />
                  <span class="title">
                    Organic Search
                  </span>
                  <span class="value">
                    191,235 <span class="text-muted small">
                      (56%)
                    </span>
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="56"
                      height="{}"
                      class="progress-xs"
                      variant="success"
                    />
                  </div>
                </li>
                <li>
                  <i class="icon-social-facebook" />
                  <span class="title">
                    Facebook
                  </span>
                  <span class="value">
                    51,223 <span class="text-muted small">
                      (15%)
                    </span>
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="15"
                      height="{}"
                      class="progress-xs"
                      variant="success"
                    />
                  </div>
                </li>
                <li>
                  <i class="icon-social-twitter" />
                  <span class="title">
                    Twitter
                  </span>
                  <span class="value">
                    37,564 <span class="text-muted small">
                      (11%)
                    </span>
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="11"
                      height="{}"
                      class="progress-xs"
                      variant="success"
                    />
                  </div>
                </li>
                <li>
                  <i class="icon-social-linkedin" />
                  <span class="title">
                    LinkedIn
                  </span>
                  <span class="value">
                    27,319 <span class="text-muted small">
                      (8%)
                    </span>
                  </span>
                  <div class="bars">
                    <b-progress
                      :value="8"
                      height="{}"
                      class="progress-xs"
                      variant="success"
                    />
                  </div>
                </li>
                <li class="divider text-center">
                  <b-button
                    variant="link"
                    size="sm"
                    class="text-muted"
                  >
                    <i class="icon-options" />
                  </b-button>
                </li>
              </ul>
            </b-col>
            <b-col
              sm="6"
              lg="4"
            >
              <b-row>
                <b-col sm="6">
                  <callout>
                    <small class="text-muted">
                      CTR
                    </small><br>
                    <strong class="h4">
                      23%
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[78, 81, 80, 45, 34, 12, 40]"
                        width="80px"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
                <b-col sm="6">
                  <callout variant="primary">
                    <small class="text-muted">
                      Bounce Rate
                    </small><br>
                    <strong class="h4">
                      5%
                    </strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="#20a8d8"
                        width="80px"
                        height="30"
                      />
                    </div>
                  </callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="icons-list">
                <li>
                  <i class="icon-screen-desktop bg-primary" />
                  <div class="desc">
                    <div class="title">
                      iMac 4k
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Sold this week
                    </div>
                    <strong>1.924</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-info" />
                  <div class="desc">
                    <div class="title">
                      Samsung Galaxy Edge
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Sold this week
                    </div>
                    <strong>1.224</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-warning" />
                  <div class="desc">
                    <div class="title">
                      iPhone 6S
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Sold this week
                    </div>
                    <strong>1.163</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-user bg-danger" />
                  <div class="desc">
                    <div class="title">
                      Premium accounts
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Sold this week
                    </div>
                    <strong>928</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-social-spotify bg-success" />
                  <div class="desc">
                    <div class="title">
                      Spotify Subscriptions
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Sold this week
                    </div>
                    <strong>893</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-cloud-download bg-danger" />
                  <div class="desc">
                    <div class="title">
                      Ebook
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Downloads
                    </div>
                    <strong>121.924</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li>
                  <i class="icon-camera bg-warning" />
                  <div class="desc">
                    <div class="title">
                      Photos
                    </div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">
                      Uploaded
                    </div>
                    <strong>12.125</strong>
                  </div>
                  <div class="actions">
                    <b-button
                      variant="link"
                      class="text-muted"
                    >
                      <i class="icon-settings" />
                    </b-button>
                  </div>
                </li>
                <li class="divider text-center">
                  <b-button
                    size="sm"
                    variant="link"
                    class="text-muted"
                  >
                    <i class="icon-options" />
                  </b-button>
                </li>
              </ul>
            </b-col>
          </b-row>
          <br>
          <b-table
            :items="tableItems"
            :fields="tableFields"
            class="mb-0 table-outline"
            responsive="sm"
            hover
            head-variant="light"
          >
            <div slot="HEAD_avatar">
              <i class="icon-people" />
            </div>

            <div
              slot="avatar"
              slot-scope="item"
              class="avatar"
            >
              <img
                :src="item.value.url"
                class="img-avatar"
                alt=""
              >
              <span
                :class="{ 'bg-success': item.value.status == 'success', 'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"
                class="avatar-status"
              />
            </div>
            <div
              slot="user"
              slot-scope="item"
            >
              <div>{{ item.value.name }}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">
                    New
                  </template>
                  <template v-else>
                    Recurring
                  </template>
                </span> | Registered: {{ item.value.registered }}
              </div>
            </div>
            <i
              :id="item.value.flag"
              slot="country"
              slot-scope="item"
              :class="flag(item.value.flag)"
              :title="item.value.flag"
              class="h4 mb-0"
            />
            <i
              id="pw"
              class="flag-icon flag-icon-pw h1"
              title="pw"
            />
            <div
              slot="usage"
              slot-scope="item"
            >
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{ item.value.value }}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">
                    {{ item.value.period }}
                  </small>
                </div>
              </div>
              <b-progress
                v-model="item.value.value"
                :variant="variant(item.value.value)"
                height="{}"
                class="progress-xs"
              />
            </div>
            <i
              slot="payment"
              slot-scope="item"
              :class="item.value.icon"
              style="font-size:24px"
            />
            <div
              slot="activity"
              slot-scope="item"
            >
              <div class="small text-muted">
                Last login
              </div>
              <strong>{{ item.value }}</strong>
            </div>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardLineExample1 from './dashboard/CardLine1ChartExample'
import CardLineExample2 from './dashboard/CardLine2ChartExample'
import CardLineExample3 from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@/components'

export default {
  name      : 'Dashboard',
  components: {
    Callout,
    CardLineExample1,
    CardLineExample2,
    CardLineExample3,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
  },
  data: function () {
    return {
      selected  : 'Month',
      tableItems: [
        {
          avatar: { url: require('static/img/avatars/1.jpg'), status: 'success' },
          user  : {
            name      : 'Yiorgos Avraamu', new       : true, registered: 'Jan 1, 2015',
          },
          country : { name: 'USA', flag: 'us' },
          usage   : { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago',
        },
        {
          avatar: { url: require('static/img/avatars/2.jpg'), status: 'danger' },
          user  : {
            name      : 'Avram Tarasios', new       : false, registered: 'Jan 1, 2015',
          },
          country : { name: 'Brazil', flag: 'br' },
          usage   : { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago',
        },
        {
          avatar: { url: require('static/img/avatars/3.jpg'), status: 'warning' },
          user  : {
            name      : 'Quintin Ed', new       : true, registered: 'Jan 1, 2015',
          },
          country : { name: 'India', flag: 'in' },
          usage   : { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago',
        },
        {
          avatar: { url: require('static/img/avatars/4.jpg'), status: '' },
          user  : {
            name      : 'Enéas Kwadwo', new       : true, registered: 'Jan 1, 2015',
          },
          country : { name: 'France', flag: 'fr' },
          usage   : { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month',
        },
        {
          avatar: { url: require('static/img/avatars/5.jpg'), status: 'success' },
          user  : {
            name      : 'Agapetus Tadeáš', new       : true, registered: 'Jan 1, 2015',
          },
          country : { name: 'Spain', flag: 'es' },
          usage   : { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week',
        },
        {
          avatar: { url: require('static/img/avatars/6.jpg'), status: 'danger' },
          user  : {
            name      : 'Friderik Dávid', new       : true, registered: 'Jan 1, 2015',
          },
          country : { name: 'Poland', flag: 'pl' },
          usage   : { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment : { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week',
        },
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center',
        },
        user   : { label: 'User' },
        country: {
          label: 'Country',
          class: 'text-center',
        },
        usage  : { label: 'Usage' },
        payment: {
          label: 'Payment method',
          class: 'text-center',
        },
        activity: { label: 'Activity' },
      },
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25)
        $variant = 'info'
      else if (value > 25 && value <= 50)
        $variant = 'success'
      else if (value > 50 && value <= 75)
        $variant = 'warning'
      else if (value > 75 && value <= 100)
        $variant = 'danger'

      return $variant
    },
    flag (value) {
      return `flag-icon flag-icon-${value}`
    },
  },
}
</script>
