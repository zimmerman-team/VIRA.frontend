import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavItemParams } from 'app/modules/common/consts';

export const breadcrumbs: BreadcrumbModel = {
  currentLocation: 'Report',
  previousLocations: [
    { label: 'Projects', url: '/projects' },
    { label: 'Project Name', url: '/project-detail' },
  ],
};

export const tabs: NavItemParams[] = [
  {
    label: 'Outcomes',
    path: 'outcomes',
  },
  {
    label: 'Indicator and verification',
    path: 'indicator-verification',
  },
  {
    label: 'Challenges and plans',
    path: 'challenges-plans',
  },
  {
    label: 'Preview',
    path: 'preview',
  },
];

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
