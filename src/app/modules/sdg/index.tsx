import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ProjectListMock } from 'app/modules/list-module/mock';
import TableModule from 'app/components/datadisplay/Table';

import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import graph1 from 'app/assets/images/graph_sdg.png';
import { PriorityAreaNavMock } from 'app/modules/priority-area/mock';

export const SdgModule = () => {
  return (
    <React.Fragment>
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
        <Card
          css={`
            //height: 315px;
          `}
        >
          <CardHeader title="Insinger Fonds Priority area" />
          <CardContent
            css={`
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <img src={graph1} alt="graph" />
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
