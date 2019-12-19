import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { ManageUserLayoutModel } from 'app/modules/super-admin/sub-modules/manage-user/models';
import { mockDataVar10 } from 'app/components/datadisplay/Table/mock';

export const breadcrumbsMock: BreadcrumbModel = {
  currentLocation: '',
  previousLocations: [
    {
      label: 'Manage',
      url: '/',
    },
  ],
};

export const manageUserLayoutMock: ManageUserLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  table: mockDataVar10,
};
