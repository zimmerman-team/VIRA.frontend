import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { projectsTableConfig } from 'app/components/datadisplay/Table/mock';
import i18n from 'app/languages';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';

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
