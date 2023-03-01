// ** Icon imports
import { BriefcaseOutline, LibraryShelves } from 'mdi-material-ui';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline';
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline';
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline';
import CubeOutline from 'mdi-material-ui/CubeOutline';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase';
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import Login from 'mdi-material-ui/Login';
import Table from 'mdi-material-ui/Table';

import { NavLink, VerticalNavItemsType } from '../../layouts/types';

// ** Type import

const navigation: NavLink[] = [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/dashboard',
  },
  {
    title: 'Community',
    path: '/community',
  },
  {
    title: 'Quests',
    path: '/quests',
  },
  {
    title: 'Coding Challenges',
    path: '/codingchallenges',
  },
  // {
  //   title: 'News',
  //   path: '/news',
  // },
  // {
  //   title: 'Jobs',
  //   icon: BriefcaseOutline,
  //   path: '/jobs',
  // },
  // {
  //   title: 'VS Battles',
  //   path: '/battles',
  // },
  // {
  //   title: 'Projects',
  //   path: '/projects',
  // },
  // {
  //   title: 'Achievements',
  //   path: '/achievements',
  // },
  // {
  //   title: 'Overflow',
  //   path: '/overflow',
  // },
  {
    title: 'Kanban',
    path: '/kanban',
  },
  {
    title: 'Chat',
    path: '/chat',
  },
  // {
  //   title: '???',
  //   path: '/congrats',
  // },
];

export default navigation;
