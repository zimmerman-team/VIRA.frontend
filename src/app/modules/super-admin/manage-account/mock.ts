import { ManageAccountModel } from 'app/modules/super-admin/manage-account/model';

export const mockData: ManageAccountModel = {
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
