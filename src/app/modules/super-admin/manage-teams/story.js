import React from 'react';
import Providers from 'app/Providers';
import { ManageTeamsLayout } from 'app/modules/super-admin/manage-teams/layout';
import { mockData } from 'app/modules/super-admin/manage-teams/mock';

export default {
  component: ManageTeamsLayout,
  title: 'Manage Teams',
};

export const text = () => (
  <Providers>
    <ManageTeamsLayout {...mockData} />
  </Providers>
);
