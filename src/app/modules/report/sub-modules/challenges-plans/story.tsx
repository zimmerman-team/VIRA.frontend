// @ts-nocheck

import React from 'react';
import { ChallengesPlansLayout } from './index';
import { StoryWrapper } from '@storybook/addons';

const mock = {
  keyImplChallenges: 'field 1',
  otherProjOutObs: 'field 2',
  futurePlans: 'lorem ipsum dolor plans',
  otherComms: 'lorem ipsum other',
};

export default { title: 'Report' };

export const challengesAndPlans = () => (
  <StoryWrapper>
    <ChallengesPlansLayout {...mock} />
  </StoryWrapper>
);
