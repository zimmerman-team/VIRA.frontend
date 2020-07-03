// @ts-nocheck
/* eslint-disable default-case */
import React from 'react';
import { useEffectOnce } from 'react-use';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import TableModule from 'app/components/datadisplay/Table';
import { getBaseTableForReport } from 'app/modules/list-module/utils/getBaseTableForReport';
import { getBaseTableForGrantee } from 'app/modules/list-module/utils/getBaseTableForGrantee';
import { getBaseTableForProject } from 'app/modules/list-module/utils/getBaseTableForProject';
import { formatTableDataForReport } from 'app/modules/list-module/utils/formatTableDataForReport';
import { formatTableDataForGrantee } from 'app/modules/list-module/utils/formatTableDataForGrantee';
import { formatTableDataForProject } from 'app/modules/list-module/utils/formatTableDataForProject';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { useParams, useHistory } from 'react-router-dom';
/* utils */
import get from 'lodash/get';
import { TabStyle, a11yProps, TabPanel } from './common/TabPanelProps';
import { PageLoader } from '../common/page-loader';
import { getReportsBySDG } from 'app/modules/list-module/common/TableDataBySDG';
import { ReportsOverviewTable } from 'app/modules/list-module/common/report-table';

type ListModuleParams = {
  tabNav: TabNavigatorParams;
  hideProjects?: boolean;
  hideGrantees?: boolean;
  hideReports?: boolean;
  focus?: number;
  loadData?: boolean;
  listPage?: boolean;
  selectedSDG?: string;
};

export const ListModule = (props: ListModuleParams) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const history = useHistory();
  // set state
  const [baseTableForProject, setBaseTableForProject] = React.useState(
    getBaseTableForProject()
  );
  const [baseTableForGrantee, setBaseTableForGrantee] = React.useState(
    getBaseTableForGrantee(t)
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

  let sdgReportsData;
  let sdgProjectData;
  let sdgOrgranisationData;

  if (props.selectedSDG !== '') {
    sdgReportsData = getReportsBySDG(props.selectedSDG, allReportsData);
    // sdgProjectData = getProjectsBySDG(props.selectedSDG, allProjectsData);
    // sdgOrgranisationData = getProjectsBySDG(props.selectedSDG, allProjectsData);
  }
  const reduxLng = useStoreState(state => state.syncVariables.lng);
  const loading = useStoreState(
    state =>
      state.allProjects.loading ||
      state.allOrganisations.loading ||
      state.allReports.loading
  );

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
  if (props.selectedSDG === '') {
    React.useEffect(() => {
      setBaseTableForProject({
        ...baseTableForProject,
        data: formatTableDataForProject(get(allProjectsData, 'data', [])),
      });
    }, [allProjectsData]);
  } else {
    React.useEffect(() => {
      setBaseTableForProject({
        ...baseTableForProject,
        data: formatTableDataForProject(
          get(filterBySDG(allProjectsData), 'data', [])
        ),
      });
    }, [props.selectedSDG]);
  }

  // Format the projects on componentDidUpdate when allOrganisationsData change
  React.useEffect(() => {
    setBaseTableForGrantee({
      ...baseTableForGrantee,
      data: formatTableDataForGrantee(get(allOrganisationsData, 'data', [])),
    });
  }, [allOrganisationsData]);

  // Format the reports on componentDidUpdate when allReportsData change
  if (props.selectedSDG === '') {
    React.useEffect(() => {
      setBaseTableForReport({
        ...getBaseTableForReport(get(allReportsData, 'data', [])),
        data: formatTableDataForReport(get(allReportsData, 'data', [])),
      });
    }, [allReportsData]);
  } else {
    React.useEffect(() => {
      setBaseTableForReport({
        ...getBaseTableForReport(get(sdgReportsData, 'data', [])),
        data: formatTableDataForReport(get(sdgReportsData, 'data', [])),
      });
    }, [props.selectedSDG]);
  }
  console.log('allReportsData', allReportsData);

  React.useEffect(() => {
    if (parseInt(id, 10) < 3) {
      setValue(parseInt(id, 10));
    }
  }, [id]);

  React.useEffect(() => {
    setBaseTableForProject({
      ...baseTableForProject,
      ...getBaseTableForProject(),
      data: baseTableForProject.data,
    });
    setBaseTableForGrantee({
      ...baseTableForGrantee,
      ...getBaseTableForGrantee(),
      data: baseTableForGrantee.data,
    });
    setBaseTableForReport({
      ...baseTableForReport,
      ...getBaseTableForReport(),
      data: baseTableForReport.data,
    });
  }, [reduxLng]);

  const [value, setValue] = React.useState(
    props.focus || parseInt(id, 10) ? props.focus || parseInt(id, 10) : 0
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    if (props.listPage) {
      history.push(`/list/${newValue}`);
    }
  };

  return (
    <React.Fragment>
      {/* loader */}
      {loading && <PageLoader />}

      {/* tab navigation */}
      <Grid item xs={12} container justify="flex-end">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          data-cy="list-tabs-container"
          css={`
            width: 100%;
            [class*='MuiTabs-flexContainer'] {
              justify-content: flex-end;
            }
          `}
        >
          {!props.hideProjects && (
            <Tab
              data-cy="projects-tab"
              value={0}
              css={TabStyle}
              label={t('Projects')}
              {...a11yProps(0)}
            />
          )}

          {!props.hideGrantees && (
            <Tab
              data-cy="grantees-tab"
              value={1}
              css={TabStyle}
              label={t('Grantees')}
              {...a11yProps(1)}
            />
          )}

          {!props.hideReports && (
            <Tab
              data-cy="reports-tab"
              value={2}
              css={TabStyle}
              label={t('Reports')}
              {...a11yProps(2)}
            />
          )}
        </Tabs>
      </Grid>

      {/* tab content */}
      <Grid item xs={12}>
        <TabPanel data-cy="projects-panel" value={value} index={0}>
          {/* projects table */}
          <TableModule {...baseTableForProject} />
        </TabPanel>

        <TabPanel data-cy="grantees-panel" value={value} index={1}>
          {/* grantees table */}
          <TableModule {...baseTableForGrantee} />
        </TabPanel>

        <TabPanel data-cy="reports-panel" value={value} index={2}>
          {/* reports table */}
          {/*<TableModule {...baseTableForReport} />*/}
          <ReportsOverviewTable data={baseTableForReport.data} />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
};
