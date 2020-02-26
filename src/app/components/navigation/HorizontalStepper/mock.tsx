import { StepperProps } from 'app/components/navigation/HorizontalStepper';

export const mock: StepperProps = {
  steps: [
    {
      label: 'Outcomes',
      path: 'outcomes',
      disabled: false,
    },
    {
      label: 'Indicator and verification',
      path: 'indicator-verification',
      disabled: true,
    },
    {
      label: 'Challenges and plans',
      path: 'challenges-plans',
      disabled: true,
    },
    {
      label: 'Preview',
      path: 'preview',
      disabled: true,
    },
  ],
  initialTabIndex: 0,
  onStepChange: () => {},
};
