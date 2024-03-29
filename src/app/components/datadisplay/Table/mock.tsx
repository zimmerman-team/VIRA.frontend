// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { adminTableData } from 'app/assets/data/insingerData';
import { ButtonCellModule } from 'app/components/datadisplay/Table/common/ButtonCell';
import IconCellModule from 'app/components/datadisplay/Table/common/IconCell';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';
/* project-comps */
import { formatMoney } from 'app/components/datadisplay/Table/helpers';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';
import get from 'lodash/get';
/* core */
import React from 'react';
import 'styled-components/macro';

export const mockDataVar1: TableModuleModel = {
  title: 'Aggregated signatory data publication indicator values',
  data: [
    ['Total no. of Grand Bargain signatories', '51', '59', '20', '4'],
    [
      'Organisations* publishing to IATI',
      '73% (37)',
      '81% (48)',
      '100% (12)',
      '- 34',
    ],
  ],
  columns: [
    {
      name: 'Status',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <InfoCellModule value={value} info={value} />;
        },
      },
    },
    {
      name: 'Baseline June 2017',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'May 2019',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Today [DD MM YYYY]',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Changes [20. May] to Today',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
  ],
  options: {
    print: true,
    search: false,
    filter: false,
    download: true,
    rowHover: false,
    pagination: false,
    viewColumns: true,
    responsive: 'vertical',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['InfoCellModule'],
};

export const mockDataVar2: TableModuleModel = {
  title: 'Signatories or their affiliate organisations ',
  data: [
    [
      'ActionAid UK',
      'ActionAid UK',
      'International NGO',
      '2.03',
      'true',
      'true',
      'true',
      'false',
    ],
    [
      'ActionAid UK',
      'ActionAid UK',
      'Multilateral',
      '2.03',
      'true',
      'false',
      'true',
      'na',
    ],
  ],
  columns: [
    {
      name: 'Publishing organisation',
      options: {
        // sortDirection: 'asc',
        sortOrder: {
          // name: 'Date',
          direction: 'asc',
        },
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule
              link={`/signatory-data/${value.code}/overview`}
              value={value.name}
            />
          );
        },
        customFilterListOptions: {
          render: (value) => `Publishing organisation: ${value}`,
        },
      },
    },
    {
      name: 'GB signatory',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListOptions: {
          render: (value) => `GB signatory: ${value}`,
        },
      },
    },
    {
      name: 'Organisation type',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListOptions: {
          render: (value) => `Organisation type: ${value}`,
        },
      },
    },
    {
      name: 'Latest IATI version',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListOptions: {
          render: (value) => `Latest IATI version: ${value}`,
        },
      },
    },
    {
      name: 'Publishing hum.data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListOptions: {
          render: (value) => `Publishing hum.data?: ${value}`,
        },
      },
    },
    {
      name: 'Publishing v2.02 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListOptions: {
          render: (value) => `Publishing v2.02 hum. data?: ${value}`,
        },
      },
    },
    {
      name: 'Publishing v2.03 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListOptions: {
          render: (value) => `Publishing v2.03 hum. data?: ${value}`,
        },
      },
    },
    {
      name: 'Incoming trans traceability',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListOptions: {
          render: (value) => `Incoming TS traceability: ${value}`,
        },
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: false,
    viewColumns: true,
    // responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
    sortFilterList: false,
    onDownload: (
      buildHead: (whatever: any) => string,
      buildBody: (nodata: any) => string,
      columns: any[],
      data: any[]
    ) => {
      let csvData = '';
      // building header
      columns.forEach((column) => {
        csvData = csvData
          .concat('"'.concat(column.name).concat('"'))
          .concat(',');
      });
      csvData = csvData.concat('\n');
      // building body
      data.forEach((row) => {
        row.data.forEach((cell: any, index: number) => {
          // console.log('mock - cell', typeof cell);
          const cellVal = index === 0 ? cell.name : cell;
          csvData = csvData.concat('"'.concat(cellVal).concat('"')).concat(',');
        });
        csvData = csvData.concat('\n');
      });
      return csvData;
    },
    customSort: (data, colIndex, order) => {
      let indexStr = colIndex.toString();
      if (colIndex === 0) {
        indexStr = `[${colIndex}].name`;
      }
      /* todo: juan, please look into refactoring this piece */
      const sortedData = data.sort((a, b) => {
        const v1 = get(a.data, indexStr, '');
        const v2 = get(b.data, indexStr, '');
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      });
      return order === 'asc' ? sortedData : sortedData.reverse();
    },
  },
  columnsCell: [
    'LinkCellModule',
    '',
    '',
    '',
    'IconCellModule',
    'IconCellModule',
    'IconCellModule',
    'IconCellModule',
  ],
  totalCell: true,
  totalRowColsDef: [
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'count' },
    { dataType: 'percentage', percValue: '2.03' },
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
  ],
};

export const mockDataVar3: TableModuleModel = {
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
    responsive: 'vertical',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};

export const mockDataVar4: TableModuleModel = {
  title: 'Providers',
  data: [
    [
      'Action against hunger Canada',
      '000 000 00',
      'National NGO',
      '3',
      '',
      { num: 0, currency: 'EUR' },
    ],
    [
      'Aidsfonds',
      '000 000 00',
      'National NGO',
      '3',
      '',
      { num: 0, currency: 'EUR' },
    ],
    [
      'UNESCO',
      '000 000 00',
      'National NGO',
      '3',
      '',
      { num: 0, currency: 'EUR' },
    ],
  ],
  columns: [
    {
      name: 'Organisation / type / activity',
      options: { filter: false },
    },
    {
      name: 'IATI reference',
      options: { filter: false },
    },
    {
      name: 'Organisation type',
      options: { filter: false },
    },
    {
      name: 'Activites',
      options: { filter: false },
    },
    {
      name: 'Start date',
      options: { filter: false },
    },
    {
      name: 'Amount',
      options: { filter: false },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: false,
    download: true,
    rowHover: true,
    pagination: true,
    viewColumns: true,
    responsive: 'vertical',
    expandableRows: true,
    selectableRows: 'none',
    expandableRowsOnClick: true,
  },
  columnsCell: ['', '', '', '', '', ''],
  totalCell: false,
  expandableData: [
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
  ],
};

export const mockDataVar7: TableModuleModel = {
  title: '',
  data: [
    [
      '2019',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
    [
      '2018',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
    [
      '2017',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
  ],
  columns: [
    {
      name: 'Year',
      options: {
        filter: false,
      },
    },
    {
      name: 'Jan',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Feb',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Mar',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'April',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'May',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'June',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'July',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Aug',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Sep',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Oct',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Nov',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Dec',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
  ],
  options: {
    print: true,
    search: false,
    filter: false,
    download: true,
    rowHover: false,
    pagination: false,
    viewColumns: true,
    responsive: 'standard',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: [''],
};

export const projectsTableConfig: TableModuleModel = {
  title: 'Projects',
  data: [[]], // table9Data,
  columns: [
    {
      name: 'ID',
      options: {
        filter: false,
      },
    },
    {
      name: 'Project',
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
        customBodyRender: (value) => {
          return (
            <LinkCellModule
              css={`
                a {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  line-height: 16px;
                  max-height: 32px;
                  -webkit-line-clamp: 2; /* Write the number of 
                              lines you want to be 
                              displayed */
                  -webkit-box-orient: vertical;
                }
              `}
              value={value}
              link="/projects/detail"
            />
          );
        },
      },
    },
    {
      name: 'Title',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value) => {
          return <LinkCellModule value={value} link="" />;
        },
      },
    },
    {
      name: 'Lable',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: '',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (label) => {
          return <ButtonCellModule label="Label" disabled={false} />;
        },
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: false,
    download: false,
    rowHover: false,
    pagination: true,
    viewColumns: false,
    responsive: 'standard',
    filterType: 'checkbox',
    selectableRows: 'none',
    fixedSelectColumn: false,
    fixedHeader: false,
    // fixedHeaderOptions: { xAxis: false, yAxis: false },
  },
  columnsCell: ['', '', '', 'LinkCellModule', '', ''],
};

export const addTeamMemberTableConfig: TableModuleModel = {
  title: 'Add Team Member',
  data: adminTableData,
  columns: [
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return <Checkbox />;
        },
      },
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <LinkCellModule
              css={`
                a {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  line-height: 16px;
                  max-height: 32px;
                  -webkit-line-clamp: 1; /* Write the number of 
                              lines you want to be 
                              displayed */
                  -webkit-box-orient: vertical;
                }
              `}
              value={value}
              link="/projects/detail"
            />
          );
        },
      },
    },
    {
      name: '',
      options: {
        filter: false,
      },
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return <IconCellModule value="Edit" />;
        },
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: false,
    download: false,
    rowHover: false,
    pagination: true,
    viewColumns: false,
    responsive: 'vertical',
    filterType: 'checkbox',
    selectableRows: 'none',
    fixedHeader: true,
  },
  columnsCell: ['', '', '', 'IconCellModule'],
  cssVariant: 'variant9',
};

export const mockDataVar10: TableModuleModel = {
  title: 'Manage Users',
  data: adminTableData,
  columns: [
    {
      name: 'ID',
      options: {
        filter: false,
      },
    },
    {
      name: 'Name of User Grantee',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <LinkCellModule
              css={`
                a {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  line-height: 16px;
                  max-height: 32px;
                  -webkit-line-clamp: 1; /* Write the number of 
                              lines you want to be 
                              displayed */
                  -webkit-box-orient: vertical;
                }
              `}
              value={value}
              link="/projects/detail"
            />
          );
        },
      },
    },
    {
      name: 'Review',
      options: {
        filter: false,
      },
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return <IconCellModule value="Edit" />;
        },
      },
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value) => {
          return <IconCellModule value="Delete" />;
        },
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: false,
    download: false,
    rowHover: false,
    pagination: true,
    viewColumns: false,
    responsive: 'vertical',
    filterType: 'checkbox',
    selectableRows: 'none',
    fixedHeader: true,
  },
  columnsCell: ['', '', '', 'IconCellModule', 'IconCellModule'],
  cssVariant: 'variant10',
};
