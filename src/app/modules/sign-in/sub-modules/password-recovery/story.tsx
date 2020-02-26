// @ts-nocheck

import React from 'react';
import { PasswordRecoveryLayout } from './layout';

export default {
  title: 'modules | Authentication / Password Recovery',
};

export const desktopLayout = () => <PasswordRecoveryLayout />;

export const mobileLayout = () => <PasswordRecoveryLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
