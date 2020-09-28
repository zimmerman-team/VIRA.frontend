/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useTitle } from 'react-use';
import { useParams, withRouter } from 'react-router-dom';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail/layout';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import get from 'lodash/get';
import { AppConfig } from 'app/data';
import { barChartLegendClickFunc } from 'app/components/charts/BarCharts/utils/barChartLegendClickFunc';
import { formatReportDetail } from './utils/formatReportDetail';

export const ReportDetailModuleF = (props: any) => {
  useTitle(`${AppConfig.appTitleLong}  Report detail`);

  const report_obj: { code: string } = useParams();
  const report_id: string = report_obj.code;
  const [reportDetails, setreportDetails] = useState({
    id: '',
    title: '',
    date: '',
    location: '',
    country: '',
    total_target_beneficiaries: 0,
    target_beneficiaries: [],
    project: {
      name: '',
      id: '',
      person: {
        email: '',
      },
    },
    key_outcomes: '',
    media: [],
    policy_priorities: [],
    pillar: '',
    sdgs: [],
    key_implementation_challenges: '',
    other_project_outcomes: '',
    inputs_invested: '',
    activities_undertaken: '',
    projectgoals_socialbenefits: '',
    important_factors: '',
    orgs_partners: '',
    partners: '',
    how_address_challenges: '',
    how_important_insinger_support: '',
    apply_for_more_funding: '',
    other_comments: '',
    reportID: '',
    barChartData: [],
    budget: 0,
    bubbleChartData: [],
    mapData: [],
  });
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
  const [selectedBreakdown, setSelectedBreakdown] = React.useState('None');

  const reportDetailAction = useStoreActions(
    (actions) => actions.reportDetail.fetch
  );
  const reportDetailClearData = useStoreActions(
    (actions) => actions.reportDetail.clear
  );
  const reportDetailData = useStoreState((state) => state.reportDetail.data);

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

  React.useEffect(() => {
    return () => reportDetailClearData();
  }, []);

  React.useEffect(() => {
    reportDetailAction({
      socketName: 'getReport',
      values: { id: report_id },
    });
  }, [report_id]);

  React.useEffect(() => {
    getPillarDataByBudget({
      socketName: 'getPillarDataByBudget',
      values: {
        reportID: report_id,
      },
    });
    getPillarDataByDuration({
      socketName: 'getPillarDataByDuration',
      values: {
        reportID: report_id,
      },
    });
    getPriorityAreaBarChartData({
      socketName: 'getPriorityAreaBarChartData',
      values: {
        reportID: report_id,
        breakdownBy: selectedBreakdown,
      },
    });
    getTargetGroupBarChartData({
      socketName: 'getTargetGroupBarChartData',
      values: {
        reportID: report_id,
        breakdownBy: selectedBreakdown,
      },
    });
    getOneMultiYearBarChartData({
      socketName: 'getOneMultiYearBarChartData',
      values: {
        reportID: report_id,
        breakdownBy: selectedBreakdown,
      },
    });
  }, [report_id, selectedBreakdown]);

  React.useEffect(() => {
    if (get(reportDetailData, 'report', false)) {
      // @ts-ignore
      setreportDetails(formatReportDetail(reportDetailData));
    }
  }, [reportDetailData]);

  function onBarChartLegendClick(legend: string) {
    barChartLegendClickFunc(legend, [...barChartLegends], setBarChartLegends);
  }

  function editReport() {
    props.history.push(
      `/report/${reportDetails.project.id}/project-info?rid=${reportDetails.id}`
    );
  }

  return (
    <ReportDetailLayout
      match={props.match}
      report={reportDetails}
      editReport={editReport}
      selectedSDG={selectedSDG}
      onBubbleSelect={setSelectedSDG}
      barChartLegends={barChartLegends}
      onBarChartLegendClick={onBarChartLegendClick}
      pillarData={pillarDataByBudget}
      pillarDataByDuration={pillarDataByDuration}
      priorityAreaData={priorityAreaBarChartData}
      targetGroupData={targetGroupBarChartData}
      oneAndMultiYearData={oneMultiYearBarChartData}
      selectedBreakdown={selectedBreakdown}
      onBreakdownSelect={setSelectedBreakdown}
    />
  );
};

export const ReportDetailModule = withRouter(ReportDetailModuleF);
