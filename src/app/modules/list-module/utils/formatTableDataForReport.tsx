import { DataModel } from 'app/modules/list-module/model';

export const formatTableDataForReport = (data: DataModel[]): any[] => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  data.forEach((row: any) => {
    const splits = row.date.split('/');
    tempArray.push(
      row.reportID,
      row.title,
      `${splits[1]}-${splits[0]}-${splits[2]}`,
      row.unix_date
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
