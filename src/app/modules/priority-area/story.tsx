// @ts-nocheck

import React from 'react';
import { PriorityAreaModule } from '.';

export default { title: 'modules | Priority Area' };

export const desktopLayout = () => <PriorityAreaModule />;

export const mobileLayout = () => <PriorityAreaModule />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
