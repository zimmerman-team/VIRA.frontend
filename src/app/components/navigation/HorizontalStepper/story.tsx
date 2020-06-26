import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { mock } from 'app/components/navigation/HorizontalStepper/mock';
import { HorizontalStepper as Component } from 'app/components/navigation/HorizontalStepper';

export default { title: 'Components ' };
export const Stepper = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Component {...mock} />
        </Grid>
      </Grid>
    </Container>
  </Providers>
);
