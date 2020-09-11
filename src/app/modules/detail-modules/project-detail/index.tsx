/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';
import get from 'lodash/get';
import { useTitle } from 'react-use';
import { useParams, withRouter } from 'react-router-dom';
import { ProjectDetailLayout } from 'app/modules/detail-modules/project-detail/layout';
import {
  projectMock,
  ProjectModel,
  PropsModel,
} from 'app/modules/detail-modules/project-detail/model';

import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import { getBaseTableForReport } from 'app/modules/list-module/utils/getBaseTableForReport';
import { formatTableDataForReport } from 'app/modules/list-module/utils/formatTableDataForReport';
import { barChartLegendClickFunc } from 'app/components/charts/BarCharts/utils/barChartLegendClickFunc';

import { AppConfig } from 'app/data';

const ProjectDetailModuleF = (props: PropsModel | null) => {
  useTitle(`${AppConfig.appTitleLong} Project detail`);

  const projectNumber: { code: string } = useParams();
  const project_number: string = projectNumber.code;
  const projectDetail: ProjectModel = projectMock;
  const [projectDetails, setprojectDetails] = useState(projectDetail);
  const [baseTableForReport, setBaseTableForReport] = React.useState(
    getBaseTableForReport([])
  );
  const [barChartLegends, setBarChartLegends] = React.useState([
    {
      label: 'charts.barchart.target',
      selected: true,
    },
    {
      label: 'charts.barchart.budget',
      selected: true,
    },
    {
      label: 'charts.barchart.commitment',
      selected: true,
    },
  ]);
  const [selectedSDG, setSelectedSDG] = React.useState('');

  const projectDetailAction = useStoreActions(
    (actions) => actions.projectDetail.fetch
  );
  const projectDetailData = useStoreState(
    (actions) => actions.projectDetail.data
  );
  const projectDetailClearAction = useStoreActions(
    (actions) => actions.projectDetail.clear
  );
  const ReportsData = useStoreState((state) => state.allReports.data);
  const allReportsAction = useStoreActions(
    (actions) => actions.allReports.fetch
  );
  const getPPVizData = useStoreActions((actions) => actions.getPPVizData.fetch);
  const getSDGVizData = useStoreActions(
    (actions) => actions.getSDGVizData.fetch
  );
  const getGeoMapData = useStoreActions(
    (actions) => actions.getGeoMapData.fetch
  );
  const projectBudgetDataAction = useStoreActions(
    (actions) => actions.projectBudgetData.fetch
  );

  const getPillarDataByBudget = useStoreActions(
    (actions) => actions.getPillarDataByBudget.fetch
  );
  const getPillarDataByDuration = useStoreActions(
    (actions) => actions.getPillarDataByDuration.fetch
  );
  const getPriorityAreaBarChartData = useStoreActions(
    (actions) => actions.getPriorityAreaBarChartData.fetch
  );
  const getTargetGroupBarChartData = useStoreActions(
    (actions) => actions.getTargetGroupBarChartData.fetch
  );
  const getOneMultiYearBarChartData = useStoreActions(
    (actions) => actions.getOneMultiYearBarChartData.fetch
  );

  const signedInUserRole = useStoreState((state) =>
    get(state.userDetails.data, 'role', 'Grantee user')
  );
  const signedInUserEmail = useStoreState((state) =>
    get(state.userDetails.data, 'email', '')
  );

  const pillarDataByBudget = useStoreState(
    (state) => state.getPillarDataByBudget.data
  );
  const pillarDataByDuration = useStoreState(
    (state) => state.getPillarDataByDuration.data
  );
  const priorityAreaBarChartData = useStoreState(
    (state) => state.getPriorityAreaBarChartData.data
  );
  const targetGroupBarChartData = useStoreState(
    (state) => state.getTargetGroupBarChartData.data
  );
  const oneMultiYearBarChartData = useStoreState(
    (state) => state.getOneMultiYearBarChartData.data
  );

  const ppVizData = useStoreState((state) => state.getPPVizData.data);
  const SDGVizData = useStoreState((state) => state.getSDGVizData.data);
  const geoMapData = useStoreState((state) => state.getGeoMapData.data);
  const projectBudgetData = useStoreState(
    (state) => state.projectBudgetData.data
  );
  const projectBudgetClearAction = useStoreActions(
    (actions) => actions.projectBudgetData.clear
  );

  const loadReports = useCallback((projectID: string) => {
    allReportsAction({
      socketName: 'allReport',
      values: {
        projectID,
      },
    }).then((res: any) => {
      if (res) {
        setBaseTableForReport({
          ...getBaseTableForReport(get(res, 'data', [])),
          data: formatTableDataForReport(get(res, 'data', [])),
        });
      }
    });
  }, []);

  const init = useCallback(() => {
    projectBudgetDataAction({
      socketName: 'getProjectBudgetData',
      values: {
        projectID: project_number,
      },
    });
    projectDetailAction({
      socketName: 'allProject',
      values: { project_number },
    }).then((res: any) => {
      const projectDetailRecord: any = get(res, 'data', null);
      if (projectDetailRecord && projectDetailRecord.length === 1) {
        loadReports(projectDetailRecord[0]._id);
        getPPVizData({
          socketName: 'getPolicyPriorityBarChart',
          values: {
            projectID: projectDetailRecord[0]._id,
          },
        });
        getSDGVizData({
          socketName: 'getSDGBubbleChart',
          values: {
            projectID: projectDetailRecord[0]._id,
          },
        });
        getGeoMapData({
          socketName: 'getGeoMapData',
          values: {
            projectID: projectDetailRecord[0]._id,
          },
        });
        getPillarDataByBudget({
          socketName: 'getPillarDataByBudget',
          values: {
            userRole: signedInUserRole,
            userEmail: signedInUserEmail,
            projectID: projectDetailRecord[0]._id,
          },
        });
        getPillarDataByDuration({
          socketName: 'getPillarDataByDuration',
          values: {
            userRole: signedInUserRole,
            userEmail: signedInUserEmail,
          },
        });
        getPriorityAreaBarChartData({
          socketName: 'getPriorityAreaBarChartData',
          values: {
            breakdownBy: 'none',
            userRole: signedInUserRole,
            userEmail: signedInUserEmail,
          },
        });
        getTargetGroupBarChartData({
          socketName: 'getTargetGroupBarChartData',
          values: {
            breakdownBy: 'none',
            userRole: signedInUserRole,
            userEmail: signedInUserEmail,
          },
        });
        getOneMultiYearBarChartData({
          socketName: 'getOneMultiYearBarChartData',
          values: {
            breakdownBy: 'none',
            userRole: signedInUserRole,
            userEmail: signedInUserEmail,
          },
        });

        setprojectDetails({
          project_id: projectDetailRecord[0].project_number,
          project: projectDetailRecord[0].project_name,
          project_description: projectDetailRecord[0].project_description,
          category: get(projectDetailRecord[0].category, 'name', ''),
          duration: projectDetailRecord[0].duration,
          start_date: projectDetailRecord[0].start_date,
          end_date: projectDetailRecord[0].end_date,
          total_amount: projectDetailRecord[0].total_amount,
          total_insinger_contribution: projectDetailRecord[0].allocated_amount,
          decision_date: projectDetailRecord[0].decision_date,
          decision: projectDetailRecord[0].decision,
          allocated_amount: projectDetailRecord[0].allocated_amount,
          released_amount: projectDetailRecord[0].released_amount,
          paid_amount: projectDetailRecord[0].paid_amount,
          organisation: projectDetailRecord[0].organisation.organisation_name,
          organisation_link: `/grantee/${projectDetailRecord[0].organisation._id}/detail`,
          place: '',
          country: '',
          responsible_person_email: get(
            projectDetailRecord[0],
            'person.email',
            ''
          ),
          generateReport: () => {
            generateReport();
          },
        });
      }
    });
  }, []);

  React.useEffect(() => {
    init();
    return () => {
      // allProjectsClearAction();
      projectBudgetClearAction();
      projectDetailClearAction();
    };
  }, [project_number]);

  function generateReport() {
    // todo: refactor routing
    // @ts-ignore
    props.history.push(`/report/${project_number}/project-info`);
  }

  function onBarChartLegendClick(legend: string) {
    barChartLegendClickFunc(legend, [...barChartLegends], setBarChartLegends);
  }

  console.log('=========================================================');
  console.log('pillarDataByBudget', pillarDataByBudget);
  console.log('pillarDataByDuration', pillarDataByDuration);
  console.log('priorityAreaBarChartData', priorityAreaBarChartData);
  console.log('targetGroupBarChartData', targetGroupBarChartData);
  console.log('oneMultiYearBarChartData', oneMultiYearBarChartData);
  console.log('=========================================================');

  return (
    <ProjectDetailLayout
      projectDetail={projectDetails}
      reportTable={baseTableForReport}
      ppVizData={ppVizData}
      barChartLegends={barChartLegends}
      onBarChartLegendClick={onBarChartLegendClick}
      SDGVizData={SDGVizData}
      selectedSDG={selectedSDG}
      onBubbleSelect={setSelectedSDG}
      geoMapData={geoMapData}
      remainingBudget={projectBudgetData}
      // @ts-ignore
      match={props.match}
      pillarData={pillarDataByBudget}
    />
  );
};

export const ProjectDetailModule = withRouter(ProjectDetailModuleF);
