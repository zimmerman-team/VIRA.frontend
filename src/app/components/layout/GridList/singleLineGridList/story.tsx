import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { mock } from 'app/components/layout/GridList/singleLineGridList/mock';
import { SingleLineGridList as Component } from 'app/components/layout/GridList/singleLineGridList';

export default { title: 'Components ' };

export const SingleLineGridList = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item>
          <Component {...mock} />
        </Grid>
      </Grid>
    </Container>
  </Providers>
);
