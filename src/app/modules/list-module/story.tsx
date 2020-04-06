// @ts-nocheck

import React from 'react';
import { ListModule } from '.';
import { TabNavMock } from './mock';

export default { title: 'modules | Overview' };

export const desktopLayout = () => <ListModule tabNav={TabNavMock} />;

export const mobileLayout = () => <ListModule tabNav={TabNavMock} />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
