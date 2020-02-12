import React from 'react';
import Providers from 'app/Providers';
import { manageUserLayoutMock } from 'app/modules/super-admin/sub-modules/manage-user/mock';
import { ManageUserLayout } from 'app/modules/super-admin/sub-modules/manage-user/layout';
import { Container, Grid } from '@material-ui/core';

export default {
  title: 'Super Admin ',
};

export const manageUser = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ManageUserLayout {...manageUserLayoutMock} />
      </Grid>
    </Container>
  </Providers>
);
