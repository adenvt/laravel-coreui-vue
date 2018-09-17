import Colors from '@/views/sample/theme/Colors'
import Typography from '@/views/sample/theme/Typography'

export default {
  path     : 'theme',
  redirect : '/theme/colors',
  name     : 'Theme',
  component: {
    render (c) {
      return c('router-view')
    },
  },
  children: [
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
}
