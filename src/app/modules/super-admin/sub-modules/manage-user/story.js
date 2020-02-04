import React from 'react';
import Providers from 'app/Providers';
import { ManageUserLayout } from 'app/modules/super-admin/sub-modules/manage-user/layout';
import { managueUserLayoutMock } from 'app/modules/super-admin/sub-modules/manage-user/mock';

export default {
  component: ManageUserLayout,
  title: 'Manage Team Edit',
};

export const text = () => (
  <Providers>
    <ManageUserLayout {...managueUserLayoutMock} />
  </Providers>
);
