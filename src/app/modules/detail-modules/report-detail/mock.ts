import { TitleParams } from 'app/modules/common/components/TitleParams';
import { StatParams } from 'app/modules/common/components/StatItem';
import { OutcomeCardParams } from 'app/modules/common/components/OutcomeCard';
import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';

export const ReportTitleMock: TitleParams = {
  title: 'Report Title',
  id: 'GB-CHC-274467',
  date: '01.01.2020',
  note: '*earliest and latest activity start dates',
  url_note: 'Grantee Title and Link to it',
  url: 'https://www.google.com',
};

export const ReportStatMock: StatParams[] = [
  {
    label: 'Total project amount',
    value: '10.000€',
  },
  {
    label: 'Project duration',
    value: '01.2019-02.2021',
  },
];

export const ReportOutcomeCardMock: OutcomeCardParams[] = [
  {
    title: 'Contacts',
    description: ' Amsterda, 1396TH, Netherlands',
  },
  {
    title: 'Key outcomes',
    description:
      'Prisoners recidivism reduced through skills-training demonstrably improving their labor market access and retention upon release',
  },
  {
    title: 'Indicator and verification',
    description:
      'Number of prisoners obtaining a Tertiary and Vocational Education certificate, labor market connection after one year after the release from prison',
  },
  {
    title: 'Future plans',
    description:
      'Prisoners recidivism reduced through skills-training demonstrably improving their labor market access and retention upon release',
  },
  {
    title: 'Other comments',
    description:
      'Number of prisoners obtaining a Tertiary and Vocational Education certificate, labor market connection after one year after the release from prison',
  },
];

export const DescriptionMock: DescriptionParams = {
  project_description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
};
