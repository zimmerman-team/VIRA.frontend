import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavItemParams } from 'app/modules/common/consts';

export const breadcrumbs: BreadcrumbModel = {
  currentLocation: 'Report',
  previousLocations: [
    { label: 'Projects', url: 'list/projects' },
    { label: 'Project Name', url: '/project-detail' },
  ],
};

export const tabs: NavItemParams[] = [
  {
    label: 'reports.form.steps.outcomes',
    path: 'outcomes',
    disabled: false,
  },
  {
    label: 'reports.form.steps.policy_priorities',
    path: 'policy-priorities',
    disabled: true,
  },
  {
    label: 'reports.form.steps.indicator_verification',
    path: 'indicator-verification',
    disabled: true,
  },
  {
    label: 'reports.form.steps.challenges_plans',
    path: 'challenges-plans',
    disabled: true,
  },
  {
    label: 'reports.form.steps.preview',
    path: 'preview',
    disabled: true,
  },
];
