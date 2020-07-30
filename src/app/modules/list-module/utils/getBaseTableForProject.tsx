//@ts-nocheck
//TODO: Please check if https://www.npmjs.com/package/@types/mui-datatables has hit v3.3.0
//TODO: Then remove ts-nocheck
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { projectsTableConfig } from 'app/components/datadisplay/Table/mock';
import i18n from 'app/languages';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';

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
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.organisation')}: ${value}`,
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
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.project_title')}: ${value}`,
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
      name: i18n.t('projects.overview.table.decision_date'),
      options: {
        sortDirection: 'desc',
        // customSort: sortDate(i18n.t.date),
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.decision_date')}: ${value}`,
        sortCompare: order => {
          return (obj1, obj2) => {
            // Create correct date objects
            const dayMonthYear1 = obj1.data.split('-');
            const dayMonthYear2 = obj2.data.split('-');

            const date = new Date(
              dayMonthYear1[2],
              dayMonthYear1[1] - 1,
              dayMonthYear1[0]
            );
            const comparison = new Date(
              dayMonthYear2[2],
              dayMonthYear2[1] - 1,
              dayMonthYear2[0]
            );

            return (date - comparison) * (order === 'asc' ? 1 : -1);
          };
        },
      },
    },
    {
      name: i18n.t('projects.overview.table.allocated_amount'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.allocated')}: ${value}`,
        sortCompare: order => {
          return (obj1, obj2) => {
            // Removes everything after the .
            // Removes all characters that are not numbers
            const number = obj1.data.split('.')[0].replace(/\D/g, '');
            const comparison = obj2.data.split('.')[0].replace(/\D/g, '');

            return (number - comparison) * (order === 'asc' ? 1 : -1);
          };
        },
      },
    },
  ];

  return tableConfig;
};
