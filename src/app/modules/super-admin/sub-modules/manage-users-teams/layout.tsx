import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { AdminManageOverviewModule } from 'app/modules/super-admin/sub-modules/manage-users-teams/common';
import { Route } from 'react-router-dom';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { PageLoader } from 'app/modules/common/page-loader';
import { Hidden } from '@material-ui/core';
import { Dialog } from 'app/components/surfaces/Dialog';

export const ManageUsersTeamsLayout = (props: ManageUsersTeamsLayoutModel) => {
  return (
    <React.Fragment>
      {props.loading && <PageLoader />}
      <Dialog {...props.dialogProps} />
      {/* ---------------------------------------------------------------------*/}
      {/* Breadcrumbs */}
      <Grid item xs={12} lg={10}>
        <BreadCrumbs {...props.breadcrumbs} />
      </Grid>

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Hidden smDown>
        <Grid item lg={2}>
          <TabNavigator {...props.tabNavigator} />
        </Grid>
      </Hidden>

      <Route path="/super-admin/manage-users">
        <AdminManageOverviewModule {...props.pageModule} />
      </Route>

      <Route path="/super-admin/manage-teams">
        <AdminManageOverviewModule {...props.teamPageModule} />
      </Route>
    </React.Fragment>
  );
};
