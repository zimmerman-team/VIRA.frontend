// @ts-nocheck
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const statsMock: StatItemParams[] = [
  {
    amount: 0,
    type: 'home.dashboard.projects',
    path: '/list/0',
  },
  {
    amount: 0,
    type: 'home.dashboard.grantees',
    path: '/list/1',
  },
  {
    amount: 0,
    type: 'home.dashboard.reports',
    path: '/list/2',
  },
];

export interface StatItemParams {
  amount: number;
  type: string;
  path: string;
  label?: string;
  index?: number;
}

export const navItemMockViz: NavItemParams[] = [
  {
    // label: 'Priority Area',
    label: 'home.chart_nav.priority_area',
    path: '/dashboard/priority-area/-',
  },
  {
    // label: 'SDGs',
    label: 'home.chart_nav.sdg',
    path: '/dashboard/sdgs/-',
  },
  {
    // label: 'Map',
    label: 'home.chart_nav.map',
    path: '/dashboard/map/-',
  },
];

export const TabNavMockViz: TabNavigatorParams = {
  items: navItemMockViz,
};

export const navItemMockList: NavItemParams[] = [
  {
    // label: 'Projects',
    label: 'home.overview_nav.projects',
    path: '/dashboard/-/projects',
  },
  {
    // label: 'Grantees',
    label: 'home.overview_nav.grantees',
    path: '/dashboard/-/grantees',
  },
  {
    // label: 'Reports',
    label: 'home.overview_nav.reports',
    path: '/dashboard/-/reports',
  },
];

export const TabNavMockList: TabNavigatorParams = {
  items: navItemMockList,
};
