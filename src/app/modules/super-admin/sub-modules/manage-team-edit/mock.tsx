/* eslint-disable */
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  ManageTeamEditLayoutModel,
  ManageEditAddTeamModel,
} from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { addTeamMemberTableConfig } from 'app/components/datadisplay/Table/mock';
import { UnregisterCallback, Href } from 'history';

export const breadcrumbsMock: BreadcrumbModel = {
  // currentLocation: 'Add',
  currentLocation: 'Add',
  previousLocations: [
    {
      label: 'breadcrumbs.manage_teams',
      url: '/super-admin/manage-teams',
    },
  ],
};

export const manageTeamEditLayoutMock: ManageTeamEditLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  table: addTeamMemberTableConfig,
  title: '',
  setTitle: () => {},
  loading: false,
  submitEnabled: false,
  submit: () => {},
  mode: 'add',
};

export const manageTeamEditAddMock: ManageEditAddTeamModel = {
  breadcrumbs: breadcrumbsMock,
  mode: 'add',
  table: addTeamMemberTableConfig,
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
