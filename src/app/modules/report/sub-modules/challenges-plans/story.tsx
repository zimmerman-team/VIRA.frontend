// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { ChallengesPlansLayout } from './index';
import { Container, Grid } from '@material-ui/core';

const mock = {
  keyImplChallenges: 'field 1',
  otherProjOutObs: 'field 2',
  futurePlans: 'lorem ipsum dolor plans',
  otherComms: 'lorem ipsum other',
};

export default { title: 'Report ' };

export const challengesAndPlans = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <div>
          <ChallengesPlansLayout {...mock} />
        </div>
      </Grid>
    </Container>
  </Providers>
);
