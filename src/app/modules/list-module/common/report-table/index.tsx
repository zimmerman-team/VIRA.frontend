// @ts-nocheck
import React, { useState } from 'react';
import {
  DateRangePicker,
  DateRange,
} from '@matharumanpreet00/react-daterange-picker';
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from 'mui-datatables';
import {
  TextField,
  FormGroup,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import { reportsOverviewList } from 'app/modules/list-module/common/report-table/mock';

const reportTableMockData = [
  [1000, 'sasdasd', '10-2-2020', 1581292800],
  [1001, 'erer', '10-2-2020', 1581292800],
  [1002, 'lorem ipsum dolor simet ', '11-2-2020', 1581379200],
  [1004, 'Lorem ipsum', '24-4-2020', 1587686400],
  [1006, 'sdsdsdsdsdsdsdsdsd', '11-5-2020', 1589155200],
  [1007, 'sasasasasa', '24-4-2020', 1587686400],
  [1008, 'sasasasasa', '24-4-2020', 1587686400],
  [1009, 'sasasasasa', '24-4-2020', 1587686400],
  [1011, 'asdasdasd', '13-5-2020', 1589328000],
  [1012, 'asasdads', '18-5-2020', 1589760000],
  [1013, 'wwdssdsd', '12-5-2020', 1589241600],
  [1014, 'sdsdsd sdsdsd', '24-4-2020', 1587686400],
  [1015, '1591697281514', '9-6-2020', 1591660800],
  [1016, 'e2e report title', '9-6-2020', 1591660800],
  [1041, '1591869570879', '11-6-2020', 1591833600],
];

const options: MUIDataTableOptions = {
  filter: true,
  filterType: 'multiselect',
  responsive: 'standard',
  download: false,
  print: false,
  // selectableRows: false,
  viewColumns: false,
};

// interface ReportsOverviewTableItemProps {
//
// }

interface ReportsOverviewTableProps {
  data: array;
}

export const ReportsOverviewTable = (props: ReportsOverviewTableProps) => {
  // states for the datepicker
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState<DateRange>({});
  const [parsedDate, setParseDate] = React.useState([]);

  const reports = useStoreState(state => state.allReports.data);

  // console.log(reports.data);

  // console.log('report ', reportsOverviewList[0]);
  // console.log('report 1', Object.values(reportsOverviewList[0]));

  function handleDateParsing(range) {
    setDateRange(range);
    setParseDate([
      Date.parse(dateRange.startDate),
      Date.parse(dateRange.endDate),
    ]);
    console.log(parsedDate[0]);

    console.log('dateRange', dateRange.startDate);
  }

  const utcSeconds = 1581292800;
  const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(utcSeconds);

  // console.log(d.setUTCSeconds(utcSeconds));

  // converts epoch to dd-mm-yyyy
  function formatDate(epoch: number) {
    const date = new Date(epoch * 1000);
    let day = date.getUTCDate().toString(),
      month = (date.getUTCMonth() + 1).toString(),
      year = date.getUTCFullYear().toString(),
      formatted = '';
    if (day.length === 1) {
      day = '0' + day;
    }
    if (month.length === 1) {
      month = '0' + month;
    }
    formatted = day + '-' + month + '-' + year;
    return formatted;
  }

  // test
  let x = 1592310140929;
  let f = formatDate(x);

  const [dateFilterChecked, setDateFilterChecked] = useState(true);

  const columns: MUIDataTableColumn[] = [
    {
      name: 'ID',
      options: {
        filter: false,
      },
    },
    {
      label: 'Modified Title Label',
      name: 'Title',
      options: {
        filter: false,
      },
    },

    {
      name: 'Date',
      options: {
        filter: false,
      },
    },

    {
      name: 'Epoch',
      options: {
        filter: true,
        filterType: 'custom',
        display: false,
        filterList: [
          parsedDate[0] ? parsedDate[0] : 1591826400,
          parsedDate[1] ? parsedDate[1] : 1592085599,
        ],
        customFilterListOptions: {
          render: date => {
            if (date[0] && date[1] && dateFilterChecked) {
              return [
                `Start Date: ${formatDate(date[0])}`,
                `End Date: ${formatDate(date[1])}`,
              ];
            } else if (date[0] && date[1] && !dateFilterChecked) {
              return `From: ${date[0]}, To: ${date[1]}`;
            } else if (date[0]) {
              return `From: ${date[0]}`;
            } else if (date[1]) {
              return `To: ${date[1]}`;
            }
            return [];
          },
          update: (filterList, filterPos, index) => {
            console.log(
              'customFilterListOnDelete: ',
              filterList,
              filterPos,
              index
            );

            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '');
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1);
            } else if (filterPos === -1) {
              filterList[index] = [];
            }

            return filterList;
          },
        },
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
            // const filterList = parsedDate ? parsedDate : [];

            console.log('filterList', filterList);
            console.log('index', index);

            return (
              <div>
                <FormLabel>Date</FormLabel>
                <FormGroup row>
                  <TextField
                    label="start"
                    value={filterList[index][0] || ''}
                    onChange={event => {
                      filterList[index][0] = event.target.value;
                      onChange(filterList[index], index, column);
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                  <TextField
                    label="end"
                    value={filterList[index][1] || ''}
                    onChange={event => {
                      filterList[index][1] = event.target.value;
                      onChange(filterList[index], index, column);
                    }}
                    style={{ width: '45%' }}
                  />
                  <DateRangePicker
                    open={open}
                    // onChange={range => setDateRange(range)}
                    onChange={range => handleDateParsing(range)}
                  />
                </FormGroup>
              </div>
            );
          },
        },
        // print: false,
      },
    },
  ];

  return (
    <MUIDataTable
      title={'ACME Employee list - customizeFilter'}
      data={props.data}
      columns={columns}
      options={options}
    />
  );
};
