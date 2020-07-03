// @ts-nocheck
import React, { useState } from 'react';
import { DateRangePicker } from '@matharumanpreet00/react-daterange-picker';
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from 'mui-datatables';

import { ColumnID } from 'app/modules/list-module/common/report-table/columns/ColumnID';
import { ColumnTitle } from 'app/modules/list-module/common/report-table/columns/ColumnTitle';
import { ColumnDate } from 'app/modules/list-module/common/report-table/columns/ColumnDate';
import { data } from './data';

const options: MUIDataTableOptions = {
  filter: true,
  filterType: 'multiselect',
  responsive: 'standard',
  download: false,
  print: false,
  selectableRows: false,
  viewColumns: false,
};

interface ReportsOverviewTableProps {
  data: array;
}

export const ReportsOverviewTable = (props: ReportsOverviewTableProps) => {
  const [openDatePicker, setDatePickerOpen] = React.useState(true);

  const ColumnEpoch: MUIDataTableColumn = {
    name: 'Epoch',
    options: {
      filter: true,
      filterType: 'custom',
      display: false,
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
          }

          return (
            <DateRangePicker
              open={openDatePicker}
              onChange={range => updateAll(range)}
            />
          );
        },
      },
    },
  };

  const columns = [ColumnID, ColumnTitle, ColumnDate, ColumnEpoch];

  return <MUIDataTable data={data} columns={columns} options={options} />;
};
