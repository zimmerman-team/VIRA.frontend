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
import findIndex from 'lodash/findIndex';
import { formatReportDetail } from './utils/formatReportDetail';

export const ReportDetailModuleF = (props: any) => {
  useTitle('Monitoring & Evaluation Tool  Report detail');
  const report_obj: any = useParams();
  const report_id: any = report_obj.code;
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
    },
    key_outcomes: '',
    monitor_report_outcomes: '',
    media: '',
    policy_priority: {},
    key_implementation_challenges: '',
    other_project_outcomes: '',
    plans: '',
    other_comments: '',
    reportID: '',
    barChartData: [],
    budget: 0,
  });
  const [barChartLegends, setBarChartLegends] = React.useState([
    {
      label: 'Target',
      selected: true,
    },
    {
      label: 'Budget',
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
    <ReportDetailLayout
      match={props.match}
      report={reportDetails}
      selectedSDG={selectedSDG}
      onBubbleSelect={onBubbleSelect}
      barChartLegends={barChartLegends}
      onBarChartLegendClick={onBarChartLegendClick}
    />
  );
};

export const ReportDetailModule = withRouter(ReportDetailModuleF);
