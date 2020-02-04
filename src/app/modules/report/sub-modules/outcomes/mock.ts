import { IntentTextFieldParams } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';

export const TextFielMock: IntentTextFieldParams[] = [
  {
    description: 'Title',
    // tooltip: 'Please describe the key outcomes the project aims to achieve',
    componentID: 'outcome1',
    value: '',
    setValue: () => {},
  },
  {
    description: 'Project location',
    // tooltip: 'Please describe the key outcomes the project aims to achieve',
    componentID: 'outcome2',
    explanation:
      'In which of the following geographical locations will the project be implemented',
    value: '',
    setValue: () => {},
  },
];

export const policyPriorities: { label: string; value: string }[] = [
  { label: 'Refugees', value: 'Refugees' },
  { label: 'Drug use', value: 'Drug use' },
  { label: 'The Elderly', value: 'The Elderly' },
  { label: 'Prostitution', value: 'Prostitution' },
  {
    label: 'Poverty reduction with a focus on youth and children',
    value: 'Poverty reduction with a focus on youth and children',
  },
  { label: 'Homelessness', value: 'Homelessness' },
  {
    label: 'Prisoner rehabilitation / reintegration',
    value: 'Prisoner rehabilitation / reintegration',
  },
];
