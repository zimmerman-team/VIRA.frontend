// @ts-nocheck

import React from 'react';
import { SignInLayout } from './layout';

export default {
  title: `modules | Authentication / Sign In`,
};

export const desktopLayout = () => <SignInLayout />;

export const mobileLayout = () => <SignInLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
