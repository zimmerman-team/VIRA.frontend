// @ts-nocheck

import React from 'react';
import { SignInLayout } from 'app/modules/sign-in/layout';
import { StoryWrapper } from 'app/utils/StoryWrapper';

export default {
  title: `sign in`,
  decorators: [storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>],
};

export const SignInOut = () => <SignInLayout />;
