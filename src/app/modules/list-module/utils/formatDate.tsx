export function formatDate(epoch: number) {
  const twoHours = 7200000;
  // 2 hours need to be added due to timezone
  const date = new Date(epoch * 1000 + twoHours);
  let day = date.getUTCDate().toString();
  let month = (date.getUTCMonth() + 1).toString();
  const year = date.getUTCFullYear().toString();
  let formatted = '';
  if (day.length === 1) {
    day = `0${day}`;
  }
  if (month.length === 1) {
    month = `0${month}`;
  }
  formatted = `${day}-${month}-${year}`;
  return formatted;
}
