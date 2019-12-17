import { IntentTextAreaParams } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';

export const ChallengeAreaMock: IntentTextAreaParams[] = [
  {
    description: 'Key implementation challenges',
    componentID: 'outcome1',
    explanation:
      'Please indicate the key implementation challenges experience and how these were addressed',
  },
  {
    description: 'Other project outcomes and observations',
    componentID: 'outcome2',
    explanation:
      'Did the project achieve any other unexpected (positive or negative) outcomes',
  },
  {
    description: 'Future plans',
    componentID: 'outcome3',
    explanation:
      'Are you likely to apply for funding for future activities from the Insinger Foundation within the next 1-2 years?',
  },
  {
    description: 'Other comments',
    componentID: 'outcome4',
    explanation:
      'Please let us know if you want to share other observations or comments with the Insinger Foundation',
  },
];
