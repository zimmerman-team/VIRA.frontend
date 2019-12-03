import { ManageTeamsLayoutModel } from 'app/modules/super-admin/manage-teams/models';
import { mockData as TeamUserCardMock } from 'app/components/surfaces/Cards/TeamUserCard/mock';

export const mockData: ManageTeamsLayoutModel = {
  breadcrumbs: {
    currentLocation: '',
    previousLocations: [
      {
        label: 'Manage',
        url: '/',
      },
    ],
  },
  title: 'Teams',
  inPageNavigation: {
    locations: [
      {
        items: [
          {
            label: 'Teams',
            url: '/manage-teams',
          },
          {
            label: 'Users',
            url: '/manage-users',
          },
        ],
      },
    ],
    activity: 'Teams',
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
