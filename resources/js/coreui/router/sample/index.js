import Charts from '@/views/sample/Charts'
import Widgets from '@/views/sample/Widgets'
import Loading from '@/views/sample/Loading'

import base from './base'
import buttons from './buttons'
import icons from './icons'
import notifications from './notifications'
import theme from './theme'

export default [
  base,
  buttons,
  icons,
  notifications,
  theme,
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
]
