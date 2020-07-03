import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import i18n from 'app/languages';
import { ReportListMock } from 'app/mock/lists/ReportListMock';

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
    {
      // name: i18n.t('reports.overview.table.date'),
      name: 'Unix timestamp',
      options: {
        filter: true,
        filterType: 'dropdown',
      },
    },
  ];

  return tableConfig;
};
