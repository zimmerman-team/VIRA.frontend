// @ts-nocheck
import { mockData as TeamUserCardMock } from 'app/components/surfaces/Cards/TeamUserCard/mock';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  PageModuleModel,
  ManageUsersTeamsLayoutModel,
  SortOptionsModel,
} from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

import { UnregisterCallback, Href } from 'history';

export const sortOptions: SortOptionsModel[] = [
  { label: 'user_management.general.title_sort_asc', value: 'title' },
  { label: 'user_management.general.title_sort_desc', value: '-title' },
  { label: 'user_management.general.created_sort_asc', value: 'dateCreated' },
  { label: 'user_management.general.created_sort_desc', value: '-dateCreated' },
];

export const tabNavigatorMock: TabNavigatorParams = {
  items: [
    {
      label: 'user_management.general.teams',
      path: '/super-admin/manage-teams',
    },
    {
      label: 'user_management.general.users',
      path: '/super-admin/manage-users',
    },
  ],
};

export const breadcrumbsMock: BreadcrumbModel = {
  currentLocation: '',
  previousLocations: [
    {
      label: 'breadcrumbs.manage',
      url: '/super-admin/manage-teams',
    },
  ],
};

export const pageModuleMockUsers: PageModuleModel = {
  title: 'user_management.general.users',
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
    onChangeRowsPerPage: () => {},
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
  sortOptions,
};

export const pageModuleMockTeams: PageModuleModel = {
  title: 'user_management.general.teams',
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
    onChangeRowsPerPage: () => {},
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
  sortOptions,
};

export const manageUsersTeamsLayoutMock: ManageUsersTeamsLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  pageModule: pageModuleMockUsers,
  tabNavigator: tabNavigatorMock,
  teamPageModule: pageModuleMockTeams,
};
