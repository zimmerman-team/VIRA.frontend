import { IntentTextAreaParams } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';

export const ChallengeAreaMock: IntentTextAreaParams[] = [
  {
    description: 'reports.form.cards.key_implementation_challenges',
    componentID: 'outcome1',
    // explanation: 'reports.form.cards.key_implementation_challenges_expl',
    value: '',
    setValue: () => {},
  },
  {
    description: 'reports.form.cards.how_address_challenges',
    componentID: 'outcome2',
    // explanation: 'reports.form.cards.how_address_challenges_expl',
    value: '',
    setValue: () => {},
  },
  {
    description: 'reports.form.cards.other_project',
    componentID: 'outcome3',
    // explanation: 'reports.form.cards.other_project_expl',
    value: '',
    setValue: () => {},
  },
  {
    description: 'reports.form.cards.other_comments',
    componentID: 'outcome4',
    explanation: 'reports.form.cards.other_comments_expl',
    value: '',
    setValue: () => {},
  },
];
