/* eslint-disable default-case */
import { Grid, Tabs, Tab } from '@material-ui/core';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import TableModule from 'app/components/datadisplay/Table';
import {
  formatTableDataForGrantee,
  formatTableDataForProject,
  formatTableDataForReport,
  getBaseTableForGrantee,
  getBaseTableForProject,
  getBaseTableForReport,
} from 'app/modules/list-module/utils';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
/* utils */
import get from 'lodash/get';
import React from 'react';
import { css } from 'styled-components/macro';
import {
  useStyles,
  TabStyle,
  a11yProps,
  TabPanel,
} from './common/TabPanelProps';

import { useEffectOnce } from 'react-use';

import { useRouteMatch } from 'react-router-dom';

type ListModuleParams = {
  tabNav: TabNavigatorParams;
  hideProjects?: boolean;
  hideGrantees?: boolean;
  hideReports?: boolean;
  focus?: number;
};

export const ListModule = (props: ListModuleParams) => {
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

  const classes = useStyles();
  const [value, setValue] = React.useState(props.focus ? props.focus : 0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // const currentPage = useRouteMatch('/list/:id').params.id;

  // const curPage = (currentPage && currentPage) || 'projects';

  // useEffectOnce(() => {
  //   console.log(currentPage);
  //   switch (currentPage) {
  //     case 'projects':
  //       setValue(0);
  //       break;
  //     case 'grantees':
  //       setValue(1);
  //       break;
  //     case 'reports':
  //       setValue(2);
  //       break;
  //     default:
  //       setValue(0);
  //   }
  // });

  const TabData = props.tabNav && props.tabNav.items;

  return (
    <React.Fragment>
      {/* tab navigation */}
      <Grid container item lg={12} justify="flex-end">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {!props.hideProjects && (
            <Tab css={TabStyle} label="Projects" {...a11yProps(0)} />
          )}

          {!props.hideGrantees && (
            <Tab css={TabStyle} label="Grantees" {...a11yProps(1)} />
          )}

          {!props.hideReports && (
            <Tab css={TabStyle} label="Reports" {...a11yProps(2)} />
          )}
        </Tabs>
      </Grid>

      {/* tab content */}
      <Grid item lg={12}>
        <TabPanel value={value} index={0}>
          {/* projects table */}
          <TableModule {...baseTableForProject} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* grantees table */}
          <TableModule {...baseTableForGrantee} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          {/* reports table */}
          <TableModule {...baseTableForReport} cssVariant="reportsVariant" />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
};
