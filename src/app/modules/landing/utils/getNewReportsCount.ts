import filter from 'lodash/filter';

export function getNewReportsCount(reports: any[], user: any): number {
  const newReports = filter(reports, r => {
    let isNew = false;
    const dateReport = new Date(r.date).getTime();
    const userLLDate = new Date(
      `${user.lastLogin.slice(0, 10)}T00:00:00`
    ).getTime();
    if (dateReport > userLLDate || dateReport === userLLDate) {
      isNew = true;
    }
    return isNew;
  });
  return newReports.length;
}
