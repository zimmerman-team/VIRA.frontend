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
