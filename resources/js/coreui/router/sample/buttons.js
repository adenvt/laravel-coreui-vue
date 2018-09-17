// Views - Buttons
import StandardButtons from '@/views/sample/buttons/StandardButtons'
import ButtonGroups from '@/views/sample/buttons/ButtonGroups'
import Dropdowns from '@/views/sample/buttons/Dropdowns'
import SocialButtons from '@/views/sample/buttons/SocialButtons'

export default {
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
}
