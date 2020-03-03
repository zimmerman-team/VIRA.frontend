import get from 'lodash/get';
import find from 'lodash/find';
import minBy from 'lodash/minBy';
import sumBy from 'lodash/sumBy';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import consts from '../config/consts';
const Report = require('../models/report');
import { ProjectPalette } from '../../src/app/theme';
import { countryFeaturesData } from '../config/countryFeatures';
import { policyPriorities } from '../../src/app/modules/report/sub-modules/policy-priorities/mock';

const ppToSdg = consts.ppToSdg;

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
  const { projectID } = req.query;

  Report.find(projectID ? { project: projectID } : {})
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
        policyPriorities.forEach((priority: any) => {
          const foundPriority = find(result, {
            name: priority.label,
          });
          if (!foundPriority) {
            result.push({
              name: priority.label,
              value1: 0,
              value2: 0,
              value3: 0,
              value1Color: ProjectPalette.primary.main,
              value2Color: ProjectPalette.grey[500],
              tooltip: {},
            });
          }
        });
      } else {
        res(JSON.stringify([]));
      }
      res(JSON.stringify(sortBy(result, 'name').reverse()));
    });
}

export function getSDGBubbleChart(req: any, res: any) {
  const { projectID } = req.query;

  // if (req.query.user_email) {
  //   ResponsiblePerson.find({ email: req.query.user_email }).exec(
  //     (err: any, persons: any) => {
  //       if (persons) {
  //         Project.find({
  //           $or: persons.map((person: any) => ({
  //             responsible_person: new ObjectId(person._id),
  //           })),
  //         }).exec((err: any, projects: any) => {
  //           if (projects) {
  //             Report.find({
  //               $or: projects.map((p: any) => ({
  //                 project: new ObjectId(p._id),
  //               })),
  //             })
  //               .select('policy_priority budget')
  //               .populate('policy_priority')
  //               .exec((err: any, data: any) => {
  //                 const result: any[] = [];
  //                 if (data) {
  //                   const groupedData = groupBy(data, 'policy_priority.name');
  //                   Object.keys(groupedData).forEach(key => {
  //                     const sdg = get(ppToSdg, `${[key]}`, null);
  //                     if (sdg) {
  //                       result.push({
  //                         name: sdg.name,
  //                         color: sdg.color,
  //                         loc: sumBy(groupedData[key], 'budget'),
  //                       });
  //                     }
  //                   });
  //                 } else {
  //                   res(JSON.stringify([]));
  //                 }
  //                 res(JSON.stringify(sortBy(result, 'name').reverse()));
  //               });
  //           }
  //         });
  //       }
  //     }
  //   );
  // } else {
  Report.find(projectID ? { project: projectID } : {})
    .select(
      'policy_priority total_target_beneficiaries total_target_beneficiaries_commited budget'
    )
    .populate('policy_priority')
    .exec((err: any, data: any) => {
      let result: any[] = [];
      const groupedData = groupBy(data, 'policy_priority.name');
      Object.keys(ppToSdg).forEach(key => {
        const sdg = get(ppToSdg, `${[key]}`, null);
        const pp = get(groupedData, `${[key]}`, null);
        if (pp) {
          const totTarget = sumBy(pp, 'total_target_beneficiaries');
          const totCommitted = sumBy(pp, 'total_target_beneficiaries_commited');
          const totBudget = sumBy(pp, 'budget');
          result.push({
            ppName: key,
            name: sdg.name,
            color: sdg.color,
            number: sdg.number,
            targetValue: totTarget,
            targetPercentage: (totCommitted / totTarget) * 100,
            loc: totBudget,
          });
        } else {
          result.push({
            ppName: key,
            name: sdg.name,
            color: sdg.color,
            number: sdg.number,
            opacity: 0.2,
          });
        }
      });
      const minValue = minBy(result, 'loc').loc;
      result = result.map((r: any) => ({
        ...r,
        loc: !r.loc ? minValue : r.loc,
      }));
      res(JSON.stringify(sortBy(result, 'number')));
    });
  // }
}

export function getGeoMapData(req: any, res: any) {
  const { projectID } = req.query;
  const rQ = projectID
    ? { project: projectID, location: { $ne: null } }
    : { location: { $ne: null } };
  Report.find(rQ)
    .select('location budget place_name country')
    .populate('location')
    .exec((err: any, data: any) => {
      // console.log(data);
      const mapMarkers = data.map((item: any) => ({
        name: item.place_name || item.country,
        longitude: item.location.long,
        latitude: item.location.lat,
        value: item.budget,
      }));
      const countryFeatures = {
        ...countryFeaturesData,
        features: filter(countryFeaturesData.features, f =>
          find(data, { country: f.properties.name })
        ),
      };
      res(JSON.stringify({ mapMarkers, countryFeatures }));
    });
}
