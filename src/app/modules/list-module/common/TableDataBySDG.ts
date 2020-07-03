// @ts-nocheck
import allReports from 'app/state/api/actionsReducers/allReports';

export const policyPriorities = [
  {
    key: 'poverty',
    name: 'Poverty reduction with a focus on youth and children',
    sdgs: [1, 3, 4, 8, 10],
  },
  {
    key: 'Refugees',
    name: 'Refugees',
    sdgs: [1, 2, 3, 4, 5, 8, 10],
  },
  {
    key: 'The Elderly',
    name: 'Elderly',
    sdgs: [1, 3, 8, 10],
  },
  {
    key: 'prisoner',
    name: 'Prisoner rehabilitation / reintegration',
    sdgs: [1, 3, 4, 5, 8, 10],
  },
  {
    key: 'drug_use',
    name: 'Drug use',
    sdgs: [1, 3, 8, 10],
  },
  {
    key: 'Prostitution',
    name: 'Prostitution',
    sdgs: [1, 3, 5, 8, 10],
  },
  {
    key: 'Homelessness',
    name: 'Homelessness',
    sdgs: [1, 2, 3, 4, 5, 8, 10, 11],
  },
];

export function getReportsBySDG(selectedSDG: string, allReportsData: any) {
  const regExp: string = selectedSDG.match(/\d/g);
  const sdgNumber = parseInt(regExp.join(''));
  const reportsBySDG: any = [];

  //Check if a reports policy priority matches the given sdg
  allReportsData.data.map(report => {
    let obj = policyPriorities.find(pp => {
      return pp.name == report.policy_priority.name;
    });

    if (obj != undefined && obj.sdgs.includes(sdgNumber)) {
      reportsBySDG.push(report);
    }
  });

  const data = {
    status: 'success',
    data: reportsBySDG,
  };

  return data;
}

export function getProjectsBySDG(allProjectsData: any, reportsBySDG: any) {
  allProjectsData.filter();
}
