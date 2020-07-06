// @ts-nocheck
import React from 'react';

import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from 'mui-datatables';

import { ColumnID } from 'app/modules/list-module/common/report-table/columns/ColumnID';
import { ColumnDate } from 'app/modules/list-module/common/report-table/columns/ColumnDate';
import { data } from './data';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { reportsVariant } from 'app/components/datadisplay/Table/style/reportsVariant';
import i18n from 'app/languages';
import find from 'lodash/find';
import get from 'lodash/get';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
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

interface ReportsOverviewTableProps {
  data: array;
}

export const ReportsOverviewTable = (props: ReportsOverviewTableProps) => {
  const [openDatePicker, setDatePickerOpen] = React.useState(true);

  /* todo: resolve duplicate code */
  const ColumnTitle: MUIDataTableColumn = {
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
  };

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

  return (
    <MuiThemeProvider theme={reportsVariant}>
      <MUIDataTable
        title={'Reports'}
        data={data}
        columns={columns}
        options={options}
        data-cy="mui-data-table"
      />
    </MuiThemeProvider>
  );
};
