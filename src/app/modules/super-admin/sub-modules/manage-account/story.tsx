import React from 'react';
import Providers from 'app/Providers';
import { manageAccountMock } from 'app/modules/super-admin/sub-modules/manage-account/mock';
import { ManageAccount } from 'app/modules/super-admin/sub-modules/manage-account/index';
import { Container, Grid } from '@material-ui/core';

export default {
  title: 'Super Admin ',
};

export const manageAccount = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ManageAccount {...manageAccountMock} />
      </Grid>
    </Container>
  </Providers>
);
