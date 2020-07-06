import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';

export const GranteeListMock: TableModuleModel = {
  title: 'Grantee',
  data: [[]],
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
    filter: false,
    download: false,
    rowHover: true,
    pagination: true,
    viewColumns: false,
    responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
    fixedHeaderOptions: { xAxis: false, yAxis: false },
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};
