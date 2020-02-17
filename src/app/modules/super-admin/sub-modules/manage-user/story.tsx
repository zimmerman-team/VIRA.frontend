import React from 'react';
import Providers from 'app/Providers';
import { ManageUserLayout } from 'app/modules/super-admin/sub-modules/manage-user/layout';
import { manageUserLayoutMock } from 'app/modules/super-admin/sub-modules/manage-user/mock';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

export default {
  component: ManageUserLayout,
  title: 'Manage Team Edit',
};

export const text = () => (
  <Providers>
    <PageWrapper>
      <ManageUserLayout {...manageUserLayoutMock} />
    </PageWrapper>
  </Providers>
);
