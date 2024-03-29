import React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalBarChartCard } from './';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from './mock';

storiesOf('Surfaces|Cards/', module).add('Horizontal Bar Chart card', () => (
  <Providers>
    <Grid container>
      <HorizontalBarChartCard data={mockData.data} title={mockData.title} />
    </Grid>
  </Providers>
));
