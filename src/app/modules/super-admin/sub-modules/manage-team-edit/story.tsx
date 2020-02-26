import React from 'react';
import { ManageTeamEditLayout } from './layout';
import { manageTeamEditLayoutMock } from './mock';

export default {
  title: 'modules | Administration / Edit Teams',
};

export const desktopLayout = () => (
  <ManageTeamEditLayout {...manageTeamEditLayoutMock} />
);

export const mobileLayout = () => (
  <ManageTeamEditLayout {...manageTeamEditLayoutMock} />
);

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
