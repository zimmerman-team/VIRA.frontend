import React from 'react';
import { ManageUserLayout } from './layout';
import { manageUserLayoutMock } from './mock';

export default {
  title: 'module | Administration',
};

export const manageUsers = () => <ManageUserLayout {...manageUserLayoutMock} />;
