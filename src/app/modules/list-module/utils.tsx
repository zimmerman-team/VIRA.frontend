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
import { mockDataVar8 } from 'app/components/datadisplay/Table/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { GranteeListMock } from 'app/modules/list-module/mock';
import React from 'react';
import { ReportListMock } from 'app/modules/list-module/mock';
import get from 'lodash/get';
import find from 'lodash/find';
// import { useTranslation, Translation } from 'react-i18next';
import { useTranslation, Translation } from 'react-i18next';
// import i18n from '../i18n'
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
  const tableConfig = mockDataVar8;
  // const { t, i18n } = useTranslation();

  tableConfig.columns = [
    {
      name: 'ID',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `ID: ${value}`,
      },
    },
    {
      name: i18n.t('Decision date'),
      // name: t('Decision date'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Decision date: ${value}`,
      },
    },
    {
      name: 'Decision',
      // name: t('Decision'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Decision: ${value}`,
      },
    },
    {
      name: 'Project title',
      // name: t('Project title'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule
              link={`/projects/${tableMeta.rowData[0]}/detail/priority-area`}
              value={value}
            />
          );
        },
        customFilterListRender: value => `ProjectTitle: ${value}`,
      },
    },
    {
      name: 'Organisation',
      // name: t('Organisation'),
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
  // const { t, i18n } = useTranslation();

  tableConfig.columns = [
    {
      name: 'Grantee Name',
      // name: t('Grantee Name'),
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
      // name: t('Grantee Type'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Grantee Type: ${value}`,
      },
    },
    {
      name: 'Place',
      // name: t('Place'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Place: ${value}`,
      },
    },
    {
      name: 'Country',
      // name: t('Country'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Country: ${value}`,
      },
    },
    {
      name: 'Email',
      // name: t('Email'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
        customFilterListRender: value => `email: ${value}`,
      },
    },
    {
      name: 'Website',
      // name: t('Website'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
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
  // const t = i18n.t;
  const tableConfig = ReportListMock;

  tableConfig.columns = [
    {
      name: 'ID',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `ID: ${value}`,
      },
    },
    {
      name: i18n.t('Title of Reports'),
      // name: t('Title of Reports'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Title: ${value}`,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowAllData = find(data, { reportID: tableMeta.rowData[0] });
          const id = get(rowAllData, '_id', '');
          const isDraft = get(rowAllData, 'isDraft', false);
          const link = isDraft
            ? `/report/${rowAllData.project.project_number}/outcomes?rid=${id}`
            : `/reports/${id}/detail/priority-area`;
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
      name: 'Date',
      // name: t('Date'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `${t('Date')}: ${value}`,
      },
    },
  ];

  return tableConfig;
};
