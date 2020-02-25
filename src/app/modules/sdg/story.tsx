// @ts-nocheck

import React from 'react';
import { SdgModule } from '.';

export default { title: 'modules | SDG' };

export const desktopLayout = () => <SdgModule />;

export const mobileLayout = () => <SdgModule />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
