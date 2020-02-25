import React from 'react';
import { ManageUserLayout } from './layout';
import { manageUserLayoutMock } from './mock';

export default {
  title: 'modules | Administration',
};

export const manageUsers = () => <ManageUserLayout {...manageUserLayoutMock} />;
