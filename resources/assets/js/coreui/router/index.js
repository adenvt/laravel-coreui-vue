import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/sample/Dashboard'

import Colors from '@/views/sample/theme/Colors'
import Typography from '@/views/sample/theme/Typography'

import Charts from '@/views/sample/Charts'
import Widgets from '@/views/sample/Widgets'
import Loading from '@/views/sample/Loading'

// Views - Components
import Cards from '@/views/sample/base/Cards'
import Forms from '@/views/sample/base/Forms'
import Switches from '@/views/sample/base/Switches'
import Tables from '@/views/sample/base/Tables'
import Breadcrumbs from '@/views/sample/base/Breadcrumbs'
import Carousels from '@/views/sample/base/Carousels'
import Collapses from '@/views/sample/base/Collapses'
import Jumbotrons from '@/views/sample/base/Jumbotrons'
import ListGroups from '@/views/sample/base/ListGroups'
import Navs from '@/views/sample/base/Navs'
import Navbars from '@/views/sample/base/Navbars'
import Paginations from '@/views/sample/base/Paginations'
import Popovers from '@/views/sample/base/Popovers'
import ProgressBars from '@/views/sample/base/ProgressBars'
import Tooltips from '@/views/sample/base/Tooltips'

// Views - Buttons
import StandardButtons from '@/views/sample/buttons/StandardButtons'
import ButtonGroups from '@/views/sample/buttons/ButtonGroups'
import Dropdowns from '@/views/sample/buttons/Dropdowns'
import SocialButtons from '@/views/sample/buttons/SocialButtons'

// Views - Icons
import Flags from '@/views/sample/icons/Flags'
import FontAwesome from '@/views/sample/icons/FontAwesome'
import SimpleLineIcons from '@/views/sample/icons/SimpleLineIcons'

// Views - Notifications
import Alerts from '@/views/sample/notifications/Alerts'
import Badges from '@/views/sample/notifications/Badges'
import Modals from '@/views/sample/notifications/Modals'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode           : 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior : () => ({ y: 0 }),
  routes         : [
    {
      path     : '/',
      redirect : '/dashboard',
      name     : 'Home',
      component: Full,
      children : [
        {
          path     : 'dashboard',
          name     : 'Dashboard',
          component: Dashboard,
        },
        {
          path     : 'theme',
          redirect : '/theme/colors',
          name     : 'Theme',
          component: { render (c) { return c('router-view') } },
          children : [
            {
              path     : 'colors',
              name     : 'Colors',
              component: Colors,
            },
            {
              path     : 'typography',
              name     : 'Typography',
              component: Typography,
            },
          ],
        },
        {
          path     : 'charts',
          name     : 'Charts',
          component: Charts,
        },
        {
          path     : 'widgets',
          name     : 'Widgets',
          component: Widgets,
        },
        {
          path     : 'loading',
          name     : 'Loading',
          component: Loading,
        },
        {
          path     : 'base',
          redirect : '/base/cards',
          name     : 'Base',
          component: { render (c) { return c('router-view') } },
          children : [
            {
              path     : 'cards',
              name     : 'Cards',
              component: Cards,
            },
            {
              path     : 'forms',
              name     : 'Forms',
              component: Forms,
            },
            {
              path     : 'switches',
              name     : 'Switches',
              component: Switches,
            },
            {
              path     : 'tables',
              name     : 'Tables',
              component: Tables,
            },
            {
              path     : 'breadcrumbs',
              name     : 'Breadcrumbs',
              component: Breadcrumbs,
            },
            {
              path     : 'carousels',
              name     : 'Carousels',
              component: Carousels,
            },
            {
              path     : 'collapses',
              name     : 'Collapses',
              component: Collapses,
            },
            {
              path     : 'jumbotrons',
              name     : 'Jumbotrons',
              component: Jumbotrons,
            },
            {
              path     : 'list-groups',
              name     : 'List Groups',
              component: ListGroups,
            },
            {
              path     : 'navs',
              name     : 'Navs',
              component: Navs,
            },
            {
              path     : 'navbars',
              name     : 'Navbars',
              component: Navbars,
            },
            {
              path     : 'paginations',
              name     : 'Paginations',
              component: Paginations,
            },
            {
              path     : 'popovers',
              name     : 'Popovers',
              component: Popovers,
            },
            {
              path     : 'progress-bars',
              name     : 'Progress Bars',
              component: ProgressBars,
            },
            {
              path     : 'tooltips',
              name     : 'Tooltips',
              component: Tooltips,
            },
          ],
        },
        {
          path     : 'buttons',
          redirect : '/buttons/buttons',
          name     : 'Buttons',
          component: { render (c) { return c('router-view') } },
          children : [
            {
              path     : 'standard-buttons',
              name     : 'Standard Buttons',
              component: StandardButtons,
            },
            {
              path     : 'button-groups',
              name     : 'Button Groups',
              component: ButtonGroups,
            },
            {
              path     : 'dropdowns',
              name     : 'Dropdowns',
              component: Dropdowns,
            },
            {
              path     : 'social-buttons',
              name     : 'Social Buttons',
              component: SocialButtons,
            },
          ],
        },
        {
          path     : 'icons',
          redirect : '/icons/font-awesome',
          name     : 'Icons',
          component: { render (c) { return c('router-view') } },
          children : [
            {
              path     : 'flags',
              name     : 'Flags',
              component: Flags,
            },
            {
              path     : 'font-awesome',
              name     : 'Font Awesome',
              component: FontAwesome,
            },
            {
              path     : 'simple-line-icons',
              name     : 'Simple Line Icons',
              component: SimpleLineIcons,
            },
          ],
        },
        {
          path     : 'notifications',
          redirect : '/notifications/alerts',
          name     : 'Notifications',
          component: { render (c) { return c('router-view') } },
          children : [
            {
              path     : 'alerts',
              name     : 'Alerts',
              component: Alerts,
            },
            {
              path     : 'badges',
              name     : 'Badges',
              component: Badges,
            },
            {
              path     : 'modals',
              name     : 'Modals',
              component: Modals,
            },
          ],
        },
      ],
    },
    {
      path     : '/pages',
      redirect : '/pages/404',
      name     : 'Pages',
      component: { render (c) { return c('router-view') } },
      children : [
        {
          path     : '404',
          name     : 'Page404',
          component: Page404,
        },
        {
          path     : '500',
          name     : 'Page500',
          component: Page500,
        },
        {
          path     : 'login',
          name     : 'Login',
          component: Login,
        },
        {
          path     : 'register',
          name     : 'Register',
          component: Register,
        },
      ],
    },
    {
      path     : '*',
      name     : '404',
      component: Page404,
    },
  ],
})
