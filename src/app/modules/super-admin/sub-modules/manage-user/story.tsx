import React from 'react';
import { ManageUserLayout } from './layout';
import { manageUserLayoutMock } from './mock';

export default {
  title: 'modules | Administration / Manage User',
};

export const desktopLayout = () => (
  <ManageUserLayout {...manageUserLayoutMock} />
);

export const mobileLayout = () => (
  <ManageUserLayout {...manageUserLayoutMock} />
);

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
