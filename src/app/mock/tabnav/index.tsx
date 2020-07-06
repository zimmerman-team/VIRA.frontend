import React from 'react';
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const navItemMock: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/list/projects',
  },
  {
    label: 'Grantee',
    path: '/list/grantees',
  },
  {
    label: 'Reports',
    path: '/list/reports',
  },
];

// @ts-ignore
export const TabNavMock: TabNavigatorParams = {
  items: navItemMock,
};
