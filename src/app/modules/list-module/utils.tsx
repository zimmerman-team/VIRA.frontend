// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* core */
import {
  LinkCellModule,
  ExternalLinkCellModule,
} from 'app/components/datadisplay/Table/common/LinkCell';
/* mock */
import { projectsTableConfig } from 'app/components/datadisplay/Table/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import { GranteeListMock, ReportListMock } from 'app/modules/list-module/mock';
import i18n from 'app/languages';

export const formatTableDataForProject = (data: any): any[] => {
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

export const getBaseTableForProject = (): TableModuleModel => {
  const tableConfig = projectsTableConfig;

  tableConfig.columns = [
    {
      name: i18n.t('projects.overview.table.id'),
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.id')}: ${value}`,
      },
    },
    {
      name: i18n.t('projects.overview.table.decision_date'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.decision_date')}: ${value}`,
      },
    },
    {
      name: i18n.t('projects.overview.table.decision'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.decision')}: ${value}`,
      },
    },
    {
      name: i18n.t('projects.overview.table.project_title'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule
              link={`/projects/${tableMeta.rowData[0]}`}
              value={value}
            />
          );
        },
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.project_title')}: ${value}`,
      },
    },
    {
      name: i18n.t('projects.overview.table.organisation'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.organisation')}: ${value}`,
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
      name: i18n.t('grantees.overview.table.name'),
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
        customFilterListRender: updateValue =>
          `${i18n.t('grantees.overview.table.name')}: ${updateValue}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.type'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.type')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.place'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.place')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.country'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.country')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.email'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.email')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.website'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.website')}: ${value}`,
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
  const tableConfig = { ...ReportListMock, data: [] };

  tableConfig.columns = [
    {
      name: i18n.t('reports.overview.table.id'),
      options: {
        sortDirection: 'desc',
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('reports.overview.table.id')}: ${value}`,
      },
    },
    {
      name: i18n.t('reports.overview.table.title'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('reports.overview.table.title')}: ${value}`,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowAllData = find(data, { reportID: tableMeta.rowData[0] });
          const id = get(rowAllData, '_id', '');
          const isDraft = get(rowAllData, 'isDraft', false);
          const link = isDraft
            ? `/report/${rowAllData.project.project_number}/outcomes?rid=${id}`
            : `/reports/${id}`;
          return (
            <LinkCellModule
              link={link}
              value={`${value}${isDraft ? ' [Draft]' : ''}`}
            />
          );
        },
      },
    },
    {
      name: i18n.t('reports.overview.table.date'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('reports.overview.table.date')}: ${value}`,
      },
    },
  ];

  return tableConfig;
};
