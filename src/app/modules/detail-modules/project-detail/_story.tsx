// @ts-nocheck

import React from 'react';
import { ProjectDetailLayout } from './layout';

export default { title: 'modules | Project Detail ' };

export const desktopLayout = () => <ProjectDetailLayout />;

export const mobileLayout = () => <ProjectDetailLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
