import React from 'react';
import Providers from 'app/Providers';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { Container, Grid } from '@material-ui/core';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';

export default {
  title: 'Super Admin ',
};

export const manageUsersTeams = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />
      </Grid>
    </Container>
  </Providers>
);
