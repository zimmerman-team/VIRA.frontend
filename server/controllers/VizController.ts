import sumBy from 'lodash/sumBy';
import groupBy from 'lodash/groupBy';
const Report = require('../models/report');
import { ProjectPalette } from '../../src/app/theme';

export function getPolicyPriorityBarChartAPI(req: any, res: any) {
  Report.find({})
    .select(
      'policy_priority total_target_beneficiaries total_target_beneficiaries_commited budget'
    )
    .populate('policy_priority')
    .exec((err: any, data: any) => {
      const result: any[] = [];
      if (data) {
        const groupedData = groupBy(data, 'policy_priority.name');
        Object.keys(groupedData).forEach(key => {
          const totTarget = sumBy(
            groupedData[key],
            'total_target_beneficiaries'
          );
          const totCommitted = sumBy(
            groupedData[key],
            'total_target_beneficiaries_commited'
          );
          const totBudget = sumBy(groupedData[key], 'budget');
          result.push({
            name: key,
            value1: totCommitted,
            value2:
              totTarget - totCommitted < 0
                ? (totTarget - totCommitted) * -1
                : totTarget - totCommitted,
            value3: totBudget,
            value1Color: ProjectPalette.primary.main,
            value2Color: '#05c985',
            tooltip: {
              title: key,
              items: [
                {
                  label: `Target (${((totCommitted / totTarget) * 100).toFixed(
                    2
                  )}%)`,
                  value: totCommitted,
                  percentage: ((totCommitted / totTarget) * 100).toFixed(2),
                },
                {
                  label: 'Budget',
                  value: totBudget.toLocaleString(undefined, {
                    currency: 'EUR',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  }),
                },
              ],
            },
          });
        });
      } else {
        res.json([]);
      }
      res.json(result);
    });
}

export function getPolicyPriorityBarChart(req: any, res: any) {
  Report.find({})
    .select(
      'policy_priority total_target_beneficiaries total_target_beneficiaries_commited budget'
    )
    .populate('policy_priority')
    .exec((err: any, data: any) => {
      const result: any[] = [];
      if (data) {
        const groupedData = groupBy(data, 'policy_priority.name');
        Object.keys(groupedData).forEach(key => {
          const totTarget = sumBy(
            groupedData[key],
            'total_target_beneficiaries'
          );
          const totCommitted = sumBy(
            groupedData[key],
            'total_target_beneficiaries_commited'
          );
          const totDiff = totTarget - totCommitted;
          const totBudget = sumBy(groupedData[key], 'budget');
          result.push({
            name: key,
            value1: Math.min(totTarget, totCommitted),
            value2: totDiff < 0 ? totDiff * -1 : totDiff,
            value3: totBudget,
            value1Color: ProjectPalette.primary.main,
            value2Color: totDiff > 0 ? ProjectPalette.grey[500] : '#05c985',
            tooltip: {
              title: key,
              items: [
                {
                  label: `Target (${((totCommitted / totTarget) * 100).toFixed(
                    2
                  )}%)`,
                  value: totCommitted,
                  percentage: ((totCommitted / totTarget) * 100).toFixed(2),
                },
                {
                  label: 'Budget',
                  value: totBudget.toLocaleString(undefined, {
                    currency: 'EUR',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  }),
                },
              ],
            },
          });
        });
      } else {
        res(JSON.stringify([]));
      }
      res(JSON.stringify(result));
    });
}