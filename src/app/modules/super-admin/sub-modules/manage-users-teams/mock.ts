import { mockData as TeamUserCardMock } from 'app/components/surfaces/Cards/TeamUserCard/mock';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

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
      url: '/',
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
};

export const manageUsersTeamsLayoutMock: ManageUsersTeamsLayoutModel = {
  breadcrumbs: breadcrumbsMock,
  pageModule: pageModuleMockUsers,
  tabNavigator: tabNavigatorMock,
};
