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

export default {
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
}
