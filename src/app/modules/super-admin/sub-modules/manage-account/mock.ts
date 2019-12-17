import { ManageAccountModel } from 'app/modules/super-admin/sub-modules/manage-account/model';

export const manageAccountMock: ManageAccountModel = {
  title: 'Manage Account',
  breadcrumbs: {
    currentLocation: '',
    previousLocations: [
      {
        label: 'Manage Account',
        url: '/',
      },
    ],
  },
  form: {
    email: '',
    firstName: '',
    lastName: '',
  },
};
