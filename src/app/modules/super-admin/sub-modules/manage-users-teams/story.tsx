import React from 'react';
import { ManageUsersTeamsLayout } from './layout';
import { manageUsersTeamsLayoutMock } from './mock';

export default {
  title: 'modules | Administration / Users & Teams',
};

export const desktopLayout = () => (
  <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />
);

export const mobileLayout = () => (
  <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />
);

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
