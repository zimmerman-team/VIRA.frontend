import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import { projectsTableConfig } from 'app/components/datadisplay/Table/mock';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import React from 'react';
import i18n from 'app/languages';

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
