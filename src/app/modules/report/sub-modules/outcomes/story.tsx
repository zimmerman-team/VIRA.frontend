// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { OutcomesLayout } from './index';

export default { title: 'Report ' };

export const reportOutcomes = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid containrt spacing={4}>
        <OutcomesLayout {...mock} />
      </Grid>
    </Container>
  </Providers>
);
