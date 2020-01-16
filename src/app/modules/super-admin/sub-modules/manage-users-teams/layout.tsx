import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { PageModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/common';
import { Route } from 'react-router-dom';
import { pageModuleMockUsers } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { pageModuleMockTeams } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

export const ManageUsersTeamsLayout = (props: ManageUsersTeamsLayoutModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    {/* using this element as an helper */}
    <Grid item lg={9} />

    {/* ------------------------------------------------------------------ */}
    {/* projects table navigation */}
    <Grid item lg={3}>
      <TabNavigator {...props.tabNavigator} />
    </Grid>

    <Route path="/super-admin/manage-users">
      <PageModel {...pageModuleMockUsers} />
    </Route>

    <Route path="/super-admin/manage-teams">
      <PageModel {...pageModuleMockTeams} />
    </Route>
  </React.Fragment>
);
