import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const statsMock: StatItemParams[] = [
  {
    amount: 0,
    type: 'Projects',
  },
  {
    amount: 0,
    type: 'Grantees',
  },
  {
    amount: 0,
    type: 'Total Reports',
  },
];

export interface StatItemParams {
  amount: number;
  type: string;
}

export const navItemMockViz: NavItemParams[] = [
  {
    label: 'Priority Area',
    path: '/dashboard/priority-area/-',
  },
  {
    label: 'SDGs',
    path: '/dashboard/sdgs/-',
    spacing: 23,
  },
  {
    label: 'Map',
    path: '/dashboard/map/-',
    spacing: 31,
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
    spacing: 44,
  },
  {
    label: 'Reports',
    path: '/dashboard/-/reports',
    spacing: 44,
  },
];

export const TabNavMockList: TabNavigatorParams = {
  items: navItemMockList,
};
