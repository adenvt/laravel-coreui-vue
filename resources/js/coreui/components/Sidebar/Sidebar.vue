<template>
  <div class="sidebar">
    <sidebar-header />
    <sidebar-form />
    <nav class="sidebar-nav">
      <div slot="header" />
      <ul class="nav">
        <template v-for="(item, index) in navItems">
          <template v-if="item.title">
            <sidebar-nav-title
              :key="index"
              :name="item.name"
              :classes="item.class"
              :wrapper="item.wrapper"
            />
          </template>
          <template v-else-if="item.divider">
            <sidebar-nav-divider
              :key="index"
              :classes="item.class"
            />
          </template>
          <template v-else-if="item.label">
            <sidebar-nav-label
              :key="index"
              :name="item.name"
              :url="item.url"
              :icon="item.icon"
              :label="item.label"
              :classes="item.class"
            />
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <sidebar-nav-dropdown
                :key="index"
                :name="item.name"
                :url="item.url"
                :icon="item.icon"
              >
                <template v-for="(childL1, index1) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <sidebar-nav-dropdown
                      :key="index1"
                      :name="childL1.name"
                      :url="childL1.url"
                      :icon="childL1.icon"
                    >
                      <li
                        v-for="(childL2, index2) in childL1.children"
                        :key="index2"
                        class="nav-item"
                      >
                        <sidebar-nav-link
                          :name="childL2.name"
                          :url="childL2.url"
                          :icon="childL2.icon"
                          :badge="childL2.badge"
                          :variant="item.variant"
                        />
                      </li>
                    </sidebar-nav-dropdown>
                  </template>
                  <template v-else>
                    <sidebar-nav-item
                      :key="index1"
                      :classes="item.class"
                    >
                      <sidebar-nav-link
                        :name="childL1.name"
                        :url="childL1.url"
                        :icon="childL1.icon"
                        :badge="childL1.badge"
                        :variant="item.variant"
                      />
                    </sidebar-nav-item>
                  </template>
                </template>
              </sidebar-nav-dropdown>
            </template>
            <template v-else>
              <sidebar-nav-item
                :key="index"
                :classes="item.class"
              >
                <sidebar-nav-link
                  :name="item.name"
                  :url="item.url"
                  :icon="item.icon"
                  :badge="item.badge"
                  :variant="item.variant"
                />
              </sidebar-nav-item>
            </template>
          </template>
        </template>
      </ul>
      <slot />
    </nav>
    <sidebar-footer />
    <sidebar-minimizer />
  </div>
</template>
<script>
import SidebarFooter from './SidebarFooter'
import SidebarForm from './SidebarForm'
import SidebarHeader from './SidebarHeader'
import SidebarMinimizer from './SidebarMinimizer'
import SidebarNavDivider from './SidebarNavDivider'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from './SidebarNavItem'
import SidebarNavLabel from './SidebarNavLabel'
export default {
  name      : 'Sidebar',
  components: {
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel,
  },
  props: {
    navItems: {
      type    : Array,
      required: true,
      default : () => [],
    },
    fixed: {
      type   : Boolean,
      default: false,
    },
  },
  mounted () {
    if (this.fixed) $('body').addClass('sidebar-fixed')
  },
  beforeDestroy () {
    $('body').removeClass('sidebar-fixed')
  },
  methods: {
    handleClick (event) {
      event.preventDefault()
      event.target.parentElement.classList.toggle('open')
    },
  },
}

</script>

<style lang="css">
  .nav-link {
    cursor: pointer;
  }

</style>
