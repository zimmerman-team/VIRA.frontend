import { ManageUsersLayoutModel } from 'app/modules/super-admin/manage-users/models';
import { mockData as TeamUserCardMock } from 'app/components/surfaces/Cards/TeamUserCard/mock';

export const mockData: ManageUsersLayoutModel = {
  breadcrumbs: {
    currentLocation: '',
    previousLocations: [
      {
        label: 'Manage',
        url: '/',
      },
    ],
  },
  title: 'Users',
  inPageNavigation: {
    locations: [
      {
        items: [
          {
            label: 'Teams',
            url: 'super-admin/manage-users',
          },
          {
            label: 'Users',
            url: 'super-admin/manage-users',
          },
        ],
      },
    ],
    activity: 'Users',
  },
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
