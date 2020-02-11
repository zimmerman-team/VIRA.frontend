// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { AddMediaLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { Container, Grid } from '@material-ui/core';

export default { title: 'Report ' };

export const addMedia = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid containrt spacing={4}>
        <AddMediaLayout />
      </Grid>
    </Container>
  </Providers>
);
