/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import get from 'lodash/get';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail/layout';
import { useStoreActions } from 'app/state/store/hooks';
import { useStoreState } from 'app/state/store/hooks';
import { formatReportDetail } from './utils/formatReportDetail';
import findIndex from 'lodash/findIndex';

export const ReportDetailModule = () => {
  useTitle('M&E Report detail');
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
    if (reportDetailData) {
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

  return (
    <ReportDetailLayout
      report={reportDetails}
      barChartLegends={barChartLegends}
      onBarChartLegendClick={onBarChartLegendClick}
    />
  );
};
