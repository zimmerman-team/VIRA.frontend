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
    label: 'Dashboard',
    path: '/',
    icon: <IconDashBoard />,
  },
  {
    label: 'Projects',
    path: '/list/0',
    icon: <IconProjects />,
  },
  {
    label: 'Grantees',
    path: '/list/1',
    icon: <IconGrantees />,
  },
  {
    label: 'Reports',
    path: '/list/2',
    icon: <IconReports />,
  },
  {
    path: '/faq',
    label: 'FAQ',
    icon: <IconFAQ />,
  },
];
