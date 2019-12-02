import React from 'react';
import { storiesOf } from '@storybook/react';
import { UserProfileCard } from './';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from './mock';

storiesOf('Surfaces|Cards/', module).add('User Profile card', () => (
  <Providers>
    <Grid container>
      <UserProfileCard
        imageSrc={mockData.imageSrc}
        firstName={mockData.firstName}
        lastName={mockData.lastName}
      />
    </Grid>
  </Providers>
));
