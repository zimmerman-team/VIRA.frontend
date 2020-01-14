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
import { GranteeListMock } from 'app/modules/list-module/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export const formatTableDataForProject = (data: any): any[] => {
  let tempArray: any[] = [];
  let bigTempArray: any[][] = [[]];
  data.forEach((row: any) => {
    tempArray.push(
      row.project_number,
      row.project_name,
      row.decision,
      row.decision_date,
      row.released_amount, //Som van vrijgevallen
      row.organisation.organisation_name
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};
export const getBaseTableForProject = (): TableModuleModel => {
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

export const formatTableDataForGrantee = (data: any): any[] => {
  let tempArray: any[] = [];
  let bigTempArray: any[][] = [[]];
  data.forEach((row: any) => {
    tempArray.push(
      row.organisation_name,
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
export const getBaseTableForGrantee = (): TableModuleModel => {
  const tableConfig = GranteeListMock;
  tableConfig.columns = [
    {
      name: 'Grantee Name',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Grantee Name', 'info'),
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule link={`/grantee/${value}/detail`} value={value} />
          );
        },
        customFilterListRender: value => `Grantee Name: ${value}`,
      },
    },
    {
      name: 'Grantee Type',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Grantee Type', 'info'),
        customFilterListRender: value => `Grantee Type: ${value}`,
      },
    },
    {
      name: 'Place',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Place', 'info'),
        customFilterListRender: value => `Place: ${value}`,
      },
    },
    {
      name: 'Country',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Country', 'info'),
        customFilterListRender: value => `Country: ${value}`,
      },
    },
    {
      name: 'Email',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('email', 'info'),
        customFilterListRender: value => `email: ${value}`,
      },
    },
    {
      name: 'Website',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Website', 'info'),
        customFilterListRender: value => `Website: ${value}`,
      },
    },
  ];

  return tableConfig;
};
