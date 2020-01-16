import { ManageUserEditModel } from 'app/modules/super-admin/sub-modules/manage-user-edit/model';

export const manageUserEditMock: ManageUserEditModel = {
  breadcrumbs: {
    currentLocation: 'Edit',
    previousLocations: [
      {
        label: 'Manage',
        url: '/',
      },
    ],
  },
  form: {
    email: '',
    firstName: '',
    lastName: '',
    radioButtonGroup: {
      title: 'User Role',
      items: [
        {
          value: 'Administrator',
          label: 'Administrator',
        },
        {
          value: 'Manager',
          label: 'Manager',
        },
        {
          value: 'Grantee User',
          label: 'Grantee User',
        },
      ],
    },
  },
};
