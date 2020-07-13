import { DataModel } from 'app/modules/list-module/model';

export const formatTableDataForProject = (data: DataModel[]): any[] => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  data.forEach((row: any) => {
    tempArray.push(
      row.project_number,
      row.decision_date,
      row.decision,
      row.project_name,
      row.organisation.organisation_name
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
