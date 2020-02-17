// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { SubmittedLayout } from './index';

export default { title: 'Report ' };

export const submitReport = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <SubmittedLayout />
      </Grid>
    </Container>
  </Providers>
);
