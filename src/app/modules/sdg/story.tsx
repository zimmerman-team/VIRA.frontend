// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { SdgModule } from 'app/modules/sdg/index';
export default { title: 'SDG' };

export const layout = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <SdgModule />
      </Grid>
    </Container>
  </Providers>
);
