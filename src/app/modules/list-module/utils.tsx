/* eslint-disable no-nested-ternary */
/* core */
import React from 'react';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import IconCellModule from 'app/components/datadisplay/Table/common/IconCell';
/* utils */
import get from 'lodash/get';
import find from 'lodash/find';

import { getInfoTHead } from 'app/components/datadisplay/Table/helpers';
/* mock */
import { mockDataVar8 } from 'app/components/datadisplay/Table/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export const formatTableData = (data: any): any[] => {
  let tempArray: any[] = [];
  let bigTempArray: any[][] = [[]];
  data.forEach((row: any) => {
    tempArray.push(
      row.project_number,
      row.project_name,
      row.decision,
      row.decision_date,
      row.allocated_amount,
      row.organisation.organisation_name
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
export const getBaseTable = (): TableModuleModel => {
  const tableConfig = mockDataVar8;
  tableConfig.columns = [
    {
      name: 'Projecnummer',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Projectnummer', 'info'),
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule link={`/projects/${value}/detail`} value={value} />
          );
        },
        customFilterListRender: value => `Projectnummer: ${value}`,
      },
    },
    {
      name: 'ProjectTitle',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('ProjectTitle', 'info'),
        customFilterListRender: value => `ProjectTitle: ${value}`,
      },
    },
    {
      name: 'Besluit',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Besluit', 'info'),
        customFilterListRender: value => `Besluit: ${value}`,
      },
    },
    {
      name: 'Datum besluit',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Datum besluit', 'info'),
        customFilterListRender: value => `Datum besluit: ${value}`,
      },
    },
    {
      name: 'Som van vrijgevallen',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Som van vrijgevallen', 'info'),
        customFilterListRender: value => `Som van vrijgevallen: ${value}`,
      },
    },
    {
      name: 'Organisatie',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Organisatie', 'info'),
        customFilterListRender: value => `Organisatie: ${value}`,
      },
    },
  ];

  return tableConfig;
};
