import React from 'react';
import Providers from 'app/Providers';
import { ManageTeamEditLayout } from 'app/modules/super-admin/sub-modules/manage-team-edit/layout';
import { manageTeamEditLayoutMock } from 'app/modules/super-admin/sub-modules/manage-team-edit/mock';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

export default {
  component: ManageTeamEditLayout,
  title: 'Manage Team Edit',
};

export const text = () => (
  <Providers>
    <PageWrapper>
      <ManageTeamEditLayout {...manageTeamEditLayoutMock} />
    </PageWrapper>
  </Providers>
);
