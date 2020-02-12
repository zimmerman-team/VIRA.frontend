// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import LandingLayout from 'app/modules/landing/index';
export default { title: 'Landing ' };

export const layout = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <LandingLayout />
      </Grid>
    </Container>
  </Providers>
);
