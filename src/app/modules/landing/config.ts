import { NavItemParams } from 'app/modules/common/consts';

export interface StatItemParams {
  amount: number;
  type: string;
  path: string;
  label?: string;
  index?: number;
  roles?: string[];
  gridNum: number;
}

export const StatItemsConfig: StatItemParams[] = [
  {
    amount: 0,
    type: 'home.dashboard.projects',
    path: '/list/0',
    gridNum: 4,
  },
  {
    amount: 0,
    type: 'home.dashboard.grantees',
    path: '/list/1',
    roles: ['Super admin', 'Administrator'],
    gridNum: 4,
  },
  {
    amount: 0,
    type: 'home.dashboard.reports',
    path: '/list/2',
    gridNum: 4,
  },
];

export const NavItemsVisualisationConfig: NavItemParams[] = [
  {
    label: 'home.chart_nav.priority_area',
    path: '/dashboard/priority-area/-',
  },
  {
    label: 'home.chart_nav.sdg',
    path: '/dashboard/sdgs/-',
  },
  {
    label: 'home.chart_nav.map',
    path: '/dashboard/map/-',
  },
];

export const NavItemsGeneralConfig: NavItemParams[] = [
  {
    label: 'home.overview_nav.projects',
    path: '/dashboard/-/projects',
  },
  {
    label: 'home.overview_nav.grantees',
    path: '/dashboard/-/grantees',
  },
  {
    label: 'home.overview_nav.reports',
    path: '/dashboard/-/reports',
  },
];
