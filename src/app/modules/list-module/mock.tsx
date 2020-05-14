// @ts-nocheck

import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
import { mockDataVar8 as mockDatatable } from 'app/components/datadisplay/Table/mock';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import React from 'react';

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
