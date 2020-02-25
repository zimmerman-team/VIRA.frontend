// @ts-nocheck

import React from 'react';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { StoryWrapper } from 'app/utils/StoryWrapper';

export default {
  title: `Report`,
  decorators: [storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>],
};

export const indicatorVerification = () => <IndicatorVerificationLayout />;
