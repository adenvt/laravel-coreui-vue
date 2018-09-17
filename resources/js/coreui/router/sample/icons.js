// Views - Icons
import Flags from '@/views/sample/icons/Flags'
import FontAwesome from '@/views/sample/icons/FontAwesome'
import SimpleLineIcons from '@/views/sample/icons/SimpleLineIcons'

export default {
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
}
