import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import get from 'lodash/get';
import React from 'react';
import { useTitle } from 'react-use';

import graph1 from 'app/assets/images/graph_dashboard.png';
import graph2 from 'app/assets/images/graph_map.png';
import TableModule from 'app/components/datadisplay/Table';
import { projectsMock } from 'app/modules/landing/common/projectsMock';
import { StatItem } from 'app/modules/landing/common/StatItem';
import { StatItemDivider } from 'app/modules/landing/common/StatItemDivider';
import {
  formatTableDataForProject,
  getBaseTableForProject,
} from 'app/modules/list-module/utils';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function LandingLayout() {
  useTitle('M&E - Dashboard');
  const [baseTableForProject, setBaseTableForProject] = React.useState(
    getBaseTableForProject()
  );
  const allProjectsData = useStoreState(state => state.allProjects.data);
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );

  // Load the projects on componentDidMount
  React.useEffect(() => {
    allProjectsAction({
      socketName: 'allProject',
      values: '',
    });
  }, []);

  // Format the projects on componentDidUpdate when allProjectsData change
  React.useEffect(() => {
    setBaseTableForProject({
      ...baseTableForProject,
      data: formatTableDataForProject(get(allProjectsData, 'data', [])),
    });
  }, [allProjectsData]);

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
        <TableModule {...baseTableForProject} />
      </Grid>
    </>
  );
}

export default LandingLayout;
