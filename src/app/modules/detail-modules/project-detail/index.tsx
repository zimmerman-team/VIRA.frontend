/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { get, findIndex } from 'lodash';
import { useTitle } from 'react-use';
import { useParams, withRouter } from 'react-router-dom';
import { ProjectDetailLayout } from 'app/modules/detail-modules/project-detail/layout';
import {
  projectMock,
  ProjectModel,
} from 'app/modules/detail-modules/project-detail/model';

import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import {
  formatTableDataForReport,
  getBaseTableForReport,
} from 'app/modules/list-module/utils';

import { AppConfig } from 'app/data';

const ProjectDetailModuleF = (props: any) => {
  useTitle(`${AppConfig.appTitleLong} Project detail`);

  const projectNumber: any = useParams();
  const project_number: any = projectNumber.code;
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
  const ppVizData = useStoreState(state => state.getPPVizData.data);
  const SDGVizData = useStoreState(state => state.getSDGVizData.data);
  const geoMapData = useStoreState(state => state.getGeoMapData.data);

  React.useEffect(() => {
    projectDetailAction({
      socketName: 'allProject',
      values: { project_number },
    });
    return () => {
      // allProjectsClearAction();
      projectDetailClearAction();
    };
  }, [project_number]);

  function generateReport() {
    props.history.push(`/report/${project_number}/outcomes`);
  }

  React.useEffect(() => {
    projectDetailAction({
      socketName: 'allProject',
      values: { project_number },
    });
  }, []);

  React.useEffect(() => {
    if (projectDetailData) {
      const projectDetailRecord: any = get(projectDetailData, 'data', null);
      if (projectDetailRecord[0]) {
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
          org_type: '',
          street: 'Postbus',
          house_number: '193',
          additional_house_number: '',
          postcode: '3780 BD',
          place: 'Voorthuizen',
          country: 'Nederland',
          telephone: '',
          organisation_email: 'penningmeester@ngkdeontmoeting.nl',
          website: 'https://www.ngkdeontmoeting.nl',
          family_name: 'Reijersen',
          initial: 'Albert',
          insertion: '',
          title: '',
          email: 'penningmeester@ngkdeontmoeting.nl',
          login_email: 'penningmeester@ngkdeontmoeting.nl',
          sex: 'male',
          role: 'voorzitter kerkenraad',
          generateReport: () => {
            generateReport();
          },
        });
      }
    }
  }, [projectDetailData]);

  React.useEffect(() => {
    if (ReportsData) {
      setBaseTableForReport({
        ...getBaseTableForReport(get(ReportsData, 'data', [])),
        data: formatTableDataForReport(get(ReportsData, 'data', [])),
      });
    }
  }, [ReportsData]);

  React.useEffect(() => {
    if (projectDetailData) {
      const projectDetailRecord = get(projectDetailData, 'data', []);
      if (projectDetailRecord[0]) {
        allReportsAction({
          socketName: 'allReport',
          values: {
            projectID: projectDetailRecord[0]._id,
          },
        });
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
      }
    }
  }, [projectDetailData]);

  function onBarChartLegendClick(legend: string) {
    const prevBarChartLegends = [...barChartLegends];
    const legendIndex = findIndex(prevBarChartLegends, { label: legend });
    if (legendIndex !== -1) {
      prevBarChartLegends[legendIndex].selected = !prevBarChartLegends[
        legendIndex
      ].selected;
      setBarChartLegends(prevBarChartLegends);
    }
  }

  function onBubbleSelect(bubble: string) {
    setSelectedSDG(bubble);
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
      onBubbleSelect={onBubbleSelect}
      geoMapData={geoMapData}
      match={props.match}
    />
  );
};

export const ProjectDetailModule = withRouter(ProjectDetailModuleF);
