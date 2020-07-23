// @ts-nocheck
import React, { useState } from 'react';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { GranteeDetailLayout } from 'app/modules/detail-modules/grantee-detail/layout';
import {
  GranteeTitleMock,
  GranteeDescriptionMock,
} from 'app/modules/detail-modules/grantee-detail/mock';
import { TitleParams } from 'app/modules/common/components/TitleParams';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { barChartLegendClickFunc } from 'app/components/charts/BarCharts/utils/barChartLegendClickFunc';

import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  mockData as mockDataBreadcrumbs,
  previousLocations,
} from 'app/components/navigation/Breadcrumbs/mock';
import get from 'lodash/get';

import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';
import { getBaseTableForProject } from 'app/modules/list-module/utils/getBaseTableForProject';
import { formatTableDataForProject } from 'app/modules/list-module/utils/formatTableDataForProject';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import findIndex from 'lodash/findIndex';
import { AppConfig } from 'app/data';

export interface ProjectModel {
  _id: string;
  project_number: string;
  project_name: string;
  project_description: string;
  duration: string;
  start_date: string;
  end_date: string;
  total_amount?: number;
  decision_date: string;
  decision: string;
  allocated_amount?: number;
  released_amount?: any;
  paid_amount?: number;
  organisation: Organisation;
  category: Category;
  responsible_person: string;
  __v: number;
}

export interface Organisation {
  _id: string;
  organisation_name: string;
}

export interface Category {
  _id: string;
  name: string;
}

export function GranteeDetailModule(props: any) {
  // set window title
  useTitle(`${AppConfig.appTitleLong} Grantee detail`);

  const params: { code: string } = useParams();
  const granteeID: string = params.code;
  const granteeTitleMock: TitleParams = GranteeTitleMock;
  const breadcrumbsMock: BreadcrumbModel = mockDataBreadcrumbs;
  const descriptionMock: DescriptionParams = GranteeDescriptionMock;
  const baseTableForProject: TableModuleModel = getBaseTableForProject();

  const [granteeTitle, setGranteeTitle] = useState(granteeTitleMock);
  const [breadCrumb, setBreadCrumb] = useState(breadcrumbsMock);
  const [description, setDescription] = useState(descriptionMock);
  const [contact, setContact] = useState({
    title: '',
    email: '',
    phonenumber: '',
    address: '',
  });
  const [projectTableData, setProjectTableData] = useState([[]]);

  const granteeDetailAction = useStoreActions(
    actions => actions.orgDetail.fetch
  );
  const granteeDetailClearAction = useStoreActions(
    actions => actions.orgDetail.clear
  );
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const allReportsAction = useStoreActions(actions => actions.allReports.fetch);
  const granteeDetailData = useStoreState(state => state.orgDetail.data);
  const ProjectsData = useStoreState(state => state.allProjects.data);

  const loading = useStoreState(
    state =>
      state.orgDetail.loading ||
      state.allProjects.loading ||
      state.allReports.loading ||
      state.getPPVizData.loading ||
      state.getSDGVizData.loading ||
      state.getGeoMapData.loading
  );
  const [selectedSDG, setSelectedSDG] = React.useState('');
  const getPPVizData = useStoreActions(actions => actions.getPPVizData.fetch);
  const getSDGVizData = useStoreActions(actions => actions.getSDGVizData.fetch);
  const getGeoMapData = useStoreActions(actions => actions.getGeoMapData.fetch);
  const ppVizData = useStoreState(state => state.getPPVizData.data);
  const SDGVizData = useStoreState(state => state.getSDGVizData.data);
  const geoMapData = useStoreState(state => state.getGeoMapData.data);

  React.useEffect(() => {
    granteeDetailAction({
      socketName: 'allOrg',
      values: { id: granteeID },
    });
    return () => {
      // allProjectsClearAction();
      granteeDetailClearAction();
    };
  }, []);

  React.useEffect(() => {
    granteeDetailAction({
      socketName: 'allOrg',
      values: { id: granteeID },
    });
  }, [granteeID]);

  React.useEffect(() => {
    if (granteeDetailData) {
      allProjectsAction({
        socketName: 'allProject',
        values: {
          organisation_name: get(granteeDetailData, 'data').organisation_name,
        },
      });
      setGranteeTitle({
        title: get(granteeDetailData, 'data').organisation_name,
      });
      setBreadCrumb({
        currentLocation: get(granteeDetailData, 'data').organisation_name,
        previousLocations,
      });
      setDescription({
        project_description: get(granteeDetailData, 'data').organisation_name,
      });
      setContact({
        title: 'Contacts',
        email: get(granteeDetailData, 'data.email', ''),
        phonenumber: get(granteeDetailData, 'data.telephone', ''),
        address: `${get(granteeDetailData, 'data.place', '')}, ${get(
          granteeDetailData,
          'data.postcode',
          ''
        )}, ${get(granteeDetailData, 'data.country', '')}`,
      });
    }
  }, [granteeDetailData]);

  React.useEffect(() => {
    if (ProjectsData) {
      const projects = get(ProjectsData, 'data');
      setProjectTableData(formatTableDataForProject(projects));
      getPPVizData({
        socketName: 'getPolicyPriorityBarChart',
        values: {
          projectID: projects.map((project: ProjectModel) => project._id),
        },
      });
      getSDGVizData({
        socketName: 'getSDGBubbleChart',
        values: {
          projectID: projects.map((project: ProjectModel) => project._id),
        },
      });
      getGeoMapData({
        socketName: 'getGeoMapData',
        values: {
          projectID: projects.map((project: ProjectModel) => project._id),
        },
      });
      allReportsAction({
        socketName: 'allReport',
        values: {
          projectID: projects.map((project: ProjectModel) => project._id),
        },
      });
    }
  }, [ProjectsData]);

  React.useEffect(() => {
    baseTableForProject.data = projectTableData;
  }, [projectTableData]);

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

  function onBarChartLegendClick(legend: string) {
    barChartLegendClickFunc(legend, [...barChartLegends], setBarChartLegends);
  }

  function onBubbleSelect(bubble: string) {
    setSelectedSDG(bubble);
  }

  return (
    /* todo: look into why we're not passing mockData */
    <GranteeDetailLayout
      match={props.match}
      loading={loading}
      title={granteeTitle}
      breadcrumbs={breadCrumb}
      description={description}
      contact={contact}
      ppVizData={ppVizData}
      SDGVizData={SDGVizData}
      selectedSDG={selectedSDG}
      onBubbleSelect={onBubbleSelect}
      geoMapData={geoMapData}
      barChartLegends={barChartLegends}
      onBarChartLegendClick={onBarChartLegendClick}
    />
  );
}
