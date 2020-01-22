/* eslint-disable */
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  ManageTeamEditLayoutModel,
  ManageEditAddTeamModel,
} from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { mockDataVar9 } from 'app/components/datadisplay/Table/mock';
import { UnregisterCallback, Href } from 'history';

export const breadcrumbsMock: BreadcrumbModel = {
  currentLocation: 'Add',
  previousLocations: [
    {
      label: 'Manage',
      url: '/super-admin/manage-teams',
    },
  ],
};

export const manageTeamEditLayoutMock: ManageTeamEditLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  table: mockDataVar9,
  title: '',
  setTitle: () => {},
  loading: false,
  submitEnabled: false,
  submit: () => {},
};

export const manageTeamEditAddMock: ManageEditAddTeamModel = {
  breadcrumbs: breadcrumbsMock,
  mode: 'add',
  table: mockDataVar9,
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
