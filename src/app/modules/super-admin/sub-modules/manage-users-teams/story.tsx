import React from 'react';
import Providers from 'app/Providers';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

export default {
  component: ManageUsersTeamsLayout,
  title: 'Manage Users/Teams',
};

export const text = () => (
  <Providers>
    <PageWrapper>
      <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />
    </PageWrapper>
  </Providers>
);
