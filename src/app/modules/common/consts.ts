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
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Projects',
    path: '/list/projects',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  {
    label: 'Grantees',
    path: '/list/grantees',
  },
  /* ---------------------------- */
  {
    label: 'Reports',
    path: '/list/reports',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  {
    label: 'Project Detail',
    path: '/projects/detail',
  },

  {
    label: 'Reports Detail',
    path: '/reports/detail',
  },
  /* ---------------------------- */
  {
    label: 'Grantees Detail',
    path: '/grantees/detail',
  },
  {
    label: 'IF Priority Area / SDGs',
    path: '/if-priority-area',
  },

  {
    label: 'Report: outcomes',
    path: '/report/outcomes',
  },

  {
    label: 'Report: indicator verification',
    path: '/report/indicator-verification',
  },

  {
    label: 'Report: challenges & plans',
    path: '/report/challenges-plans',
  },

  {
    label: 'Report: preview',
    path: '/report/preview',
  },

  {
    label: 'Admin: manage users',
    path: '/super-admin/manage-users',
  },

  /* ------------------------------------------------------------------------ */
  /* debug */

  /* ---------------------------- */

  {
    label: 'FAQ',
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
    label: 'SDGs',
    path: '/sdg',
  },
  {
    label: 'Privacy',
    path: '/privacy',
  },
  /* ------------------------------------------------------------------------ */
  /* debug */
  /*{
    label: 'administration',
    path: '/admin',
  },*/
  /* ---------------------------- */
];
