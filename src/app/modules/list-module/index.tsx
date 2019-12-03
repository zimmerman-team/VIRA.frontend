import 'styled-components/macro';
import React from 'react';
import { useTitle } from 'react-use';
import Grid from '@material-ui/core/Grid';
import TableModule from 'app/components/datadisplay/Table';
import { Route } from 'react-router-dom';
import { ProjectListMock } from 'app/modules/list-module/mock';
import { ReportListMock } from 'app/modules/list-module/mock';
import { GranteeListMock } from 'app/modules/list-module/mock';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { TabNavMock } from 'app/modules/list-module/mock';

export const ListModule = () => {
  useTitle('M&E - Reports');
  return (
    <React.Fragment>
      {/* using this element as an helper */}
      <Grid item lg={9} />

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Grid item lg={3}>
        <TabNavigator {...TabNavMock} />
      </Grid>

      {/* ------------------------------------------------------------------ */}
      {/* lists */}
      {/* ---------------------------------------------------------------------*/}
      <Grid item xs={12} lg={12}>
        <Route path="/list/projects">
          <TableModule {...ProjectListMock} />
        </Route>
        <Route path="/list/reports">
          <TableModule {...ReportListMock} />
        </Route>
        <Route path="/list/grantees">
          <TableModule {...GranteeListMock} />
        </Route>
      </Grid>
    </React.Fragment>
  );
};