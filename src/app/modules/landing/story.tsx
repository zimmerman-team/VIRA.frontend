// @ts-nocheck

import React from 'react';
import LandingLayout from '.';

export default { title: 'modules | Landing ' };

export const desktopLayout = () => <LandingLayout />;

export const mobileLayout = () => <LandingLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
