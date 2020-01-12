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
import {
  getBaseTableForProject,
  formatTableDataForProject,
  getBaseTableForGrantee,
  formatTableDataForGrantee,
} from 'app/modules/list-module/utils';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { useStoreState } from 'app/state/store/hooks';
import { useStoreActions } from 'app/state/store/hooks';
/* utils */
import get from 'lodash/get';
import find from 'lodash/find';

export const ListModule = () => {
  useTitle('M&E - Reports');
  const baseTableForProject: TableModuleModel = getBaseTableForProject();
  const baseTableForGrantee: TableModuleModel = getBaseTableForGrantee();

  const allProjectsData = useStoreState(actions => actions.allProjects.data);
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const allOrganisationsData = useStoreState(
    actions => actions.allOrganisations.data
  );
  const allOrganisationsAction = useStoreActions(
    actions => actions.allOrganisations.fetch
  );

  React.useEffect(() => {
    allProjectsAction({
      socketName: 'allProject',
      values: '',
    }).then(() => {
      if (allProjectsData) {
        baseTableForProject.data = formatTableDataForProject(
          get(allProjectsData, 'data')
        );
      }
    });
  }, [baseTableForGrantee]);

  React.useEffect(() => {
    allOrganisationsAction({
      socketName: 'allOrg',
      values: '',
    }).then(() => {
      if (allOrganisationsData) {
        baseTableForGrantee.data = formatTableDataForGrantee(
          get(allOrganisationsData, 'data')
        );
      }
    });
  }, [baseTableForProject]);

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
          <TableModule {...baseTableForProject} />
        </Route>
        <Route path="/list/reports">
          <TableModule {...ReportListMock} />
        </Route>
        <Route path="/list/grantees">
          <TableModule {...baseTableForGrantee} />
        </Route>
      </Grid>
    </React.Fragment>
  );
};
