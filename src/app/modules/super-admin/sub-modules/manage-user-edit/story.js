import React from 'react';
import Providers from 'app/Providers';
import { mockData } from 'app/modules/super-admin/sub-modules/manage-user-edit/mock';
import { ManageUserEdit } from 'app/modules/super-admin/sub-modules/manage-user-edit/index';

export default {
  component: ManageUserEdit,
  title: 'Manage User Edit',
};

export const text = () => (
  <Providers>
    <ManageUserEdit {...mockData} />
  </Providers>
);
