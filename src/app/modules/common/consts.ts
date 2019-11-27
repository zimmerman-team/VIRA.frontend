export const navItems = [
  'Dashboard',
  'Projects',
  'Grantees',
  'IF Priority area / SDGs',
  'FAQ',
  'Support',
];

export interface NavItemParams {
  label: string;
  path: string;
}

export const NavItems: NavItemParams[] = [
  {
    label: 'landing',
    path: '/',
  },
  {
    label: 'projects',
    path: '/projects',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  {
    label: 'project detail',
    path: '/projects/detail',
  },

  {
    label: 'reports detail',
    path: '/reports/detail',
  },
  /* ---------------------------- */
  {
    label: 'grantees detail',
    path: '/grantees/detail',
  },
  {
    label: 'if priority area',
    path: '/if-priority-area',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  /*{
    label: 'grantee detail',
    path: '/grantees/detail',
  },*/
  /* ---------------------------- */
  {
    label: 'reports',
    path: '/reports',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */

  /* ---------------------------- */

  {
    label: 'faq',
    path: '/faq',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  /*{
    label: 'report: outcomes',
    path: '/report/outcomes',
  },
  {
    label: 'report: indicator and verification',
    path: '/report/indicator',
  },
  {
    label: 'report: media add',
    path: '/report/media-add',
  },
  {
    label: 'report: challenges and plans',
    path: '/report/challenges-plans',
  },
  {
    label: 'report: results',
    path: '/report/results',
  },
  {
    label: 'report: submit',
    path: '/report/submit',
  },*/
  /* ---------------------------- */
  {
    label: 'sdg',
    path: '/sdg',
  },
  {
    label: 'privacy',
    path: '/sdg',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  /*{
    label: 'administration',
    path: '/admin',
  },*/
  /* ---------------------------- */
];
