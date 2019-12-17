import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { ManageTeamEditLayoutModel } from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { mockDataVar9 } from 'app/components/datadisplay/Table/mock';

export const breadcrumbsMock: BreadcrumbModel = {
  currentLocation: 'Edit',
  previousLocations: [
    {
      label: 'Manage',
      url: '/',
    },
  ],
};

export const manageTeamEditLayoutMock: ManageTeamEditLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  table: mockDataVar9,
  editedTitle: '',
};
