import {
  BreadcrumbModel,
  LocationModel,
} from 'app/components/navigation/Breadcrumbs/model';

export const currentLocation = 'ActionAid UK';
export const previousLocations: LocationModel[] = [
  {
    label: 'Grantees',
    url: '/list/1',
  },
];
export const mockData: BreadcrumbModel = {
  currentLocation: 'ActionAid UK',
  previousLocations: previousLocations,
};
