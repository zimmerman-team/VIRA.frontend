// @ts-nocheck

import React from 'react';
import { ChallengesPlansLayout } from '.';

const mock = {
  keyImplChallenges: 'field 1',
  otherProjOutObs: 'field 2',
  futurePlans: 'lorem ipsum dolor plans',
  otherComms: 'lorem ipsum other',
};

export default { title: 'modules | Report ' };

export const challengesAndPlans = () => <ChallengesPlansLayout {...mock} />;
