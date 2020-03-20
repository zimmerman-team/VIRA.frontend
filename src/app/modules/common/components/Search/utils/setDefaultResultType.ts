export function setDefaultResultType(data: any, setResultType: Function) {
  if (data.projects.length > 0) {
    setResultType('projects');
  } else if (data.organisations.length > 0) {
    setResultType('grantees');
  } else if (data.reports.length > 0) {
    setResultType('reports');
  }
}
