import React from 'react';
import Providers from 'app/Providers';
import { mockData } from 'app/modules/super-admin/sub-modules/manage-account/mock';
import { ManageAccount } from 'app/modules/super-admin/sub-modules/manage-account/index';

export default {
  component: ManageAccount,
  title: 'Manage Account Layout',
};

export const text = () => (
  <Providers>
    <ManageAccount {...mockData} />
  </Providers>
);
