// ** Icon imports
import { Briefcase, DatabaseEye, Web } from 'mdi-material-ui'
import { VerticalNavItemsType } from '../../layouts/types'

// ** Type import

const lmsNavigation = (): VerticalNavItemsType => {

  return [
    {
      title: 'Web',
      icon: Web,
      path: 'web'
    },

    {
      title: 'Data',
      icon: DatabaseEye,
      path: 'data',
    },
    {
      title: 'Careers',
      icon: Briefcase,
      path: 'career',
    },
  ]
}

export default lmsNavigation