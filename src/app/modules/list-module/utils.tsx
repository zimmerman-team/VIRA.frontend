/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* core */
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
/* mock */
import { mockDataVar8 } from 'app/components/datadisplay/Table/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { GranteeListMock, ReportListMock } from 'app/modules/list-module/mock';
import React from 'react';

import find from 'lodash/find';

export const formatTableDataForProject = (data: any): any[] => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  data.forEach((row: any) => {
    tempArray.push(
      row.project_number,
      row.project_name,
      row.decision,
      row.decision_date,
      row.released_amount, // Som van vrijgevallen
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
      name: 'Projectnummer',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
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
        customFilterListRender: value => `ProjectTitle: ${value}`,
      },
    },
    {
      name: 'Besluit',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Besluit: ${value}`,
      },
    },
    {
      name: 'Datum besluit',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Datum besluit: ${value}`,
      },
    },
    {
      name: 'Som van vrijgevallen',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Som van vrijgevallen: ${value}`,
      },
    },
    {
      name: 'Organisatie',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Organisatie: ${value}`,
      },
    },
  ];

  return tableConfig;
};

export const formatTableDataForGrantee = (data: any): any[] => {
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

export const getBaseTableForGrantee = (): TableModuleModel => {
  const tableConfig = GranteeListMock;
  tableConfig.columns = [
    {
      name: 'Grantee Name',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value) {
            const temp_value = value.split(' && ');
            value = temp_value[0];
            updateValue = temp_value[1];
          }
          return (
            <LinkCellModule
              link={`/grantee/${updateValue}/detail`}
              value={value}
            />
          );
        },
        customFilterListRender: updateValue => `Grantee Name: ${updateValue}`,
      },
    },
    {
      name: 'Grantee Type',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Grantee Type: ${value}`,
      },
    },
    {
      name: 'Place',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Place: ${value}`,
      },
    },
    {
      name: 'Country',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Country: ${value}`,
      },
    },
    {
      name: 'Email',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `email: ${value}`,
      },
    },
    {
      name: 'Website',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Website: ${value}`,
      },
    },
  ];

  return tableConfig;
};

export const formatTableDataForReport = (data: any): any[] => {
  let tempArray: any[] = [];
  const bigTempArray: any[][] = [];
  data.forEach((row: any) => {
    const splits = row.date.split('/');
    tempArray.push(
      row.reportID,
      row.title,
      `${splits[1]}-${splits[0]}-${splits[2]}`
    );
    bigTempArray.push(tempArray);
    tempArray = [];
  });

  return bigTempArray;
};

export const getBaseTableForReport = (data: any): TableModuleModel => {
  const tableConfig = ReportListMock;
  tableConfig.columns = [
    {
      name: 'ID',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          const item = find(data, { reportID: value });
          if (!item) {
            return value;
          }
          return (
            <LinkCellModule
              value={value}
              link={`/reports/${item._id}/detail`}
            />
          );
        },
        customFilterListRender: value => `ID: ${value}`,
      },
    },
    {
      name: 'Title',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Title: ${value}`,
      },
    },
    {
      name: 'Date',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Date: ${value}`,
      },
    },
  ];

  return tableConfig;
};
