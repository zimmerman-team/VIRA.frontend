import { ManageUserEditModel } from 'app/modules/super-admin/sub-modules/manage-user-edit/model';
import { UnregisterCallback, Href } from 'history';

export const manageUserEditMock: ManageUserEditModel = {
  breadcrumbs: {
    currentLocation: 'Edit',
    previousLocations: [
      {
        label: 'Manage',
        url: '/super-admin/manage-users',
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
    selectOptions: [],
  },
  mode: 'edit',
  match: {
    isExact: true,
    params: {},
    path: '',
    url: '',
  },
  location: {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {},
  },
  history: {
    length: 2,
    action: 'POP',
    location: {
      hash: '',
      key: '',
      pathname: '',
      search: '',
      state: {},
    },
    push: () => {},
    replace: () => {},
    go: num => {},
    goBack: () => {},
    goForward: () => {},
    block: t => {
      const temp: UnregisterCallback = () => {};
      return temp;
    },
    createHref: t => {
      const temp: Href = '';
      return temp;
    },
    listen: t => {
      const temp: UnregisterCallback = () => {};
      return temp;
    },
  },
  staticContext: {},
};
