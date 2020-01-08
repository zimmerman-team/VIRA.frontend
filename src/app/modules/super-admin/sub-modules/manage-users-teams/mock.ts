import { mockData as TeamUserCardMock } from 'app/components/surfaces/Cards/TeamUserCard/mock';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  PageModuleModel,
  ManageUsersTeamsLayoutModel,
} from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

import { UnregisterCallback, Href } from 'history';

export const tabNavigatorMock: TabNavigatorParams = {
  items: [
    {
      label: 'Teams',
      path: '/super-admin/manage-teams',
    },
    {
      label: 'Users',
      path: '/super-admin/manage-users',
    },
  ],
};

export const breadcrumbsMock: BreadcrumbModel = {
  currentLocation: '',
  previousLocations: [
    {
      label: 'Manage',
      url: 'super-admin/manage-teams',
    },
  ],
};

export const pageModuleMockUsers: PageModuleModel = {
  title: 'Users',
  teamCards: [
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
  ],
  pagination: {
    count: 0,
    page: 0,
    rowsPerPage: 0,
    onChangePage: () => {},
  },
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

export const pageModuleMockTeams: PageModuleModel = {
  title: 'Teams',
  teamCards: [
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
    TeamUserCardMock,
  ],
  pagination: {
    count: 0,
    page: 0,
    rowsPerPage: 0,
    onChangePage: () => {},
  },
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

export const manageUsersTeamsLayoutMock: ManageUsersTeamsLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  pageModule: pageModuleMockUsers,
  tabNavigator: tabNavigatorMock,
};
