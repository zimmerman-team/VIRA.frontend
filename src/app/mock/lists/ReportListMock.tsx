import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';

export const ReportListMock: TableModuleModel = {
  title: 'Reports',
  data: [
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights',
      'Label',
      'Label',
    ],
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights',
      'Label',
      'Label',
    ],
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights',
      'Label',
      'Label',
    ],
  ],
  columns: [
    {
      name: 'ID',
      options: {
        filter: false,
      },
    },
    {
      name: 'Title',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <LinkCellModule link="#" value={value} />;
        },
      },
    },
    {
      name: 'Label',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Label',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: true,
    download: false,
    rowHover: true,
    pagination: true,
    viewColumns: false,
    responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
    fixedHeaderOptions: { xAxis: false, yAxis: false },
  },
  // columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};
