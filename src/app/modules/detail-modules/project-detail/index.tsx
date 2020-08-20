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
    actions => actions.projectDetail.fetch
  );
  const projectDetailData = useStoreState(
    actions => actions.projectDetail.data
  );
  const projectDetailClearAction = useStoreActions(
    actions => actions.projectDetail.clear
  );
  const ReportsData = useStoreState(state => state.allReports.data);
  const allReportsAction = useStoreActions(actions => actions.allReports.fetch);
  const getPPVizData = useStoreActions(actions => actions.getPPVizData.fetch);
  const getSDGVizData = useStoreActions(actions => actions.getSDGVizData.fetch);
  const getGeoMapData = useStoreActions(actions => actions.getGeoMapData.fetch);
  const projectBudgetDataAction = useStoreActions(
    actions => actions.projectBudgetData.fetch
  );
  const ppVizData = useStoreState(state => state.getPPVizData.data);
  const SDGVizData = useStoreState(state => state.getSDGVizData.data);
  const geoMapData = useStoreState(state => state.getGeoMapData.data);
  const projectBudgetData = useStoreState(
    state => state.projectBudgetData.data
  );
  const projectBudgetClearAction = useStoreActions(
    actions => actions.projectBudgetData.clear
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

  const init = useCallback(
    () =>
      projectBudgetDataAction({
        socketName: 'getProjectBudgetData',
        values: {
          projectID: project_number,
        },
      }),
  );

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
    props.history.push(`/report/${project_number}/outcomes`);
  }

  function onBarChartLegendClick(legend: string) {
    barChartLegendClickFunc(legend, [...barChartLegends], setBarChartLegends);
  }

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
    />
  );
};

export const ProjectDetailModule = withRouter(ProjectDetailModuleF);
