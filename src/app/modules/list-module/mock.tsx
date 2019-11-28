import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import React from 'react';
import { mockDataVar8 as mockDatatable } from 'app/components/datadisplay/Table/mock';
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const navItemMock: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/list/projects',
  },
  {
    label: 'Grantee',
    path: '/list/grantees',
  },
  {
    label: 'Reports',
    path: '/list/reports',
  },
];

export const TabNavMock: TabNavigatorParams = {
  items: navItemMock,
};

export const ProjectListMock: TableModuleModel = mockDatatable;

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
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: true,
    viewColumns: true,
    responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};

export const GranteeListMock: TableModuleModel = {
  title: 'Grantee',
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
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: true,
    viewColumns: true,
    responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};
