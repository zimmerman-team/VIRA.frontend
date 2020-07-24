import { DataModel } from 'app/modules/list-module/model';

export const formatTableDataForProject = (data: DataModel[]): any[] => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  console.log(data);
  data.forEach((row: any) => {
    tempArray.push(
      row.organisation.organisation_name,
      row.project_name,
      row.decision,
      row.decision_date,
      `€ ${row.allocated_amount}`
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
