import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import mockData from './mock';
import { ExpansionPanel } from './';

export default {
  component: ExpansionPanel,
  title: 'Expansion Panel',
};

export const text = () => (
  <Providers>
    <Grid container style={{ backgroundColor: '#ebebeb' }}>
      <ExpansionPanel faqItems={mockData.faqItems} />
    </Grid>
  </Providers>
);
