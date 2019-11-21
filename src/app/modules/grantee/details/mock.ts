import { GranteeDetailModel } from 'app/modules/grantee/details/model';
import { mockDataVar3 as mockDatatable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockDataInpageNav } from 'app/components/navigation/InPageNavigation/mock';
import { mockData as mockDataBreadcrumbs } from 'app/components/navigation/Breadcrumbs/mock';

export const mockData: GranteeDetailModel = {
  title: 'ActionAid UK',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
  breadcrumbs: mockDataBreadcrumbs,
  datatable: mockDatatable,
  inpageNavigation: mockDataInpageNav,
};
