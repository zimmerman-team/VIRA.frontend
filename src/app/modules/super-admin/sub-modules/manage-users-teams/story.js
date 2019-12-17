import React from 'react';
import Providers from 'app/Providers';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { mockData } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';

export default {
  component: ManageUsersTeamsLayout,
  title: 'Manage Users/Teams',
};

export const text = () => (
  <Providers>
    <ManageUsersTeamsLayout {...mockData} />
  </Providers>
);
