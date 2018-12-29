<template>
  <aside class="aside-menu">
    <b-tabs>
      <b-tab>
        <template slot="title">
          <i class="icon-list" />
        </template>
        <callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
          <small><b>Today</b></small>
        </callout>
        <hr class="transparent mx-3 my-0">
        <callout
          variant="warning"
          class="m-0 py-3"
        >
          <div class="avatar float-right">
            <img
              src="~static/img/avatars/7.jpg"
              class="img-avatar"
              alt="admin@bootstrapmaster.com"
            >
          </div>
          <div>Meeting with <strong>Lucas</strong></div>
          <small class="text-muted mr-3">
            <i class="icon-calendar" />&nbsp; 1 - 3pm
          </small>
          <small class="text-muted">
            <i class="icon-location-pin" />&nbsp; Palo Alto, CA
          </small>
        </callout>
        <hr class="mx-3 my-0">
        <callout
          variant="info"
          class="m-0 py-3"
        >
          <div class="avatar float-right">
            <img
              src="~static/img/avatars/4.jpg"
              class="img-avatar"
              alt="admin@bootstrapmaster.com"
            >
          </div>
          <div>Skype with <strong>Megan</strong></div>
          <small class="text-muted mr-3">
            <i class="icon-calendar" />&nbsp; 4 - 5pm
          </small>
          <small class="text-muted">
            <i class="icon-social-skype" />&nbsp; On-line
          </small>
        </callout>
        <hr class="transparent mx-3 my-0">
        <callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
          <small><b>Tomorrow</b></small>
        </callout>
        <hr class="transparent mx-3 my-0">
        <callout
          variant="danger"
          class="m-0 py-3"
        >
          <div>New UI Project - <strong>deadline</strong></div>
          <small class="text-muted mr-3">
            <i class="icon-calendar" />&nbsp; 10 - 11pm
          </small>
          <small class="text-muted">
            <i class="icon-home" />&nbsp; creativeLabs HQ
          </small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/2.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/3.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/4.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/5.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/6.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
          </div>
        </callout>
        <hr class="mx-3 my-0">
        <callout
          variant="success"
          class="m-0 py-3"
        >
          <div><strong>#10 Startups.Garden</strong> Meetup</div>
          <small class="text-muted mr-3">
            <i class="icon-calendar" />&nbsp; 1 - 3pm
          </small>
          <small class="text-muted">
            <i class="icon-location-pin" />&nbsp; Palo Alto, CA
          </small>
        </callout>
        <hr class="mx-3 my-0">
        <callout
          variant="primary"
          class="m-0 py-3"
        >
          <div><strong>Team meeting</strong></div>
          <small class="text-muted mr-3">
            <i class="icon-calendar" />&nbsp; 4 - 6pm
          </small>
          <small class="text-muted">
            <i class="icon-home" />&nbsp; creativeLabs HQ
          </small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/2.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/3.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/4.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/5.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/6.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/7.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div class="avatar avatar-xs">
              <img
                src="~static/img/avatars/8.jpg"
                class="img-avatar"
                alt="admin@bootstrapmaster.com"
              >
            </div>
          </div>
        </callout>
        <hr class="mx-3 my-0">
      </b-tab>
      <b-tab>
        <template slot="title">
          <i class="icon-speech" />
        </template>
        <div class="p-3">
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img
                  src="~static/img/avatars/7.jpg"
                  class="img-avatar"
                  alt="admin@bootstrapmaster.com"
                >
                <b-badge
                  variant="success"
                  class="avatar-status"
                />
              </div>
            </div>
            <div>
              <small class="text-muted">
                Lukasz Holeczek
              </small>
              <small class="text-muted float-right mt-1">
                1:52 PM
              </small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img
                  src="~static/img/avatars/7.jpg"
                  class="img-avatar"
                  alt="admin@bootstrapmaster.com"
                >
                <b-badge
                  variant="success"
                  class="avatar-status"
                />
              </div>
            </div>
            <div>
              <small class="text-muted">
                Lukasz Holeczek
              </small>
              <small class="text-muted float-right mt-1">
                1:52 PM
              </small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img
                  src="~static/img/avatars/7.jpg"
                  class="img-avatar"
                  alt="admin@bootstrapmaster.com"
                >
                <b-badge
                  variant="success"
                  class="avatar-status"
                />
              </div>
            </div>
            <div>
              <small class="text-muted">
                Lukasz Holeczek
              </small>
              <small class="text-muted float-right mt-1">
                1:52 PM
              </small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img
                  src="~static/img/avatars/7.jpg"
                  class="img-avatar"
                  alt="admin@bootstrapmaster.com"
                >
                <b-badge
                  variant="success"
                  class="avatar-status"
                />
              </div>
            </div>
            <div>
              <small class="text-muted">
                Lukasz Holeczek
              </small>
              <small class="text-muted float-right mt-1">
                1:52 PM
              </small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img
                  src="~static/img/avatars/7.jpg"
                  class="img-avatar"
                  alt="admin@bootstrapmaster.com"
                >
                <b-badge
                  variant="success"
                  class="avatar-status"
                />
              </div>
            </div>
            <div>
              <small class="text-muted">
                Lukasz Holeczek
              </small>
              <small class="text-muted float-right mt-1">
                1:52 PM
              </small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </small>
          </div>
        </div>
      </b-tab>
      <b-tab>
        <template slot="title">
          <i class="icon-settings" />
        </template>
        <div class="p-3">
          <h6>Settings</h6>
          <div class="aside-options">
            <div class="clearfix mt-4">
              <small><b>Option 1</b></small>
              <c-switch
                :pill="true"
                :checked="true"
                type="text"
                variant="success"
                on="on"
                off="off"
                size="sm"
                class="float-right"
              />
            </div>
            <div>
              <small class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </small>
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small><b>Option 2</b></small>
              <c-switch
                :pill="true"
                type="text"
                variant="success"
                on="on"
                off="off"
                size="sm"
                class="float-right"
              />
            </div>
            <div>
              <small class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </small>
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small><b>Option 3</b></small>
              <c-switch
                :pill="true"
                type="text"
                variant="success"
                on="on"
                off="off"
                size="sm"
                class="float-right"
              />
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small><b>Option 4</b></small>
              <c-switch
                :pill="true"
                :checked="true"
                type="text"
                variant="success"
                on="on"
                off="off"
                size="sm"
                class="float-right"
              />
            </div>
          </div>
          <hr>
          <h6>System Utilization</h6>
          <div class="text-uppercase mb-1 mt-4">
            <small><b>CPU Usage</b></small>
          </div>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs"
            variant="info"
          />
          <small class="text-muted">
            348 Processes. 1/4 Cores.
          </small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>Memory Usage</b></small>
          </div>
          <b-progress
            :value="70"
            height="{}"
            class="progress-xs"
            variant="warning"
          />
          <small class="text-muted">
            11444GB/16384MB
          </small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <b-progress
            :value="95"
            height="{}"
            class="progress-xs"
            variant="danger"
          />
          <small class="text-muted">
            243GB/256GB
          </small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 2 Usage</b></small>
          </div>
          <b-progress
            :value="10"
            height="{}"
            class="progress-xs"
            variant="success"
          />
          <small class="text-muted">
            25GB/256GB
          </small>
        </div>
      </b-tab>
    </b-tabs>
  </aside>
</template>

<script>
import Callout from './Callout'
import cSwitch from './Switch'
export default {
  name      : 'CAside',
  components: {
    Callout,
    cSwitch,
  },
}
</script>
