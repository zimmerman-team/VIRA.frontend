import React from 'react';
import Providers from 'app/Providers';
import { ManageUsersLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { mockData } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';

export default {
  component: ManageUsersLayout,
  title: 'Manage Users',
};

export const text = () => (
  <Providers>
    <ManageUsersLayout {...mockData} />
  </Providers>
);
