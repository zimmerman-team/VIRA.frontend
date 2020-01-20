import React from 'react';
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

const priorityAreaNavMock: NavItemParams[] = [
  {
    label: 'IF Priority Area',
    path: '/if-priority-area',
  },
  {
    label: 'SDGs',
    path: '/sdg',
  },
];

export const PriorityAreaNavMock: TabNavigatorParams = {
  items: priorityAreaNavMock,
};
