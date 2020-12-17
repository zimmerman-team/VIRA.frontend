import { DataModel } from 'app/modules/list-module/model';

export const formatTableDataForGrantee = (data: DataModel[]) => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  data.forEach((row: any) => {
    tempArray.push(
      `${row.organisation_name} && ${row._id}`,
      row.org_type ? row.org_type.name : '',
      row.place,
      row.country,
      row.email,
      row.website
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
