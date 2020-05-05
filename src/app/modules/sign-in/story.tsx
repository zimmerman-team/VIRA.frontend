// @ts-nocheck

import React from 'react';
import { SignInLayout } from './layout';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: `modules | Authentication / Sign In`,
};

export const desktopLayout = () => <SignInLayout />;

export const mobileLayout = () => <SignInLayout />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
    figma: {
      ids: '0%3A107',
      names: ['Sign in'],
    },
  },
};
