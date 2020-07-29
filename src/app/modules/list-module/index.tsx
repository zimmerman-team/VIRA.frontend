// @ts-nocheck
/* eslint-disable default-case */
import React from 'react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import TableModule from 'app/components/datadisplay/Table';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { useParams, useHistory } from 'react-router-dom';
/* utils */
import { getBaseTableForReport } from 'app/modules/list-module/utils/getBaseTableForReport';
import { getBaseTableForGrantee } from 'app/modules/list-module/utils/getBaseTableForGrantee';
import { getBaseTableForProject } from 'app/modules/list-module/utils/getBaseTableForProject';
import { formatTableDataForReport } from 'app/modules/list-module/utils/formatTableDataForReport';
import { formatTableDataForGrantee } from 'app/modules/list-module/utils/formatTableDataForGrantee';
import { formatTableDataForProject } from 'app/modules/list-module/utils/formatTableDataForProject';
import get from 'lodash/get';
import { TabStyle, a11yProps, TabPanel } from './common/TabPanelProps';
import { PageLoader } from '../common/page-loader';
import { SDGFilter } from './common/SDGFilter';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import {
  getGranteesBySDG,
  getProjectsBySDG,
  getReportsBySDG,
} from 'app/modules/list-module/common/TableDataBySDG';

type ListModuleParams = {
  tabNav: TabNavigatorParams;
  hideProjects?: boolean;
  hideGrantees?: boolean;
  hideReports?: boolean;
  focus?: number;
  loadData?: boolean;
  listPage?: boolean;
  selectedSDG?: string;
  dateFilter: dateFilterType;
};

type dateFilterType = {
  start: MaterialUiPickersDate | null;
  end: MaterialUiPickersDate | null;
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

  // get datasets by selected SDG
  let sdgReportsData;
  let sdgProjectData;
  let sdgOrgranisationData;

  if (props.selectedSDG !== '' && props.selectedSDG !== undefined) {
    sdgReportsData = getReportsBySDG(props.selectedSDG, allReportsData);
    sdgProjectData = getProjectsBySDG(allProjectsData, sdgReportsData);
    sdgOrgranisationData = getGranteesBySDG(
      allOrganisationsData,
      sdgProjectData
    );
  }

  const reduxLng = useStoreState(state => state.syncVariables.lng);
  const loading = useStoreState(
    state =>
      state.allProjects.loading ||
      state.allOrganisations.loading ||
      state.allReports.loading
  );

  const signedInUserRole = useStoreState(state =>
    get(state.userDetails.data, 'role', 'Grantee user')
  );
  const signedInUserEmail = useStoreState(state =>
    get(state.userDetails.data, 'email', '')
  );

  const isInitialMount = React.useRef(true);

  const dateFilterStart = get(props.dateFilter, 'start._d', undefined);
  const dateFilterEnd = get(props.dateFilter, 'end._d', undefined);

  const doLoadData = React.useCallback(() => {
    allProjectsAction({
      socketName: 'allProject',
      values: {
        userRole: signedInUserRole,
        userEmail: signedInUserEmail,
        startDate: dateFilterStart,
        endDate: dateFilterEnd,
      },
    }).then((projectsRes: any) => {
      setBaseTableForProject({
        ...baseTableForProject,
        data: formatTableDataForProject(get(projectsRes, 'data', [])),
      });
    });
    allOrganisationsAction({
      socketName: 'allOrg',
      values: { userRole: signedInUserRole, userEmail: signedInUserEmail },
    }).then((organisationsRes: any) => {
      setBaseTableForGrantee({
        ...baseTableForGrantee,
        data: formatTableDataForGrantee(get(organisationsRes, 'data', [])),
      });
    });
    allReportsAction({
      socketName: 'allReport',
      values: {
        userRole: signedInUserRole,
        userEmail: signedInUserEmail,
        startDate: dateFilterStart,
        endDate: dateFilterEnd,
      },
    }).then((reportsRes: any) => {
      setBaseTableForReport({
        ...getBaseTableForReport(get(reportsRes, 'data', [])),
        data: formatTableDataForReport(get(reportsRes, 'data', [])),
      });
    });
  }, [dateFilterEnd, dateFilterStart, signedInUserRole, signedInUserEmail]);

  // Load the projects and orgs on componentDidMount
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (props.loadData) {
        doLoadData();
      }
    }
  }, []);

  React.useEffect(() => {
    if (props.loadData) {
      doLoadData();
    }
  }, [dateFilterEnd, dateFilterStart, signedInUserRole, signedInUserEmail]);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (parseInt(id, 10) < 3) {
      setValue(parseInt(id, 10));
    }
  }, [id]);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
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
    }
  }, [reduxLng]);

  React.useEffect(() => {
    if (!props.loadData) {
      setBaseTableForProject({
        ...baseTableForProject,
        data: formatTableDataForProject(get(allProjectsData, 'data', [])),
      });
      setBaseTableForGrantee({
        ...baseTableForGrantee,
        data: formatTableDataForGrantee(get(allOrganisationsData, 'data', [])),
      });
      setBaseTableForReport({
        ...getBaseTableForReport(get(allReportsData, 'data', [])),
        data: formatTableDataForReport(get(allReportsData, 'data', [])),
      });
    }
  }, [allProjectsData, allOrganisationsData, allReportsData]);

  const [value, setValue] = React.useState(
    props.focus || parseInt(id, 10) ? props.focus || parseInt(id, 10) : 0
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    if (props.listPage) {
      history.push(`/list/${newValue}`);
    }
  };

  // console.log('render lists');

  return (
    <React.Fragment>
      {/* loader */}
      {loading && <PageLoader />}

      {/* SDG filter module */}
      {!props.listPage && (
        <SDGFilter
          selectedSDG={props.selectedSDG}
          setBaseTableForReport={setBaseTableForReport}
          setBaseTableForGrantee={setBaseTableForGrantee}
          setBaseTableForProject={setBaseTableForProject}
        />
      )}

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
          {/*{console.log('render project list')}*/}
          <TableModule {...baseTableForProject} />
        </TabPanel>

        <TabPanel data-cy="grantees-panel" value={value} index={1}>
          {/* grantees table */}
          {/*{console.log('render grantees list')}*/}
          <TableModule {...baseTableForGrantee} />
        </TabPanel>

        <TabPanel data-cy="reports-panel" value={value} index={2}>
          {/* reports table */}
          {/* {console.log('render reports list')} */}
          <TableModule {...baseTableForReport} />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
};
