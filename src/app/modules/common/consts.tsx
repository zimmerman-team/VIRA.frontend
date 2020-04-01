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
    path: '/',
    icon: <IconDashBoard />,
  },
  {
    label: 'sidebar.items.projects',
    path: '/list/projects',
    icon: <IconProjects />,
  },
  {
    label: 'sidebar.items.grantees',
    path: '/list/grantees',
    icon: <IconGrantees />,
  },
  {
    label: 'sidebar.items.reports',
    path: '/list/reports',
    icon: <IconReports />,
  },
  {
    label: 'sidebar.items.faq',
    path: '/faq',
    icon: <IconFAQ />,
  },
];
