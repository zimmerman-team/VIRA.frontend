import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavItemParams } from 'app/modules/common/consts';

export const breadcrumbs: BreadcrumbModel = {
  currentLocation: 'Report',
  previousLocations: [
    { label: 'Projects', url: 'list/projects' },
    { label: 'Project Name', url: '/project-detail' },
  ],
};

export const outcomeCheckboxes = [
  { label: 'Refugees', value: 'refugees' },
  { label: 'Drug use', value: 'drug_use' },
  { label: 'The Elderly', value: 'elderly' },
  { label: 'Prostitution', value: 'prostitution' },
  {
    label: 'Poverty reduction with a focus on youth and children',
    value: 'poverty_reduction',
  },
  { label: 'Homelessness', value: 'homelessness' },
  { label: 'Prisoner rehabilitation / reintegration', value: 'prisoner_rehab' },
];

export const tabs: NavItemParams[] = [
  {
    label: 'Outcomes',
    path: 'outcomes',
    disabled: false,
  },
  {
    label: 'Privacy Priorities',
    path: 'policy-priorities',
    disabled: true,
  },
  {
    label: 'Indicator and verification',
    path: 'indicator-verification',
    disabled: true,
  },
  {
    label: 'Challenges and plans',
    path: 'challenges-plans',
    disabled: true,
  },
  {
    label: 'Preview',
    path: 'preview',
    disabled: true,
  },
];
