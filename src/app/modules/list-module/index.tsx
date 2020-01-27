import Grid from '@material-ui/core/Grid';
import TableModule from 'app/components/datadisplay/Table';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { ReportListMock } from 'app/modules/list-module/mock';
import {
  formatTableDataForGrantee,
  formatTableDataForProject,
  getBaseTableForGrantee,
  getBaseTableForProject,
} from 'app/modules/list-module/utils';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
/* utils */
import get from 'lodash/get';
import React from 'react';
import { Route } from 'react-router-dom';
import { useTitle } from 'react-use';
import 'styled-components/macro';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

type Props = {
  tabNav: TabNavigatorParams;
};

export const ListModule = (props: Props) => {
  // set window title
  useTitle('M&E - Reports');

  // set state
  const [baseTableForProject, setBaseTableForProject] = React.useState(
    getBaseTableForProject()
  );
  const [baseTableForGrantee, setBaseTableForGrantee] = React.useState(
    getBaseTableForGrantee()
  );

  // actions
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const allOrganisationsAction = useStoreActions(
    actions => actions.allOrganisations.fetch
  );

  // get state
  const allProjectsData = useStoreState(state => state.allProjects.data);
  const allOrganisationsData = useStoreState(
    state => state.allOrganisations.data
  );

  // Load the projects and orgs on componentDidMount
  React.useEffect(() => {
    allProjectsAction({
      socketName: 'allProject',
      values: '',
    });
    allOrganisationsAction({
      socketName: 'allOrg',
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

  // Format the projects on componentDidUpdate when allOrganisationsData change
  React.useEffect(() => {
    setBaseTableForGrantee({
      ...baseTableForGrantee,
      data: formatTableDataForGrantee(get(allOrganisationsData, 'data', [])),
    });
  }, [allOrganisationsData]);

  return (
    <React.Fragment>
      {/* using this element as an helper */}
      <Grid item lg={9} />

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Grid item lg={3}>
        <TabNavigator {...props.tabNav} />
      </Grid>

      {/* ------------------------------------------------------------------ */}
      {/* lists */}
      {/* ---------------------------------------------------------------------*/}
      <Grid item xs={12} lg={12}>
        <Route path={props.tabNav.items[0].path}>
          <TableModule {...baseTableForProject} />
        </Route>
        <Route path={props.tabNav.items[1].path}>
          <TableModule {...baseTableForGrantee} />
        </Route>
        <Route path={props.tabNav.items[2].path}>
          <TableModule {...ReportListMock} />
        </Route>
      </Grid>
    </React.Fragment>
  );
};
