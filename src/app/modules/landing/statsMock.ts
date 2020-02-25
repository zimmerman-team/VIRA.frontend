import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const statsMock: StatItemParams[] = [
  {
    amount: 0,
    type: 'Projects',
    path: '/list/projects',
  },
  {
    amount: 0,
    type: 'Grantees',
    path: '/list/grantees',
  },
  {
    amount: 0,
    type: 'Total Reports',
    path: '/list/reports',
  },
];

export interface StatItemParams {
  amount: number;
  type: string;
  path: string;
}

export const navItemMockViz: NavItemParams[] = [
  {
    label: 'Priority Area',
    path: '/dashboard/priority-area/-',
  },
  {
    label: 'SDGs',
    path: '/dashboard/sdgs/-',
  },
  {
    label: 'Map',
    path: '/dashboard/map/-',
  },
];

export const TabNavMockViz: TabNavigatorParams = {
  items: navItemMockViz,
};

export const navItemMockList: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/dashboard/-/projects',
  },
  {
    label: 'Grantee',
    path: '/dashboard/-/grantees',
  },
  {
    label: 'Reports',
    path: '/dashboard/-/reports',
  },
];

export const TabNavMockList: TabNavigatorParams = {
  items: navItemMockList,
};
