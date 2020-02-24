import Grid from '@material-ui/core/Grid';
import TableModule from 'app/components/datadisplay/Table';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
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
import 'styled-components/macro';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import { getBaseTableForReport } from 'app/modules/list-module/utils';
import { formatTableDataForReport } from 'app/modules/list-module/utils';

type Props = {
  tabNav: TabNavigatorParams;
};

export const ListModule = (props: Props) => {
  // set state
  const [baseTableForProject, setBaseTableForProject] = React.useState(
    getBaseTableForProject()
  );
  const [baseTableForGrantee, setBaseTableForGrantee] = React.useState(
    getBaseTableForGrantee()
  );
  const [baseTableForReport, setBaseTableForReport] = React.useState(
    getBaseTableForReport([])
  );

  // actions
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const allOrganisationsAction = useStoreActions(
    actions => actions.allOrganisations.fetch
  );
  const allReportsAction = useStoreActions(actions => actions.allReports.fetch);

  // get state
  const allProjectsData = useStoreState(state => state.allProjects.data);
  const allOrganisationsData = useStoreState(
    state => state.allOrganisations.data
  );
  const allReportsData = useStoreState(state => state.allReports.data);

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
    allReportsAction({ socketName: 'allReport', values: '' });
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

  // Format the reports on componentDidUpdate when allReportsData change
  React.useEffect(() => {
    setBaseTableForReport({
      ...getBaseTableForReport(get(allReportsData, 'data', [])),
      data: formatTableDataForReport(get(allReportsData, 'data', [])),
    });
  }, [allReportsData]);

  return (
    <React.Fragment>
      {/* using this element as an helper */}
      <Grid item xs={3} sm={9} />

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Grid item xs={9} sm={3}>
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
          <TableModule {...baseTableForReport} cssVariant={'reportsVariant'} />
        </Route>
      </Grid>
    </React.Fragment>
  );
};
