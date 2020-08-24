//@ts-nocheck
//TODO: Please check if https://www.npmjs.com/package/@types/mui-datatables has hit v3.3.0
//TODO: Then remove ts-nocheck
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { projectsTableConfig } from 'app/components/datadisplay/Table/mock';
import i18n from 'app/languages';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';
import {
  sortOnDate,
  sortOnMoney,
} from 'app/modules/list-module/utils/sortFunctions';

const sortDate = (data: []) => {
  return data.sort((a: any, b: any) => b - a);
};

export const getBaseTableForProject = (): TableModuleModel => {
  const tableConfig = projectsTableConfig;
  tableConfig.columns = [
    {
      name: i18n.t('projects.overview.table.organisation'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListOptions: {
          render: value =>
            `${i18n.t('projects.overview.table.organisation')}: ${value}`,
        },
      },
    },
    {
      name: i18n.t('projects.overview.table.project_title'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value) {
            const temp_value = value.split(' && ');
            value = temp_value[0];
            updateValue = temp_value[1];
          }
          return (
            <LinkCellModule link={`/projects/${updateValue}`} value={value} />
          );
        },
        customFilterListOptions: {
          render: value =>
            `${i18n.t('projects.overview.table.project_title')}: ${value}`,
        },
      },
    },
    {
      name: i18n.t('projects.overview.table.decision'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListOptions: {
          render: value =>
            `${i18n.t('projects.overview.table.decision')}: ${value}`,
        },
      },
    },
    {
      name: i18n.t('projects.overview.table.decision_date'),
      options: {
        // sortDirection: 'desc',

        sortOrder: {
          // name: 'Date',
          direction: 'desc',
        },
        // customSort: sortDate(i18n.t.date),
        filter: true,
        filterType: 'checkbox',
        customFilterListOptions: {
          render: value =>
            `${i18n.t('projects.overview.table.decision_date')}: ${value}`,
        },
        sortCompare: order => {
          return (obj1, obj2) => sortOnDate(obj1, obj2, order);
        },
      },
    },
    {
      name: i18n.t('projects.overview.table.allocated_amount'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListOptions: {
          render: value =>
            `${i18n.t('projects.overview.table.allocated')}: ${value}`,
        },
        sortCompare: order => {
          return (obj1, obj2) => sortOnMoney(obj1, obj2, order);
        },
      },
    },
  ];

  return tableConfig;
};
