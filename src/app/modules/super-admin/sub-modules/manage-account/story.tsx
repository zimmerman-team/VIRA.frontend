import React from 'react';
import Providers from 'app/Providers';
import { manageAccountMock } from 'app/modules/super-admin/sub-modules/manage-account/mock';
import { ManageAccount } from 'app/modules/super-admin/sub-modules/manage-account/index';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

export default {
  component: ManageAccount,
  title: 'Manage Account Layout',
};

export const text = () => (
  <Providers>
    <PageWrapper>
      <ManageAccount {...manageAccountMock} />
    </PageWrapper>
  </Providers>
);
