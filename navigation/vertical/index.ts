// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { BriefcaseOutline, LibraryShelves } from 'mdi-material-ui'
import { NavLink, VerticalNavItemsType } from '../../layouts/types'

// ** Type import

const navigation: NavLink[] = [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/dashboard'
  },
  {
    title: 'Community',
    path: '/community'
  },
    {
    title: 'News',
    path: '/news'
  },
  {
    title: 'Jobs',
    icon: BriefcaseOutline,
    path: '/jobs'
  },
  {
    title: 'VS Battles',
    path: '/battles'
  },
  {
    title: 'Projects',
    path: '/projects'
  },

]


export default navigation
