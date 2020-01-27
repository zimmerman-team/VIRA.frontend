export interface NavItemParams {
  label: string;
  path: string;
}

export const NavItems: NavItemParams[] = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Projects',
    path: '/list/projects',
  },
  {
    label: 'Grantees',
    path: '/list/grantees',
  },
  {
    label: 'Reports',
    path: '/list/reports',
  },
  {
    label: 'FAQ',
    path: '/faq',
  },
];
