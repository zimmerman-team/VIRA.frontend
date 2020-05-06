import React from 'react';
import { IconDashBoard } from 'app/modules/common/icons/IconDashBoard';
import { IconProjects } from 'app/modules/common/icons/IconProjects';
import { IconGrantees } from 'app/modules/common/icons/IconGrantees';
import { IconReports } from 'app/modules/common/icons/IconReports';
import { IconFAQ } from 'app/modules/common/icons/IconFAQ';

export interface NavItemParams {
  label: string;
  path: string;
  icon?: React.ReactElement;
  disabled?: boolean;
}

export const NavItems: NavItemParams[] = [
  {
    label: 'sidebar.items.dashboard',
    path: '/dashboard',
    icon: <IconDashBoard />,
  },
  {
    label: 'sidebar.items.projects',
    path: '/list/0',
    icon: <IconProjects />,
  },
  {
    label: 'sidebar.items.grantees',
    path: '/list/1',
    icon: <IconGrantees />,
  },
  {
    label: 'sidebar.items.reports',
    path: '/list/2',
    icon: <IconReports />,
  },
  {
    label: 'sidebar.items.faq',
    path: '/faq',
    icon: <IconFAQ />,
  },
];
