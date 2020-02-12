import React from 'react';
import Providers from 'app/Providers';
import { manageUserEditMock } from 'app/modules/super-admin/sub-modules/manage-user-edit/mock';
import { ManageUserEdit } from 'app/modules/super-admin/sub-modules/manage-user-edit/index';
import { Container, Grid } from '@material-ui/core';

export default {
  title: 'Super Admin',
};

export const manageUserEdit = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ManageUserEdit {...manageUserEditMock} />
      </Grid>
    </Container>
  </Providers>
);
