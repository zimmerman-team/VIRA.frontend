// @ts-nocheck
/* eslint-disable default-case */
import React from 'react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
import { useParams } from 'react-router-dom';
/* utils */
import get from 'lodash/get';
import 'styled-components/macro';
import {
  useStyles,
  TabStyle,
  a11yProps,
  TabPanel,
} from './common/TabPanelProps';

type ListModuleParams = {
  tabNav: TabNavigatorParams;
  hideProjects?: boolean;
  hideGrantees?: boolean;
  hideReports?: boolean;
  focus?: number;
  loadData?: boolean;
};

export const ListModule = (props: ListModuleParams) => {
  const { id } = useParams();
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
    if (props.loadData) {
      allProjectsAction({
        socketName: 'allProject',
        values: '',
      });
      allOrganisationsAction({
        socketName: 'allOrg',
        values: '',
      });
      allReportsAction({ socketName: 'allReport', values: '' });
    }
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

  React.useEffect(() => {
    if (parseInt(id, 10) < 3) {
      setValue(parseInt(id, 10));
    }
  }, [id]);

  const classes = useStyles();
  const [value, setValue] = React.useState(
    props.focus || parseInt(id, 10) ? props.focus || parseInt(id, 10) : 0
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const TabData = props.tabNav && props.tabNav.items;
  const { t, i18n } = useTranslation();

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
            <Tab
              value={0}
              css={TabStyle}
              label={t('Projects')}
              {...a11yProps(0)}
            />
          )}

          {!props.hideGrantees && (
            <Tab
              value={1}
              css={TabStyle}
              label={t('Grantees')}
              {...a11yProps(1)}
            />
          )}

          {!props.hideReports && (
            <Tab
              value={2}
              css={TabStyle}
              label={t('Reports')}
              {...a11yProps(2)}
            />
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
