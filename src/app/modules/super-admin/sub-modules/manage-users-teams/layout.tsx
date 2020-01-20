import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Route } from 'react-router-dom';

import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { PageLoader } from 'app/modules/common/page-loader';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { PageModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/common';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

export const ManageUsersTeamsLayout = (props: ManageUsersTeamsLayoutModel) => (
  <React.Fragment>
    {props.loading && <PageLoader />}
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    {/* using this element as an helper */}
    <Grid item lg={10} />

    {/* ------------------------------------------------------------------ */}
    {/* projects table navigation */}
    <Grid item lg={2}>
      <TabNavigator {...props.tabNavigator} />
    </Grid>

    <Route path="/super-admin/manage-users">
      <PageModel {...props.pageModule} urlParam="manage-users" />
    </Route>

    <Route path="/super-admin/manage-teams">
      <PageModel {...props.teamPageModule} urlParam="manage-teams" />
    </Route>
  </React.Fragment>
);
