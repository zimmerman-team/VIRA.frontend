import {
  BreadcrumbModel,
  LocationModel,
} from 'app/components/navigation/Breadcrumbs/model';

export const mockData: BreadcrumbModel = {
  currentLocation: 'ActionAid UK',
  previousLocations: [
    {
      label: 'Grantees',
      url: '/',
    },
  ],
};

export const currentLocation = 'ActionAid UK';
export const previousLocations: LocationModel[] = [
  {
    label: 'Grantees',
    url: '/',
  },
];
