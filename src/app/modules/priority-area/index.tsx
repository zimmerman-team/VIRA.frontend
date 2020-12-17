import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import graph1 from 'app/assets/images/graph_if.png';
import TableModule from 'app/components/datadisplay/Table';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';

import { PriorityAreaNavMock } from 'app/modules/priority-area/mock';
import React from 'react';
import 'styled-components/macro';
import { ProjectListMock } from 'app/mock/lists/ProjectListMock';

export const PriorityAreaModule = () => {
  return (
    <React.Fragment>
      <Grid item lg={6} />
      {/* using this element as an helper */}
      <Grid item lg={9} />

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Grid item lg={3}>
        <TabNavigator {...PriorityAreaNavMock} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* outcome charts */}
      <Grid item xs={12} lg={12}>
        <Card>
          <CardHeader title="Insinger Fonds Priority area" />
          <CardContent
            css={`
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <img src={graph1} alt="graph 1" width="100%" height="auto" />
          </CardContent>
        </Card>
      </Grid>

      {/* -------------------------------------------------------------- */}
      {/* projects */}
      <Grid item sm={12} lg={12}>
        <TableModule {...ProjectListMock} />
      </Grid>
    </React.Fragment>
  );
};
