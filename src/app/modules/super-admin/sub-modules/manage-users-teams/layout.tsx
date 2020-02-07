import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { PageModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/common';
import { Route } from 'react-router-dom';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { PageLoader } from 'app/modules/common/page-loader';
import { Typography } from '@material-ui/core';

export const ManageUsersTeamsLayout = (props: ManageUsersTeamsLayoutModel) => (
  <React.Fragment>
    {props.loading && <PageLoader />}
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}

    <Grid item xs={12} lg={10}>
      {/* <BreadCrumbs {...props.breadcrumbs} /> */}
      <Typography
        variant="subtitle1"
        css={`
          color: #00000073;
          font-size: 14px;
        `}
      >
        Manage
      </Typography>
    </Grid>

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
