import React from 'react';
import { manageUserEditMock } from './mock';
import { ManageUserEdit } from '.';

export default {
  title: 'modules | Administration / Edit User',
};

export const desktopLayout = () => <ManageUserEdit {...manageUserEditMock} />;

export const mobileLayout = () => <ManageUserEdit {...manageUserEditMock} />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
