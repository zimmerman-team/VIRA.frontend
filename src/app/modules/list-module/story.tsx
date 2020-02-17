// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { ListModule } from 'app/modules/list-module/index';
import { TabNavMock } from 'app/modules/list-module/mock';
export default { title: 'List ' };

export const layout = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ListModule tabNav={TabNavMock} />
      </Grid>
    </Container>
  </Providers>
);
