// @ts-nocheck

import React from 'react';
import { GranteeDetailLayout } from './layout';

export default { title: 'modules | Grantee Detail ' };

export const desktopLayout = () => <GranteeDetailLayout />;

export const mobileLayout = () => <GranteeDetailLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
