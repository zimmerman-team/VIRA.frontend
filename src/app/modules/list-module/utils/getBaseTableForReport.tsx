// @ts-nocheck
import React, { useState } from 'react';

import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

import get from 'lodash/get';
import find from 'lodash/find';
import i18n from 'app/languages';
import { ReportListMock } from 'app/mock/lists/ReportListMock';
import { DateRangePicker } from 'app/components/daterange';

const options: MUIDataTableOptions = {
  filter: true,
  filterType: 'multiselect',
  responsive: 'standard',
  download: false,
  print: false,
  selectableRows: false,
  viewColumns: false,
};

function formatDate(epoch: number) {
  const date = new Date(epoch * 1000);
  let day = date.getUTCDate().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let year = date.getUTCFullYear().toString();
  let formatted = '';
  if (day.length === 1) {
    day = `0${day}`;
  }
  if (month.length === 1) {
    month = `0${month}`;
  }
  formatted = `${day}-${month}-${year}`;
  return formatted;
}

export const getBaseTableForReport = (data: any): TableModuleModel => {
  const tableConfig = { ...ReportListMock, data: [] };

  tableConfig.options = options;
  tableConfig.columns = [
    {
      name: i18n.t('reports.overview.table.id'),
      options: {
        sortDirection: 'desc',
        filter: false,
        customFilterListRender: value =>
          `${i18n.t('reports.overview.table.id')}: ${value}`,
      },
    },
    /* todo: resolve duplicate code, is the same as ColumnTitle const */
    {
      name: i18n.t('reports.overview.table.title'),
      options: {
        filter: false,
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
        filter: false,
        customFilterListRender: value =>
          `${i18n.t('reports.overview.table.date')}: ${value}`,
      },
    },
    {
      // name: i18n.t('reports.overview.table.date'),
      name: 'Unix timestamp',
      options: {
        filter: true,
        filterType: 'custom',
        display: false,
        // customFilterListOptions: {
        //   render: epoch => {
        //     let startDate = formatDate(epoch[0]);
        //     let endDate = formatDate(epoch[1]);
        //     if (startDate && endDate && dateFilterChecked) {
        //       return [`Start Date: ${startDate}`, `End Date: ${endDate}`];
        //     }
        //     if (startDate && endDate && !dateFilterChecked) {
        //       return `From: ${startDate}, To: ${endDate}`;
        //     }
        //     if (startDate) {
        //       return `From: ${startDate}`;
        //     }
        //     if (endDate) {
        //       return `To: ${endDate}`;
        //     }
        //     return [];
        //   },
        //   update: (filterList, filterPos, index) => {
        //     console.log(
        //       'customFilterListOnDelete: ',
        //       filterList,
        //       filterPos,
        //       index
        //     );

        //     if (filterPos === 0) {
        //       filterList[index].splice(filterPos, 1, '');
        //     } else if (filterPos === 1) {
        //       filterList[index].splice(filterPos, 1);
        //     } else if (filterPos === -1) {
        //       filterList[index] = [];
        //     }

        //     return filterList;
        //   },
        // },
        filterOptions: {
          names: [],
          logic(date, filters) {
            if (filters[0] && filters[1]) {
              return date < filters[0] || date > filters[1];
            } else if (filters[0]) {
              return date < filters[0];
            } else if (filters[1]) {
              return date > filters[1];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => {
            function updateAll(dateRange) {
              filterList[index][0] = Date.parse(dateRange.startDate) / 1000;
              filterList[index][1] = Date.parse(dateRange.endDate) / 1000;
              onChange(filterList[index], index, column);
              console.log('filterlist', filterList[index][0]);
            }

            return (
              <DateRangePicker
                open={true}
                onChange={range => updateAll(range)}
              />
            );
          },
        },
      },
    },
  ];

  return tableConfig;
};
