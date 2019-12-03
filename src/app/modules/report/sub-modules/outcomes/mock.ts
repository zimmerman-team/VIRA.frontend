import React from 'react';
import { IntentTextAreaParams } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';
import { IntentTextFieldParams } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';

export const TextFielMock: IntentTextFieldParams[] = [
  {
    description: 'Title',
    // tooltip: 'Please describe the key outcomes the project aims to achieve',
    componentID: 'outcome1',
  },
  {
    description: 'Project location',
    // tooltip: 'Please describe the key outcomes the project aims to achieve',
    componentID: 'outcome2',
    explanation:
      'In which of the following geographical locations will the project be implemented',
  },
];
