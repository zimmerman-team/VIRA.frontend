import React from 'react';
import { manageUserEditMock } from './mock';
import { ManageUserEdit } from '.';

export default {
  title: 'modules | Administration',
};

export const editUser = () => <ManageUserEdit {...manageUserEditMock} />;
