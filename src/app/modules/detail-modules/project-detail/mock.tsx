import React from 'react';

import { TitleParams } from 'app/modules/common/components/TitleParams';
import { StatParams } from 'app/modules/common/components/StatItem';
import { OutcomeCardParams } from 'app/modules/common/components/OutcomeCard';
import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

import { LinkCellModule } from 'app/components/datadisplay/Table/common/LinkCell';

export const ProjectTitleMock: TitleParams = {
  title: 'Project Title',
  id: 'GB-CHC-274467',
  note: '*earliest and latest activity start dates',
  url_note: 'Grantee Title and Link to it',
  url: 'https://www.google.com',
};

export const ProjectStatMock: StatParams[] = [
  {
    label: 'Total project amount',
    value: '10.000€',
  },
  {
    label: 'Project duration',
    value: '01.2019-02.2021',
  },
];

export const ProjectOutcomeCardMock: OutcomeCardParams[] = [
  {
    title: 'Key outcomes',
    description:
      ' Prisoners recidivism reduced through skills-training demonstrably improving their labor market access and retention upon release',
  },
  {
    title: 'Indicator and verification',
    description:
      'Number of prisoners obtaining a Tertiary and Vocational Education certificate, labor market connection after one year after the release from prison',
  },
];

export const DescriptionMock: DescriptionParams = {
  project_description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
};

export const ProjectReportsMock: TableModuleModel = {
  title: 'Reports',
  data: [
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights …',
      'Label, Label',
      '31 Dec 2018',
    ],
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights …',
      'Label, Label',
      '31 Dec 2018',
    ],
    [
      '11003399',
      'Promoting Opportunities for Women s Empowerment and Rights …',
      'Label, Label',
      '31 Dec 2018',
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
      name: 'Title of reports',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: value => {
          return <LinkCellModule value={value} link={''} />;
        },
      },
    },
    {
      name: 'Project name',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Date',
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
    responsive: 'scrollFullHeight',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', '', ''],
};
