import React from 'react';
import { ManageUsersTeamsLayout } from './layout';
import { manageUsersTeamsLayoutMock } from './mock';

export default {
  title: 'modules | Administration',
};

export const usersAndTeams = () => (
  <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />
);
