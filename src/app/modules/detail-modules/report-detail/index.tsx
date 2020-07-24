/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    monitor_report_outcomes: '',
    media: [],
    policy_priority: {},
    key_implementation_challenges: '',
    other_project_outcomes: '',
    plans: '',
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

  const reportDetailAction = useStoreActions(
    actions => actions.reportDetail.fetch
  );
  const reportDetailClearData = useStoreActions(
    actions => actions.reportDetail.clear
  );
  const reportDetailData = useStoreState(state => state.reportDetail.data);

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
      `/report/${reportDetails.project.id}/outcomes?rid=${reportDetails.id}`
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
    />
  );
};

export const ReportDetailModule = withRouter(ReportDetailModuleF);
