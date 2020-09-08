/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-underscore-dangle */
import get from 'lodash/get';
import find from 'lodash/find';
import { getMediaTileData } from 'app/modules/detail-modules/report-detail/utils/getMediaTileData';

export function formatReportDetail(data: any) {
  const reportDetailRecord = data.report;
  const splits = reportDetailRecord.date.split('/');
  const date = `${splits[1]}.${splits[0]}.${splits[2]}`;
  return {
    id: reportDetailRecord._id,
    title: reportDetailRecord.title,
    date,
    location: reportDetailRecord.location,
    country: reportDetailRecord.country,
    total_target_beneficiaries: reportDetailRecord.total_target_beneficiaries,
    place: reportDetailRecord.place_name || reportDetailRecord.country,
    target_beneficiaries: reportDetailRecord.target_beneficiaries,
    project: {
      name: reportDetailRecord.project.project_name,
      id: reportDetailRecord.project.project_number,
      person: {
        email: get(reportDetailRecord, 'project.person.email', ''),
      },
    },
    key_outcomes: reportDetailRecord.key_outcomes,
    monitor_report_outcomes: reportDetailRecord.monitor_report_outcomes,
    media: getMediaTileData(reportDetailRecord.media),
    pillar: reportDetailRecord.pillar,
    policy_priorities: reportDetailRecord.policy_priorities,
    key_implementation_challenges:
      reportDetailRecord.key_implementation_challenges,
    other_project_outcomes: reportDetailRecord.other_project_outcomes,
    inputs_invested: reportDetailRecord.inputs_invested,
    activities_undertaken: reportDetailRecord.activities_undertaken,
    projectgoals_socialbenefits: reportDetailRecord.projectgoals_socialbenefits,
    important_factors: reportDetailRecord.important_factors,
    orgs_partners: reportDetailRecord.orgs_partners,
    how_address_challenges: reportDetailRecord.how_address_challenges,
    how_important_insinger_support:
      reportDetailRecord.how_important_insinger_support,
    apply_for_more_funding: reportDetailRecord.apply_for_more_funding,
    other_comments: reportDetailRecord.other_comments,
    reportID: reportDetailRecord.reportID,
    barChartData: data.barchartData,
    budget: reportDetailRecord.budget,
    bubbleChartData: data.sdgVizData,
    mapData: data.mapData,
  };
}
