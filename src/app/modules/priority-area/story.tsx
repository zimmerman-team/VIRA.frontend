// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { PriorityAreaModule } from 'app/modules/priority-area/index';
import { TabNavMock } from 'app/modules/list-module/mock';
export default { title: 'Priority Area ' };

export const layout = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <PriorityAreaModule />
      </Grid>
    </Container>
  </Providers>
);
