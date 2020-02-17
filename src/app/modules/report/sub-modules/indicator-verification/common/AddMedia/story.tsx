// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { SdgModule } from 'app/modules/report/sub-modules/indicator-verification';
import { Container, Grid } from '@material-ui/core';

export default { title: 'Report ' };

export const addMedia = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <SdgModule />
      </Grid>
    </Container>
  </Providers>
);
