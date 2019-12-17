import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import { projectsMock } from 'app/modules/landing/common/projectsMock';
import { StatItemDivider } from 'app/modules/landing/common/StatItemDivider';
import { StatItem } from 'app/modules/landing/common/StatItem';
import { CardFiller } from 'app/modules/common/components/cards/common/CardFiller';
import TableModule from 'app/components/datadisplay/Table';

import graph1 from 'app/assets/images/graph_dashboard.png';
import graph2 from 'app/assets/images/graph_map.png';
import { ProjectListMock } from 'app/modules/list-module/mock';

const LandingLayout = () => {
  return (
    <>
      {/* -------------------------------------------------------------- */}
      {/* stat items */}

      <Grid item sm={12} lg={12}>
        <Card>
          <CardContent>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              {projectsMock.map(project => (
                <>
                  <StatItem amount={project.amount} type={project.type} />
                  <StatItemDivider />
                </>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* -------------------------------------------------------------- */}
      {/* priority area */}
      <Grid item sm={12} lg={7}>
        <Card>
          <CardHeader title="Priority Area" />
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
      {/* project */}
      <Grid item sm={12} lg={5}>
        <Card>
          <CardHeader title="Project (Netherlands)" />
          <CardContent
            css={`
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <img src={graph2} alt="graph 2" width="100%" height="auto" />
          </CardContent>
        </Card>
      </Grid>

      {/* -------------------------------------------------------------- */}
      {/* projects */}
      <Grid item sm={12} lg={12}>
        <TableModule {...ProjectListMock} />
      </Grid>
    </>
  );
};

export default LandingLayout;
