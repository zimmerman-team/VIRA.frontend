import sortBy from 'lodash/sortBy';

export function formatResults(data: any) {
  const results = {
    projects: [],
    grantees: [],
    reports: [],
    all: [],
  };

  data.projects.forEach((project: any) => {
    results.projects.push({
      title: project.project_name,
      link: `/projects/${project.project_number}/detail`,
    } as never);
  });
  data.organisations.forEach((organisation: any) => {
    results.grantees.push({
      title: organisation.organisation_name,
      link: `/grantee/${organisation._id}/detail`,
    } as never);
  });
  data.reports.forEach((report: any) => {
    results.reports.push({
      title: report.title,
      link: `/report/${report._id}/detail`,
    } as never);
  });

  results.all = results.projects.concat(
    results.grantees.concat(results.reports)
  );

  results.projects = sortBy(results.projects, 'title');
  results.grantees = sortBy(results.grantees, 'title');
  results.reports = sortBy(results.reports, 'title');
  results.all = sortBy(results.all, 'title');

  return results;
}
