//TODO: Find a way to keep the insinger-backend const en front-end in sync.
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

// In order for us to reduce the number of any types used, we should make a Model folder containing the business objects (report, user etc)
export function getReportsBySDG(selectedSDG: string, allReportsData: any) {
  let data = allReportsData;
  const regExp: RegExpMatchArray | null = selectedSDG.match(/\d/g);

  if (regExp) {
    const sdgNumber = parseInt(regExp.join(''));
    const reportsBySDG: any = [];

    //Check if a reports policy priority matches the given sdg
    allReportsData.data.map((report: any) => {
      let obj = policyPriorities.find(pp => {
        return pp.name == report.policy_priority.name;
      });

      if (obj != undefined && obj.sdgs.includes(sdgNumber)) {
        reportsBySDG.push(report);
      }
    });

    data = {
      status: 'success',
      data: reportsBySDG,
    };
  }

  return data;
}

export function getProjectsBySDG(allProjectsData: any, reportsData: any) {
  const projectsBySDG: any = [];

  for (let i = 0; i < reportsData.data.length; i++) {
    for (let j = 0; j < allProjectsData.data.length; j++) {
      if (
        allProjectsData.data[j].project_number ===
        reportsData.data[i].project.project_number
      ) {
        if (!projectsBySDG.includes(allProjectsData.data[j])) {
          projectsBySDG.push(allProjectsData.data[j]);
        }
      }
    }
  }

  return {
    status: 'success',
    data: projectsBySDG,
  };
}

export function getGranteesBySDG(allGranteesData: any, projectsData: any) {
  const granteesBySDG: any = [];

  for (let i = 0; i < projectsData.data.length; i++) {
    for (let j = 0; j < allGranteesData.data.length; j++) {
      if (
        allGranteesData.data[j]._id === projectsData.data[i].organisation._id
      ) {
        if (!granteesBySDG.includes(allGranteesData.data[j])) {
          granteesBySDG.push(allGranteesData.data[j]);
        }
      }
    }
  }

  return {
    status: 'success',
    data: granteesBySDG,
  };
}
