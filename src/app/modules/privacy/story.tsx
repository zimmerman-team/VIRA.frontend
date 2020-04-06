// @ts-nocheck

import React from 'react';
import { PrivacyModule } from '.';

export default { title: 'modules | Privacy ' };

export const desktopLayout = () => <PrivacyModule />;

export const mobileLayout = () => <PrivacyModule />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
