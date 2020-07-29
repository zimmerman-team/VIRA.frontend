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
    // todo: fix sorting by date
    {
      name: i18n.t('projects.overview.table.decision_date'),
      options: {
        sortDirection: 'desc',
        // customSort: sortDate(i18n.t.date),
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.decision_date')}: ${value}`,
      },
    },
    // todo: fix sorting by amount
    {
      name: i18n.t('projects.overview.table.allocated_amount'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('projects.overview.table.allocated')}: ${value}`,
      },
    },
  ];

  return tableConfig;
};
