// @ts-nocheck

import React from 'react';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { StoryWrapper } from '@storybook/addons';

export default { title: 'Report' };

export const indicatorVerification = () => (
  <StoryWrapper>
    <IndicatorVerificationLayout />
  </StoryWrapper>
);
