// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { PrivacyModule } from 'app/modules/privacy/index';
export default { title: 'Privacy ' };

export const layout = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <PrivacyModule />
      </Grid>
    </Container>
  </Providers>
);
