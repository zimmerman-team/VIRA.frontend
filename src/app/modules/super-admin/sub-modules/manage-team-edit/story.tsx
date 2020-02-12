import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { ManageTeamEditLayout } from 'app/modules/super-admin/sub-modules/manage-team-edit/layout';
import { manageTeamEditLayoutMock } from 'app/modules/super-admin/sub-modules/manage-team-edit/mock';

export default {
  title: 'Super Admin ',
};

export const manageTeamEdit = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ManageTeamEditLayout {...manageTeamEditLayoutMock} />
      </Grid>
    </Container>
  </Providers>
);
