import React from 'react';
import Providers from 'app/Providers';
import { manageUserEditMock } from 'app/modules/super-admin/sub-modules/manage-user-edit/mock';
import { ManageUserEdit } from 'app/modules/super-admin/sub-modules/manage-user-edit/index';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

export default {
  component: ManageUserEdit,
  title: 'Manage User Edit',
};

export const text = () => (
  <Providers>
    <PageWrapper>
      <ManageUserEdit {...manageUserEditMock} />
    </PageWrapper>
  </Providers>
);
