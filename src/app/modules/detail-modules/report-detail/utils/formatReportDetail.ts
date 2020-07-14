/* eslint-disable no-underscore-dangle */
import get from 'lodash/get';
import find from 'lodash/find';
import { ProjectPalette } from 'app/theme';
import { policyPriorities } from 'app/modules/report/sub-modules/policy-priorities/mock';
import { getMediaTileData } from 'app/modules/detail-modules/report-detail/utils/getMediaTileData';

export function formatReportDetail(data: any) {
  const reportDetailRecord = data.report;
  const splits = reportDetailRecord.date.split('/');
  const date = `${splits[1]}.${splits[0]}.${splits[2]}`;
  const targetVal: number = reportDetailRecord.total_target_beneficiaries;
  const commitedVal: number =
    reportDetailRecord.total_target_beneficiaries_commited;
  const diffVal: number = targetVal - commitedVal;
  const ppNamePath = get(
    find(policyPriorities, {
      value: reportDetailRecord.policy_priority.name,
    }),
    'label',
    reportDetailRecord.policy_priority.name
  );
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
    policy_priority: reportDetailRecord.policy_priority,
    key_implementation_challenges:
      reportDetailRecord.key_implementation_challenges,
    other_project_outcomes: reportDetailRecord.other_project_outcomes,
    plans: reportDetailRecord.plans,
    other_comments: reportDetailRecord.other_comments,
    reportID: reportDetailRecord.reportID,
    barChartData: [
      {
        name: ppNamePath,
        value1: Math.min(targetVal, commitedVal),
        value2: diffVal < 0 ? diffVal * -1 : diffVal,
        value3: reportDetailRecord.budget,
        value4: reportDetailRecord.insContribution,
        value1Color: ProjectPalette.primary.main,
        value2Color: diffVal > 0 ? ProjectPalette.grey[500] : '#05c985',
        tooltip: {
          title: ppNamePath,
          items: [
            {
              label: `Target (${(
                (reportDetailRecord.total_target_beneficiaries_commited /
                  reportDetailRecord.total_target_beneficiaries) *
                100
              ).toFixed(2)}%)`,
              value: reportDetailRecord.total_target_beneficiaries,
              percentage: (
                (reportDetailRecord.total_target_beneficiaries_commited /
                  reportDetailRecord.total_target_beneficiaries) *
                100
              ).toFixed(2),
            },
            {
              label: 'Budget',
              value: reportDetailRecord.budget.toLocaleString(undefined, {
                currency: 'EUR',
                currencyDisplay: 'symbol',
                style: 'currency',
              }),
            },
            {
              label: 'Insinger Contribution',
              value: reportDetailRecord.insContribution
                ? reportDetailRecord.insContribution.toLocaleString(undefined, {
                    currency: 'EUR',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  })
                : '0',
            },
          ],
        },
      },
    ],
    budget: reportDetailRecord.budget,
    bubbleChartData: data.sdgVizData,
    mapData: data.mapData,
  };
}
