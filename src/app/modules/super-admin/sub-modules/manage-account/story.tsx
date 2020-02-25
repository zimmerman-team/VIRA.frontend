import React from 'react';
import { manageAccountMock } from 'app/modules/super-admin/sub-modules/manage-account/mock';
import { ManageAccount } from 'app/modules/super-admin/sub-modules/manage-account/index';

export default {
  title: 'modules | Administration',
};

export const manageAccount = () => <ManageAccount {...manageAccountMock} />;
