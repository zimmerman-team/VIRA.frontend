/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import get from 'lodash/get';

// In order for us to reduce the number of any types used, we should make a Model folder containing the business objects (report, user etc)
export function getReportsBySDG(selectedSDG: string, allReportsData: any) {
  let data = allReportsData;
  const sdgCode = parseInt(get(selectedSDG.split('.'), '[1]', ''), 10);

  if (sdgCode && !isNaN(sdgCode)) {
    const reportsBySDG: any = [];

    allReportsData.data.forEach((report: any) => {
      let pass = false;
      report.sdgs.forEach((sdg: any) => {
        pass = pass || sdg.sdg.code === sdgCode;
      });
      if (pass) {
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
          reportsData.data[i].project.project_number &&
        !projectsBySDG.includes(allProjectsData.data[j])
      ) {
        projectsBySDG.push(allProjectsData.data[j]);
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
        allGranteesData.data[j]._id === projectsData.data[i].organisation._id &&
        !granteesBySDG.includes(allGranteesData.data[j])
      ) {
        granteesBySDG.push(allGranteesData.data[j]);
      }
    }
  }

  return {
    status: 'success',
    data: granteesBySDG,
  };
}
